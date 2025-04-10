import { ogpDataInitial } from '@/app/config/initials'
import { JSDOM } from 'jsdom'
import { type NextRequest, NextResponse } from 'next/server'

const safeGetAttr = (
  doc: Document,
  selector: string,
  attr: string,
  fallback = '',
) => doc.querySelector(selector)?.getAttribute(attr) || fallback

const resolveURL = (href: string, base: string) => {
  try {
    return new URL(href, base).href
  } catch {
    return ''
  }
}

const extractFavicon = (doc: Document, base: string) => {
  const selectors = [
    'link[rel="apple-touch-icon"]',
    'link[rel="icon"]',
    'link[rel="shortcut icon"]',
  ]

  for (const sel of selectors) {
    const href = doc.querySelector(sel)?.getAttribute('href')
    if (href) return resolveURL(href, base)
  }

  return `https://www.google.com/s2/favicons?domain=${new URL(base).host}`
}

const parseOGP = (doc: Document, url: string) => {
  const base = `https://${new URL(url).host}`

  return {
    title:
      safeGetAttr(doc, 'meta[property="og:title"]', 'content') ||
      safeGetAttr(doc, 'meta[name="title"]', 'content') ||
      'No title available',
    description:
      safeGetAttr(doc, 'meta[property="og:description"]', 'content') ||
      safeGetAttr(doc, 'meta[name="description"]', 'content') ||
      'No description available',
    image:
      safeGetAttr(doc, 'meta[property="og:image"]', 'content') ||
      safeGetAttr(doc, 'meta[name="image"]', 'content') ||
      safeGetAttr(doc, '#imgTagWrapperId img', 'src') ||
      '/default-image.png',
    favicon: extractFavicon(doc, base),
    hostname: new URL(url).host,
    hostLink: base,
    link: url,
    error: [],
  }
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  if (!url) return new Response(null, { status: 400 })

  try {
    const dom = await JSDOM.fromURL(url)
    const ogpData = parseOGP(dom.window.document, url)
    return NextResponse.json(ogpData)
  } catch (error) {
    console.error('Error fetching OGP:', error)
    return NextResponse.json({
      ...ogpDataInitial,
      error: ['Failed to fetch OGP data'],
    })
  }
}

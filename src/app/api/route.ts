import { DEFAULT_IMAGE } from '@/config/default-image-string'
import { ogpDataInitial } from '@/config/initials'
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
    'link[rel="apple-touch-icon-precomposed"]',
    'link[rel="icon"]',
    'link[rel="shortcut icon"]',
  ]

  for (const sel of selectors) {
    const href = doc.querySelector(sel)?.getAttribute('href')
    if (href) return resolveURL(href, base)
  }

  return `https://www.google.com/s2/favicons?domain=${new URL(base).host}`
}
const extractImage = (doc: Document, base: string) => {
  const imgSelectors = [
    'meta[property="og:image"]',
    'meta[name="image"]',
    'meta[property="twitter:image"]',
    'meta[name="twitter:image"]',
  ]

  for (const sel of imgSelectors) {
    const href = doc.querySelector(sel)?.getAttribute('content')
    if (href) return resolveURL(href, base)
  }

  const selectors = [
    'link[rel="apple-touch-icon"]',
    'link[rel="apple-touch-icon-precomposed"]',
  ]

  for (const sel of selectors) {
    const href = doc.querySelector(sel)?.getAttribute('href')
    if (href) return resolveURL(href, base)
  }

  return null
}

const parseOGP = (doc: Document, url: string) => {
  const base = `https://${new URL(url).host}`

  return {
    title:
      safeGetAttr(doc, 'meta[property="og:title"]', 'content') ||
      safeGetAttr(doc, 'meta[name="title"]', 'content') ||
      doc.title ||
      'No title available',
    description:
      safeGetAttr(doc, 'meta[property="og:description"]', 'content') ||
      safeGetAttr(doc, 'meta[name="description"]', 'content') ||
      'No description available',
    image:
      // safeGetAttr(doc, 'meta[property="og:image"]', 'content') ||
      // safeGetAttr(doc, 'meta[name="image"]', 'content') ||
      extractImage(doc, base) ||
      safeGetAttr(doc, '#imgTagWrapperId img', 'src') ||
      DEFAULT_IMAGE,
    favicon: extractFavicon(doc, base),
    hostname: new URL(url).host,
    hostLink: base,
    link: url,
    error: [],
  }
}

export async function GET(request: NextRequest) {
  const requestOrigin = request.headers.get('origin')
  const allowedOrigins = [
    'http://localhost:3000',
    'https://link-card-generator-v2.vercel.app',
  ]

  const allowedOrigin =
    allowedOrigins.find(origin => requestOrigin?.startsWith(origin)) || null

  console.log(requestOrigin, allowedOrigin)

  // オリジンが存在し、許可されたものでなければアクセスを拒否
  // (requestOriginがnullの場合は同一オリジンからのリクエストなので許可)
  if (requestOrigin && !allowedOrigin) {
    return new Response(JSON.stringify({ error: 'Access denied' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const url = request.nextUrl.searchParams.get('url')
  if (!url) return new Response(null, { status: 400 })

  const headers = new Headers()
  if (requestOrigin && allowedOrigin) {
    headers.set('Access-Control-Allow-Origin', allowedOrigin)
    headers.set('Access-Control-Allow-Methods', 'GET')
  }

  try {
    const dom = await JSDOM.fromURL(url)
    const ogpData = parseOGP(dom.window.document, url)
    return NextResponse.json(ogpData, { headers })
  } catch (error) {
    console.error('Error fetching OGP:', error)
    return NextResponse.json(
      {
        ...ogpDataInitial,
        error: ['Failed to fetch OGP data'],
      },
      { headers },
    )
  }
}

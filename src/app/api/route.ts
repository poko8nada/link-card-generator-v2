import { ogpDataInitial } from '@/app/config/initials'
import { JSDOM } from 'jsdom'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  if (!request) return new Response(null, { status: 400 })

  const searchParams = request.nextUrl.searchParams

  const url = searchParams.get('url')
  if (!url) return new Response(null, { status: 400 })

  try {
    const dom = await JSDOM.fromURL(url)
    const document = dom.window.document

    const ogpData = {
      title:
        document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute('content') ||
        document.querySelector('meta[name="title"]')?.getAttribute('content') ||
        'No title available',
      description:
        document
          .querySelector('meta[property="og:description"]')
          ?.getAttribute('content') ||
        document
          .querySelector('meta[name="description"]')
          ?.getAttribute('content') ||
        'No description available',
      image:
        document
          .querySelector('meta[property="og:image"]')
          ?.getAttribute('content') ||
        document.querySelector('meta[name="image"]')?.getAttribute('content') ||
        document.querySelector('#imgTagWrapperId img')?.getAttribute('src') ||
        '/default-image.png',
      favicon:
        document.querySelector('link[rel="icon"]')?.getAttribute('href') ||
        document
          .querySelector('link[rel="shortcut icon"]')
          ?.getAttribute('href') ||
        `https://www.google.com/s2/favicons?domain=${new URL(url).host}` ||
        '/default-favicon.png',
      hostname: new URL(url).host,
      hostLink: `https://${new URL(url).host}`,
      link: url,
      error: [],
    }
    return NextResponse.json(ogpData)
  } catch (error) {
    console.error('Error fetching OGP data:', error)
    const ogpData = {
      ...ogpDataInitial,
      error: ['Failed to fetch OGP data'],
    }
    return NextResponse.json(ogpData)
  }
  // const ogpData = {
}

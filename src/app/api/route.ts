import { JSDOM } from 'jsdom'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  if (!request) return new Response(null, { status: 400 })

  const searchParams = request.nextUrl.searchParams

  const url = searchParams.get('url')
  if (!url) return new Response(null, { status: 400 })

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
    urlOriginal: new URL(url).origin,
  }
  return NextResponse.json(ogpData)
}

import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  if (!request) return new Response(null, { status: 400 })

  const searchParams = request.nextUrl.searchParams

  const url = searchParams.get('url')
  if (!url) return new Response(null, { status: 400 })

  return NextResponse.json(url)
}

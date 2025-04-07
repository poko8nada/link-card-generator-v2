import { headers } from 'next/headers'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const headersData = await headers()
  const host = headersData.get('host')
  const protocol =
    (headersData.get('x-forwarded-proto') ?? host.startWith('localhost'))
      ? 'http'
      : 'https'
  const apiBase = `${protocol}://${host}`

  const url = searchParams.url || ''
  if (!url) {
    return (
      <>
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <h1 className='text-2xl font-bold'>Please enter a URL</h1>
        </div>
      </>
    )
  }

  const result = await fetch(`${apiBase}/api?url=${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await result.json()
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='text-2xl font-bold'>URL: {data}</h1>
      </div>
    </>
  )
}

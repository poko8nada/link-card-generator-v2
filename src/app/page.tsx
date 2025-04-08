import getOwnBaseUrl from '@/lib/getOwnBaseUrl'
import { headers } from 'next/headers'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const url = (await searchParams.url) || null
  if (!url) {
    return (
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='text-2xl font-bold'>No URL provided</h1>
      </div>
    )
  }

  const headersData = await headers()
  const base = getOwnBaseUrl(headersData)

  const result = await fetch(`${base}/api?url=${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await result.json()
  console.log(data)

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        {/* <h1 className='text-2xl font-bold'>URL: {data}</h1> */}
      </div>
    </>
  )
}

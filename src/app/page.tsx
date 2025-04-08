import { ogpDataInitial } from '@/app/config/initials'
import LinkCardTypeA from '@/features/link-card-typeA'
import getOwnBaseUrl from '@/lib/getOwnBaseUrl'
import { headers } from 'next/headers'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const url = (await searchParams.url) || null
  if (!url) {
    return <h1 className='text-2xl font-bold'>No URL provided</h1>
  }

  const headersData = await headers()
  const base = getOwnBaseUrl(headersData)

  const data = await fetch(`${base}/api?url=${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      return {
        ...ogpDataInitial,
        error: ['Failed to fetch data'],
      }
    }
    return res.json()
  })

  console.log(data)

  return (
    <div className='p-4'>
      <LinkCardTypeA data={data} />
    </div>
  )
}

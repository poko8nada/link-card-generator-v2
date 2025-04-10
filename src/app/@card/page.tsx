import { ogpDataInitial } from '@/app/config/initials'
import DisplayCardAndCode from '@/features/display-card-and-code'
import getOwnBaseUrl from '@/lib/getOwnBaseUrl'
import { headers } from 'next/headers'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const url = (await searchParams.url) || null
  if (!url) {
    return null
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
    <div className='w-full mx-auto'>
      {data.error.length > 0 ? (
        <div className='text-red-500 text-lg font-bold grid place-items-center h-40'>
          <p className='text-center'>error : {data.error[0]}</p>
        </div>
      ) : (
        <div className='p-4'>
          <DisplayCardAndCode type='A' data={data} />
        </div>
      )}
    </div>
  )
}

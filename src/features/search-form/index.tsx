'use client'
import { SubmitBtn } from '@/components/submit-btn'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { validateUrl } from './action'

export default function SearchForm() {
  const { push } = useRouter()

  const [searchTerm, setSearchTerm] = useState({
    url: '',
    error: [] as string[],
  })
  const handleSubmit = async (formdata: FormData) => {
    const { url, error } = validateUrl(formdata)

    if (error.length > 0) {
      setSearchTerm(prev => ({
        ...prev,
        error: error,
      }))
      return
    }
    setSearchTerm(prev => ({
      ...prev,
      url: url,
      error: [],
    }))

    const params = new URLSearchParams()
    params.append('url', url)

    push(`/?${params.toString()}`)
  }

  return (
    <form
      action={handleSubmit}
      className='flex items-start justify-between w-full max-w-2xl p-2 mx-auto gap-3'
    >
      <div className='flex flex-col w-full'>
        <Input placeholder='example.com' className='w-full' name='url' />
        {searchTerm.error && (
          <p className='text-red-500 text-xs pl-2 pt-2'>{searchTerm.error}</p>
        )}
      </div>
      <SubmitBtn type='submit' />
    </form>
  )
}

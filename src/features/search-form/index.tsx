'use client'
import { SubmitBtn } from '@/components/submit-btn'
import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useActionState } from 'react'
import { validateUrl } from './action'

export default function SearchForm() {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const initialUrl = searchParams.get('url') || ''

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleSubmit = async (_: any, formdata: FormData) => {
    const { url, error } = validateUrl(formdata)

    if (error.length) {
      return {
        url: '',
        error: error,
      }
    }

    const params = new URLSearchParams()
    params.append('url', url)

    push(`/?${params.toString()}`)
    return {
      url: url,
      error: [],
    }
  }

  const [state, action] = useActionState(handleSubmit, {
    url: initialUrl,
    error: [],
  })

  return (
    <form
      action={action}
      className='flex items-start justify-between w-full max-w-2xl p-2 mx-auto gap-3'
    >
      <div className='flex flex-col w-full'>
        <Input
          placeholder='example.com'
          className='w-full'
          name='url'
          defaultValue={state.url}
        />
        {state.error && (
          <p className='text-red-500 text-xs pl-2 pt-2'>{state.error}</p>
        )}
      </div>
      <SubmitBtn type='submit' />
    </form>
  )
}

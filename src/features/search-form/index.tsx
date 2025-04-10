'use client'
import SearchInput from '@/components/search-input'
import { SubmitBtn } from '@/components/submit-btn'
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

    if (initialUrl === url) {
      return {
        url: url,
        error: [],
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
      className='flex items-start justify-between w-full max-w-2xl p-2 gap-3 mx-auto'
    >
      <SearchInput url={state.url} error={state.error} />
      <SubmitBtn type='submit' />
    </form>
  )
}

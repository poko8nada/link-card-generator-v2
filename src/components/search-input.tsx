'use client'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'

export default function SearchInput({
  url,
  error,
}: { url: string; error: string[] }) {
  const { pending } = useFormStatus()
  return (
    <div className='flex flex-col w-full'>
      <Input
        placeholder='example.com'
        className={cn(
          'w-full',
          error.length
            ? '!border-red-500 focus:!ring-1 focus:!ring-red-500 focus:!border-red-500 !ring-red-500'
            : '',
        )}
        name='url'
        defaultValue={url}
        disabled={pending}
      />
      {error && <p className='text-red-500 text-xs pl-2 pt-2'>{error}</p>}
    </div>
  )
}

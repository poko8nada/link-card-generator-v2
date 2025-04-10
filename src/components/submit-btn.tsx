import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export function SubmitBtn({ ...props }) {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      disabled={pending}
      className='w-full max-w-[100px]'
      {...props}
    >
      {pending ? <LoaderCircle className='animate-spin' /> : 'Search'}
    </Button>
  )
}

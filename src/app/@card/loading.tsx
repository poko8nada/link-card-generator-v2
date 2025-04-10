import { Loader } from 'lucide-react'

export default async function Loading() {
  return (
    <div className='w-full flex items-center justify-center h-[500px]'>
      <Loader className='animate-spin text-gray-500' />
    </div>
  )
}

import ServiceInfo from '@/features/service-info'
export default async function Home() {
  return (
    <div className='w-full h-[500px] p-4 not-only-of-type:flex flex-col items-center justify-center'>
      <ServiceInfo />
    </div>
  )
}

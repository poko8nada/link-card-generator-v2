export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='text-2xl font-bold'>URL: {searchParams.url}</h1>
      </div>
    </>
  )
}

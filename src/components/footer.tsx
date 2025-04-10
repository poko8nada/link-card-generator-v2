export default function Footer() {
  return (
    <footer className='mt-4'>
      <section className='flex items-center justify-center h-10'>
        <p className='text-sm'>
          <span>&copy; </span>
          <span>{new Date().getFullYear()} </span>
          <a
            href='https://pokohanada.com'
            target='_blank'
            rel='noreferrer'
            className='hover:underline underline-offset-2'
          >
            PokoHanada.com
          </a>
        </p>
      </section>
    </footer>
  )
}

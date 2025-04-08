import type { OGPDataInitial } from '@/app/config/initials'
export default function LinkCardTypeA({ data }: { data: OGPDataInitial }) {
  const { title, description, image, favicon, hostname, link } = data
  return (
    <div>
      <a
        href={link}
        className='group relative block w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl sm:max-w-[800px] max-w-[400px]'
      >
        <div className='flex flex-col sm:flex-row'>
          <div className='relative sm:w-1/3 w-full h-48 sm:h-auto overflow-hidden'>
            <img
              src={image}
              alt={title}
              className='absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
            />
          </div>
          <div className='flex flex-col justify-between sm:w-2/3 w-full p-5'>
            <div>
              <h3 className='text-xl font-semibold leading-snug text-gray-900 group-hover:text-blue-600 transition-colors'>
                {title}
              </h3>
              <p className='mt-2 text-sm text-gray-600 line-clamp-3'>
                {description}
              </p>
            </div>
            <div className='mt-4 text-xs text-gray-400 flex items-center gap-1'>
              <img
                src={favicon}
                alt='favicon'
                className='h-6 w-6 rounded-full'
              />
              <span>{hostname}</span>
            </div>
          </div>
        </div>
      </a>
      <div className='w-80 h-60 [perspective:1000px]'>
        <div className='relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]'>
          {/* Front Side */}
          <div className='absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden [backface-visibility:hidden]'>
            <img src={image} alt={title} className='w-full h-40 object-cover' />
            <div className='p-3 text-center'>
              <h3 className='text-base font-semibold text-gray-800'>{title}</h3>
            </div>
          </div>

          {/* Back Side */}
          <div className='absolute inset-0 bg-blue-600 text-white rounded-2xl shadow-md flex flex-col justify-between p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <p className='text-sm line-clamp-4'>{description}</p>
            <a
              href={link}
              className='mt-4 text-xs bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition'
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { siteMetadata } from '@/config/site-metadata'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = siteMetadata

export default function RootLayout({
  children,
  search,
  card,
}: Readonly<{
  children: React.ReactNode
  search: React.ReactNode
  card: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='min-h-[calc(100dvh-40px-20px)]'>
          {search}
          <div className='flex flex-col items-center w-full mx-auto'>
            <div className='relative w-full min-h-40'>
              <GridPattern className='border' width={20} height={20} />
              {card}
            </div>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}

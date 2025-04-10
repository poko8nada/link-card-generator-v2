import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import { GridPattern } from '@/components/magicui/grid-pattern'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blog Card Maker | ブログを彩る美しいリンクカード',
  description:
    '指定したURLからOGP情報を自動取得して、ブログやウェブサイトに美しいリンクカードを簡単に追加できるサービスです。',
  keywords: [
    'OGP',
    'ブログカード',
    'リンクカード',
    'Webデザイン',
    'SEO',
    'Next.js',
  ],
  openGraph: {
    title: 'Blog Card Maker | ブログを彩る美しいリンクカード',
    description:
      'URLを貼るだけで、タイトル・画像・説明・ファビコンを自動取得。完全レスポンシブ対応のリンクカードを生成します。',
    url: 'https://link-card-generator-v2.vercel.app', // ← 公開URLに変更してください
    siteName: 'Blog Card Maker',
    images: [
      {
        url: 'https://link-card-generator-v2.vercel.app/ogp-image.png', // OGP用の画像URLを設定
        width: 1200,
        height: 630,
        alt: 'Blog Card Maker サービスイメージ',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Card Maker | ブログを彩る美しいリンクカード',
    description:
      'URLを貼るだけでOGP情報を取得して、美しいリンクカードを簡単に作成できます。',
    images: ['https://link-card-generator-v2.vercel.app/ogp-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://link-card-generator-v2.vercel.app'),
}

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

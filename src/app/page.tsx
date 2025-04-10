import { siteMetadata } from '@/config/site-metadata'
import ServiceInfo from '@/features/service-info'
import type { Metadata } from 'next'

export async function generateMetadata({
  searchParams,
}: { searchParams: { url?: string } }): Promise<Metadata> {
  const decodedUrl = decodeURIComponent(searchParams.url || '')

  if (!decodedUrl) {
    return {}
  }

  const { hostname } = new URL(decodedUrl)
  const siteTitle = hostname.replace('www.', '')

  return {
    title: `${siteTitle} の検索結果 | Blog Card Maker`,
    description: `「${siteTitle}」のOGP情報をもとに作成されたリンクカードのプレビューです。`,
    openGraph: {
      title: `${siteTitle} の検索結果 | Blog Card Maker`,
      description: `「${siteTitle}」のOGP情報をもとに作成されたリンクカードのプレビューです。`,
      url: `https://link-card-generator-v2.vercel.app/?url=${encodeURIComponent(decodedUrl)}`,
      images: [{ ...siteMetadata.openGraph.images[0] }],
    },
    twitter: {
      title: `${siteTitle} の検索結果 | Blog Card Maker`,
      description: `「${siteTitle}」のOGP情報をもとに作成されたリンクカードのプレビューです。`,
      images: [siteMetadata.twitter.images[0]],
    },
  }
}

export default async function Home() {
  return (
    <div className='w-full h-[500px] p-4 not-only-of-type:flex flex-col items-center justify-center'>
      <ServiceInfo />
    </div>
  )
}

export const siteMetadata = {
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

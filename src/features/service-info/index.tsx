import { Link } from 'lucide-react'
import { Smartphone } from 'lucide-react'
import { Copy } from 'lucide-react'

export default function ServiceInfo() {
  return (
    <div className='max-w-xl mx-auto p-6 rounded-2xl border border-neutral-200 bg-white shadow-lg'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-extrabold text-neutral-900 inline-block relative'>
          Blog Card Maker
          <span className='block h-1.5 w-16 bg-neutral-500 mx-auto mt-2 rounded-full' />
        </h1>
        <p className='text-neutral-500 mt-3 text-sm font-medium'>
          ブログを彩る美しいリンクカード
        </p>
      </div>

      <div className='space-y-5'>
        <div className='flex items-start space-x-4'>
          <div className='flex-shrink-0 mt-1'>
            <div className='p-2 bg-neutral-200 rounded-full text-neutral-800 flex items-center justify-center'>
              <Link className='w-5 h-5' />
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-neutral-900 mb-1'>
              自動OGP情報取得
            </h3>
            <p className='text-neutral-600 text-sm leading-relaxed'>
              指定したURLから
              <span className='text-black underline underline-offset-3 font-semibold'>
                タイトル・説明・画像・ファビコン
              </span>
              を自動取得し、 視覚的に魅力的なリンクカードを生成します。
            </p>
          </div>
        </div>

        <div className='flex items-start space-x-4'>
          <div className='flex-shrink-0 mt-1'>
            <div className='p-2 bg-neutral-200 rounded-full text-neutral-800 flex items-center justify-center'>
              <Smartphone className='w-5 h-5' />
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-neutral-900 mb-1'>
              完全レスポンシブ対応
            </h3>
            <p className='text-neutral-600 text-sm leading-relaxed'>
              すべてのデバイスで
              <span className='text-black underline underline-offset-3 font-semibold'>
                最適な表示
              </span>
              を実現。
              スマートフォンからPCまで、どの画面サイズでも美しく表示されます。
            </p>
          </div>
        </div>

        <div className='flex items-start space-x-4'>
          <div className='flex-shrink-0 mt-1'>
            <div className='p-2 bg-neutral-200 rounded-full text-neutral-800 flex items-center justify-center'>
              <Copy className='w-5 h-5' />
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-neutral-900 mb-1'>
              コピー＆ペーストで簡単導入
            </h3>
            <p className='text-neutral-600 text-sm leading-relaxed'>
              生成されたHTMLとCSSは
              <span className='text-black underline underline-offset-3 font-semibold'>
                そのまま利用可能
              </span>
              。
              実装の手間なく、あなたのブログやウェブサイトに美しいカードを追加できます。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

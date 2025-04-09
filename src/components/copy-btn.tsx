'use client'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function CopyBtn({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
  return (
    <div className='absolute right-2 top-2 z-10'>
      <Button
        variant='ghost'
        size='icon'
        className='hover:bg-white/20'
        onClick={handleCopy}
      >
        {copied ? (
          <Check className='text-neutral-200' />
        ) : (
          <Copy className='text-neutral-200' />
        )}
      </Button>
    </div>
  )
}

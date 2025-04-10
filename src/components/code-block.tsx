import CopyBtn from './copy-btn'

export default function CodeBlock({
  code,
  styles,
}: { code: string; styles: string }) {
  const formattedCode = `<style>${styles}</style>\n${code}`
  return (
    <div className='w-full max-w-[800px] relative mb-[-80px]'>
      <CopyBtn code={formattedCode} />
      <div className=' overflow-x-auto rounded-xl border bg-[#1f1f1f] max-h-[400px] '>
        <pre className='w-full p-4 pt-7 pr-9 text-xs text-neutral-200 font-mono leading-tight whitespace-pre-wrap break-words'>
          <code>{formattedCode}</code>
        </pre>
      </div>
      <div className='rounded-b-xl translate-y-[-80px] w-full h-20 bg-linear-to-t from-[#171717]/90 to-[#171717]/10' />
    </div>
  )
}

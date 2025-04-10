import CodeBlock from '@/components/code-block'
import HtmlStringRender from '@/components/html-string-render'
import { codeStrings, styleStrings } from '@/config/card-strings'
import type { OGPDataInitial } from '@/config/initials'

export default function DisplayCardAndCode({
  type = 'A',
  data,
}: { type: string; data: OGPDataInitial }) {
  const code = codeStrings[type]
  const style = styleStrings[type]
  return (
    <div className='flex flex-col gap-8 items-center justify-center '>
      <HtmlStringRender code={code(data)} styles={style} />
      <CodeBlock code={code(data)} styles={style} />
    </div>
  )
}

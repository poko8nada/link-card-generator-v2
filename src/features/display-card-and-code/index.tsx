import { codeStrings, styleStrings } from '@/app/config/card-strings'
import type { OGPDataInitial } from '@/app/config/initials'
import CodeBlock from '@/components/code-block'
import HtmlStringRender from '@/components/html-string-render'

export default function DisplayCardAndCode({
  type = 'A',
  data,
}: { type: string; data: OGPDataInitial }) {
  const code = codeStrings[type]
  const style = styleStrings[type]
  return (
    <div className='flex flex-col gap-4 items-center '>
      <HtmlStringRender code={code(data)} styles={style} />
      <CodeBlock code={code(data)} styles={style} />
    </div>
  )
}

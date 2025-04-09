'use client'
import parse from 'html-react-parser'

export default function HtmlStringRender({
  code,
  styles,
}: { code: string; styles: string }) {
  return (
    <>
      <style>{styles}</style>
      {parse(code)}
    </>
  )
}

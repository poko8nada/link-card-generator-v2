export function validateUrl(formdata: FormData): {
  url: string
  error: string[]
} {
  const urlValue = formdata.get('url')?.toString().trim().replace(/\/$/, '')

  if (!urlValue) {
    return { url: '', error: ['empty URL'] }
  }

  const addProtocolUrl =
    urlValue.startsWith('http://') || urlValue.startsWith('https://')
      ? urlValue
      : `https://${urlValue}`

  try {
    new URL(addProtocolUrl)
  } catch {
    return { url: '', error: ['invalid URL'] }
  }

  return { url: addProtocolUrl, error: [] }
}

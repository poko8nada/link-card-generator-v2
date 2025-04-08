const URL_FIELD = 'url'
const EMPTY_URL_ERROR = 'empty URL'
const INVALID_URL_ERROR = 'invalid URL'
const DEFAULT_PROTOCOL = 'https://'

export function validateUrl(formdata: FormData): {
  url: string
  error: string[]
} {
  const urlValue = formdata.get(URL_FIELD)?.toString().trim().replace(/\/$/, '')

  if (!urlValue) {
    return { url: '', error: [EMPTY_URL_ERROR] }
  }

  const addProtocolUrl =
    urlValue.startsWith('http://') || urlValue.startsWith('https://')
      ? urlValue
      : `${DEFAULT_PROTOCOL}${urlValue}`

  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/

  if (!urlPattern.test(addProtocolUrl)) {
    return { url: '', error: [INVALID_URL_ERROR] }
  }

  return { url: addProtocolUrl, error: [] }
}

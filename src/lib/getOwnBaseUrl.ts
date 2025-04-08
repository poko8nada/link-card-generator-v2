export default function getOwnBaseUrl(headersData: Headers) {
  const host = headersData.get('host') as string
  const protocol =
    (headersData.get('x-forwarded-proto') ?? host.startsWith('localhost'))
      ? 'http'
      : 'https'
  return `${protocol}://${host}`
}

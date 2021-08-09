function shuffle(str: string): string
function shuffle(arr: string[]): string[]
function shuffle(target: string | string[]) {
  // Cache the length value
  const charsetLength = target.length
  const isStr = typeof target === 'string'
  const result: string[] = isStr
    ? (target as string).split('')
    : (target as string[])

  for (let i = charsetLength - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1))
    const tmp = result[i]

    result[i] = result[newIndex]
    result[newIndex] = tmp
  }

  return isStr ? result.join('') : result
}

export default shuffle

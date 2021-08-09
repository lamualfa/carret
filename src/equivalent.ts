function equivalent(index: number, str: string): string
function equivalent(index: number, arr: string[]): string
function equivalent(index: number, target: string | string[]) {
  const length = target.length

  let result = ''

  while (index >= length) {
    const i = index % length
    index = (index - i) / length

    result = target[i] + result
  }

  result = target[index] + result

  return result
}

export default equivalent

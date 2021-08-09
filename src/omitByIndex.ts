function omitByIndex(str: string, index?: number): string
function omitByIndex(arr: string[], index?: number): string[]
function omitByIndex<T extends string | string[]>(
  target: T,
  index?: number
): T {
  if (typeof target === 'string') {
    return (
      index === 0
        ? target.substr(1)
        : target.substring(0, index) + target.substring(index + 1)
    ) as T
  }

  return (
    index === 0
      ? target.slice(1)
      : target.slice(0, index).concat(target.slice(index + 1))
  ) as T
}

export default omitByIndex

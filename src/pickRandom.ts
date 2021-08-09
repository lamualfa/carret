import randomNumber from './randomNumber'
import omitByIndex from './omitByIndex'

function pickRandom(str: string, total?: number): string
function pickRandom(arr: string[], total?: number): string[]
function pickRandom<T extends string | string[]>(target: T, total?: number): T {
  total = total || target.length

  const isStr = typeof target === 'string'
  let result = isStr ? '' : []

  while (target.length > 0 && (total -= 1) >= 0) {
    const index = randomNumber(0, target.length - 1)
    const picked = target[index]

    // @ts-ignore
    target = omitByIndex(target, index)

    // Don't worry, If statement in JS is very fast
    if (isStr) {
      result += picked
    } else {
      // @ts-ignore
      result.push(picked)
    }
  }

  return result as T
}

export default pickRandom

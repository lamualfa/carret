const {
  equivalent,
  randomNumber,
  shuffle,
  generateCharset,
  omitByIndex,
  pickRandom,
} = require('./dist/index.cjs')

function mockPickRandom(target) {
  return () => {
    let totalTest = 10

    while ((totalTest -= 1) >= 0) {
      expect(pickRandom(target, target.length)).not.toBe(target)
    }
  }
}
function mockRandomNumber(expectNumber, min, max, totalTest) {
  return () => {
    let isReached

    while ((totalTest -= 1)) {
      const random = randomNumber(min, max)
      if (random === expectNumber) {
        isReached = true
        break
      }
    }

    expect(isReached).toBe(true)
  }
}

describe('omitByIndex', () => {
  it('valid result: string', () => {
    const target = '012345'

    expect(omitByIndex(target, 0)).toEqual('12345')
    expect(omitByIndex(target, 3)).toEqual('01245')
    expect(omitByIndex(target, 5)).toEqual('01234')
  })

  it('valid result: array', () => {
    const target = ['0', '1', '2', '3', '4', '5']

    expect(omitByIndex(target, 0)).toEqual(['1', '2', '3', '4', '5'])
    expect(omitByIndex(target, 2)).toEqual(['0', '1', '3', '4', '5'])
    expect(omitByIndex(target, 5)).toEqual(['0', '1', '2', '3', '4'])
  })
})

describe('pickRandom', () => {
  it(
    'returned shuffled picked string',
    mockPickRandom('abcdefghijklmnopqrstuvwxyz')
  )

  it(
    'returned shuffled picked array',
    mockPickRandom(['0', '1', '2', '3', '4', '5'])
  )
})

describe('equivalent', () => {
  it('valid result', () => {
    let i = 0

    while ((i += 1) <= 1000)
      expect(equivalent(i, '0123456789')).toEqual(i.toString())
  })
})

describe('randomNumber', () => {
  const min = 0
  const max = 100
  const totalTest = 1000

  it(
    `is inclusive min result reached in ${totalTest} calls`,
    mockRandomNumber(min, min, max, totalTest)
  )

  it(
    `is inclusive max result reached in ${totalTest} calls`,
    mockRandomNumber(max, min, max, totalTest)
  )
})

describe('shuffle', () => {
  const charset = 'abcdefghijklmnopqrstuvwxyz'

  it('returned shuffled string', () => {
    let numberTest = 1000

    while ((numberTest -= 1)) expect(shuffle(charset)).not.toEqual(charset)
  })

  it('returned shuffled array', () => {
    let numberTest = 1000
    const arrayCharset = charset.split('')

    while ((numberTest -= 1))
      expect(shuffle(arrayCharset).join('')).not.toEqual(charset)
  })
})

describe('generateCharset', () => {
  it('valid result', () => {
    // D is foreign pattern
    expect(generateCharset('aAcD0s', '!&#')).toBe(
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!&#0123456789-._~'
    )
  })
})

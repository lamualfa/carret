const {
  equivalent,
  randomNumber,
  shuffle,
  generateCharset,
} = require('./index');

describe('equivalent', () => {
  it('valid result', () => {
    let i = 0;

    while ((i += 1) <= 1000)
      expect(equivalent(i, '0123456789')).toEqual(i.toString());
  });
});

function mockRandomNumber(expectNumber, min, max, totalTest) {
  return () => {
    let isReached;

    while ((totalTest -= 1)) {
      const random = randomNumber(min, max);
      if (random === expectNumber) {
        isReached = true;
        break;
      }
    }

    expect(isReached).toBe(true);
  };
}

describe('randomNumber', () => {
  const min = 0;
  const max = 100;
  const totalTest = 1000;

  it(
    `is inclusive min result reached in ${totalTest} calls`,
    mockRandomNumber(min, min, max, totalTest)
  );

  it(
    `is inclusive max result reached in ${totalTest} calls`,
    mockRandomNumber(max, min, max, totalTest)
  );
});

describe('shuffle', () => {
  const charset = 'abcdefghijklmnopqrstuvwxyz';

  it('returned shuffled string', () => {
    let numberTest = 1000;

    while ((numberTest -= 1)) expect(shuffle(charset)).not.toEqual(charset);
  });

  it('returned shuffled array', () => {
    let numberTest = 1000;
    const arrayCharset = charset.split('');

    while ((numberTest -= 1))
      expect(shuffle(arrayCharset).join('')).not.toEqual(charset);
  });
});

describe('generateCharset', () => {
  it('valid result', () => {
    // D is foreign pattern
    expect(generateCharset('aAcD0s', '!&#')).toBe(
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!&#0123456789-._~'
    );
  });
});

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

describe('randomNumber', () => {
  const min = 0;
  const max = 100;
  const totalTestProb = 1000;

  it(`has inclusive min in ${totalTestProb} calls`, () => {
    let testCount = totalTestProb;

    while ((testCount -= 1)) {
      const random = randomNumber(min, max);

      if (random === min) break;
      else if (totalTestProb === 1) expect(random).toEqual(min);
    }
  });

  it(`has inclusive max in ${totalTestProb} calls`, () => {
    let testCount = totalTestProb;

    while ((testCount -= 1)) {
      const random = randomNumber(min, max);

      if (random === max) break;
      else if (totalTestProb === 1) expect(random).toEqual(max);
    }
  });
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

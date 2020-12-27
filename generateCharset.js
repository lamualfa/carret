'use strict';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = ALPHABET.toLowerCase();
const NUMERIC = '0123456789';
const HEX = `${NUMERIC}ABCDEF`;
const SYMBOL = '-._~';

const base = {
  a: alphabet,
  A: ALPHABET,
  0: NUMERIC,
  h: HEX.toLocaleLowerCase(),
  H: HEX,
  u: `${NUMERIC}${alphabet}${ALPHABET}${SYMBOL}`,
  s: SYMBOL,
};

module.exports = function generateCharset(pattern, custom) {
  let result = '';
  for (let i = 0; i < pattern.length; i += 1) {
    const symbol = pattern.substr(i, 1);
    const charset = symbol === 'c' && custom ? custom : base[symbol];
    if (charset) result += charset;
  }

  return result;
};

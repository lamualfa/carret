[![NPM Version](https://badgen.net/npm/v/carret?icon=npm)](https://www.npmjs.com/package/carret)
[![Github License](https://badgen.net/github/license/lamualfa/carret?color=purple&label=license)](https://github.com/lamualfa/carret/blob/master/LICENSE)
![CI](https://github.com/lamualfa/carret/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/3fc685eeb43acfed16aa/maintainability)](https://codeclimate.com/github/lamualfa/carret/maintainability)
[![Coverage](https://codecov.io/gh/lamualfa/carret/branch/master/graph/badge.svg?token=NZ6VHIHJJV)](https://codecov.io/gh/lamualfa/carret)

# Carret

The Collection of charset utilities or helpers with zero dependencies.

**Advantages**

- 100% Test Coverage
- Zero Dependencies
- Cross Browser Support
- Blazing Fast
- Use native `for` loop instead `forEach` or `map` method

## Quick Start

- [Installation](#installation)
- [Usage](#usage)
  - [Import All](#import-all)
  - [Import Specific](#import-specific)
- [Utilities](#utilities)
  - [Equivalent](#equivalent)
  - [Generate Charset](#generate-charset) - Generate a Charset with custom pattern
  - [Random Number](#random-number) - Generate Random Number with Min & Max
  - [Shuffle](#shuffle) - for String & Array

## Installation

```bash
npm install carret
# Or
yarn add carret
```

## Usage

### Import All
If you want to import a whole of the module, you can import like this:

```js
const { shuffle } = require('carret');
```

### Import Specific

or if you want to import only specific function to reduce the bundle size, please import like this:

```js
const shuffle = require('carret/shuffle')
```

## Utilities

### Equivalent

Function used to get the equivalent of a `index` in the form of the entered `charset`.

#### Formats

**`equivalent(index, charset) : string`**

- `index` - Desired index value
- `charset` - Target charset

#### Example

```js
equivalent(1502, '0123456789');
// Output: 1502

equivalent(2, 'abcdef');
// Output: c

equivalent(25, 'abcdefghijklmnopqrstuvwxyz');
// Output: z

equivalent(26, 'abcdefghijklmnopqrstuvwxyz');
// Output: ba

// With .padStart
equivalent(6, '0123456789').padStart(4, '0');
// Output: 0006
```

#### Use Case

- Generate Alphabet Increment ID like `aaaa`, `aaab`, `aaac`, etc.

<hr>

### Generate Charset

Generate charset using given pattern.

#### Formats

**`generateCharset(pattern, ?custom) : string`**

- `pattern` - Pattern used to fill the charset

#### Example

```js
// Alphabet (lower) & Alphabet (upper)
generateCharset('aA');
// Output: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ

// Numeric & Alphabet (lower)
generateCharset('0a');
// Output: 0123456789abcdefghijklmnopqrstuvwxyz

// Hex (lower)
generateCharset('h');
// Output: 0123456789abcdef

// Hex (lower) + Custom
generateCharset('ch', 'blabla');
// Output: blabla0123456789abcdef
```

#### Available symbol pattern

- `a` - Alphabet Lower Case (`abcdefghijklmnopqrstuvwxyz`)
- `A` - Alphabet Upper Case (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)
- `0` - Numeric (`0123456789`)
- `h` - Hex Lower Case (`0123456789abcdef`)
- `H` - Hex Upper Case (`0123456789ABCDEF`)
- `u` - URL Friendly Characters (`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._~`)
- `s` - URL Frinedly Symbol Only (`-._~`)
- `c` - Custom characters that you pass in `custom` parameter

<hr>

### Random Number

Generate random number between min(inclusive) and max(inclusive).

#### Formats

**`randomNumber(min, max) : number`**

- `min` - Minimal random value will be generated (inclusive)
- `max` - Max random value will be generated (inclusive)

#### Example

```js
randomNumber(0, 5);
// Output: 4

randomNumber(0, 5);
// Output: 0

randomNumber(0, 8);
// Output: 8
```

<hr>

### Shuffle

Shuffle the entered charset.

#### Formats

**`shuffle(charset) : string | Array<string>`**

- `charset` - Target charset

#### Example

```js
shuffle('abc');
// Output: bca

shuffle('abcd');
// Output: dacb

shuffle('0123456');
// Output: 214653

shuffle(['a', 'b', 'c']);
// Output: ['c', 'a', 'b']
```

#### Use Case

- Shuffling the existing charset.
- Shuffling the dataset.
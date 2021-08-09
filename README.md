[![NPM Version](https://badgen.net/npm/v/carret?icon=npm)](https://www.npmjs.com/package/carret)
[![Github License](https://badgen.net/github/license/lamualfa/carret?color=purple&label=license)](https://github.com/lamualfa/carret/blob/master/LICENSE)
![CI](https://github.com/lamualfa/carret/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/3fc685eeb43acfed16aa/maintainability)](https://codeclimate.com/github/lamualfa/carret/maintainability)
[![Coverage](https://codecov.io/gh/lamualfa/carret/branch/master/graph/badge.svg?token=NZ6VHIHJJV)](https://codecov.io/gh/lamualfa/carret)

# Carret

The collections of lightweight utilities to make your life easier 🌸.

**Advantages**

- ☑️ 100% Test Coverage
- 📦 Zero Dependencies
- 🔀 Cross Browser Support
- ⚡ Blazingly Fast
- Typescript support by default
- Support CommonJS, UMD, ESM and Modern JS format.
- Use native `for` loop instead `forEach` or `map` method

## Quick Start

- [Installation](#installation)
- [Usage](#usage)
  - [ESM](#esm)
  - [CommonJS](#commonjs)
  - [CDN](#cdn)
- [Utilities](#utilities)
  - [Equivalent](#equivalent)
  - [Omit by Index](#omit-by-index) - Remove specific element based on the index.
  - [Generate Charset](#generate-charset) - Generate a Charset with custom pattern.
  - [Random Number](#random-number) - Generate Random Number with Min & Max.
  - [Shuffle](#shuffle) - Shuffle String or Array.
  - [Pick Random](#pick-random) - Pick random elements from String or Array.

## Installation

**NPM**

```bash
npm install carret
```

**Yarn**

```bash
yarn add carret
```

## Usage

### ESM

```js
import { equivalent, omitByIndex } from 'carret'
```

> Don't worry about unnecessary `import`. It's will removed automatically with Tree Shaking.

**Warning**

You might get an error if you using the import method above in project like Next.js. To solve the error, just import like this instead:

```js
import * as carret from 'carret'

const { equivalent, omitByIndex } = carret
```

### CommonJS

```js
const { equivalent, omitByIndex } = require('carret)
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/carret@latest"></script>

<script>
  const { equivalent, omitByIndex } = carret
</script>
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
equivalent(1502, '0123456789')
// Output: 1502

equivalent(2, 'abcdef')
// Output: c

equivalent(25, 'abcdefghijklmnopqrstuvwxyz')
// Output: z

equivalent(26, 'abcdefghijklmnopqrstuvwxyz')
// Output: ba

// With .padStart
equivalent(6, '0123456789').padStart(4, '0')
// Output: 0006
```

#### Use Case

- Generate Alphabet Increment ID like `aaaa`, `aaab`, `aaac`, etc.

<hr>

### Omit by Index

Function used to remove specific element from a string or an array.

#### Formats

**`omitByIndex(target: string | string[], index: number) : string | string[]`**

- `target` - Target to omit
- `charset` - The index of element to be removed

#### Example

```js
omitByIndex('0123456789', 5)
// Output: 012346789

omitByIndex('abcdefg', 2)
// Output: abdefg

omitByIndex(['a', 'b', 'c', 'd'], 3)
// Output: ['a', 'b', 'c']
```

<hr>

### Generate Charset

Generate charset using given pattern.

#### Formats

**`generateCharset(pattern, ?custom) : string`**

- `pattern` - Pattern used to fill the charset

#### Example

```js
// Alphabet (lower) & Alphabet (upper)
generateCharset('aA')
// Output: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ

// Numeric & Alphabet (lower)
generateCharset('0a')
// Output: 0123456789abcdefghijklmnopqrstuvwxyz

// Hex (lower)
generateCharset('h')
// Output: 0123456789abcdef

// Hex (lower) + Custom
generateCharset('ch', 'blabla')
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
randomNumber(0, 5)
// Output: 4

randomNumber(0, 5)
// Output: 0

randomNumber(0, 5)
// Output: 3

randomNumber(0, 8)
// Output: 8
```

<hr>

### Shuffle

Shuffle the entered target.

#### Formats

**`shuffle(target: string | string[]) : string | string[]`**

- `target` - Target String or Array to be shuffled.

#### Example

```js
shuffle('abc')
// Output: bca

shuffle('abcd')
// Output: dacb

shuffle('0123456')
// Output: 2146530

shuffle(['a', 'b', 'c'])
// Output: ['c', 'a', 'b']
```

#### Use Case

- Shuffling the existing charset.
- Shuffling the dataset.

<hr>

### Pick Random

Pick random elements from String or Array uniquely.

#### Formats

**`pickRandom(target: string | string[], total?: number) : string | string[]`**

- `target` - Target String or Array
- `total` - Total elements to be picked from `target`

#### Example

```js
pickRandom('abc', 2)
// Output: ca

pickRandom('abcd', 1)
// Output: b

pickRandom('0123456', 5)
// Output: 21465

pickRandom(['a', 'b', 'c'], 2)
// Output: ['c', 'b']
```

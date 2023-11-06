/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-extend-native */
// We have an array of unique elements. A special kind of permutation is the one that
// has all of its elements in a different position than the original.

// Let's see how many of these permutations may be generated from an array of four elements.
// We put the original array with square brackets and the wanted permutations with parentheses.

// arr = [1, 2, 3, 4]

//       (2, 1, 4, 3)
//       (2, 3, 4, 1)
//       (2, 4, 1, 3)
//       (3, 1, 4, 2)
//       (3, 4, 1, 2)
//       (3, 4, 2, 1)
//       (4, 1, 2, 3)
//       (4, 3, 1, 2)
//       (4, 3, 2, 1)
//       _____________
// A total of 9 permutations with all their elements in different positions than arr

// The task for this kata would be to create a code to count all these permutations for an array of certain length.

// Features of the random tests:

// l = length of the array
// 10 ≤ l ≤ 5000

BigInt.prototype.pop = function pop() {
  const str = this.toString()

  return str.slice(0, str.length - 1)
}

// arr2 = [1, 2, 3]

//        (2, 3, 1)
//        (3, 1, 2)

// arr = [1, 2, 3, 4]

//       (2, 1, 4, 3)
//       (2, 3, 4, 1)
//       (2, 4, 1, 3)
//       (3, 1, 4, 2)
//       (3, 4, 1, 2)
//       (3, 4, 2, 1)
//       (4, 1, 2, 3)
//       (4, 3, 1, 2)
//       (4, 3, 2, 1)

// 1 3 4 5 1

const digits = [
  [1, 2, 3, 4, 5],
]
const schema = [
  [2, 1, 4, 5, 3], // 2, 1
  [2, 1, 5, 3, 4],
  [2, 3, 1, 5, 4], // 2, 3
  [2, 3, 4, 5, 1],
  [2, 3, 5, 1, 4],
  [2, 4, 1, 5, 3], // 2, 4
  [2, 4, 5, 1, 3],
  [2, 4, 5, 3, 1],
  [2, 5, 1, 3, 4], // 2, 5
  [2, 5, 4, 1, 3],
  [2, 5, 4, 3, 1], // ----11 in total----

  [3, 1, 2, 5, 4], // 3, 1
  [3, 1, 4, 5, 2],
  [3, 1, 5, 2, 4],
  [3, 4, 1, 5, 2], // 3, 4
  [3, 4, 2, 5, 1],
  [3, 4, 5, 2, 1],
  [3, 4, 5, 1, 2],
  [3, 5, 1, 2, 4], // 3, 5
  [3, 5, 2, 1, 4],
  [3, 5, 4, 1, 2],
  [3, 5, 4, 2, 1], // ----11 in total----

  [4, 1, 2, 5, 3], // 4, 1
  [4, 1, 5, 2, 3],
  [4, 1, 5, 3, 2],
  [4, 3, 1, 5, 2], // 4, 3
  [4, 3, 2, 5, 1],
  [4, 3, 5, 1, 2],
  [4, 3, 5, 2, 1],
  [4, 5, 1, 2, 3], // 4, 5
  [4, 5, 1, 3, 2],
  [4, 5, 2, 1, 3],
  [4, 5, 2, 3, 1], // ----11 in total----

  [5, 1, 2, 3, 4], // 5, 1
  [5, 1, 4, 2, 3],
  [5, 1, 4, 3, 2],
  [5, 3, 1, 2, 4], // 5, 3
  [5, 3, 2, 1, 4],
  [5, 3, 4, 1, 2],
  [5, 3, 4, 2, 1],
  [5, 4, 1, 2, 3], // 5, 4
  [5, 4, 1, 3, 2],
  [5, 4, 2, 1, 3],
  [5, 4, 2, 3, 1], // 11 in total
]

const allPermuted = (l) => {
  const n = Number(l)
  const sum = l

  if (l === 1n) return 0n

  const DIGITS = Array.from({ length: n }, (_, i) => i + 1)

  const combitations = []

  const replaceDigits = (digitsStart, digitsLeft) => {
    for (let i = 0; i < digitsLeft.length; i++) {
      const currentDigit = digitsLeft[i]
      const combination = [...digitsStart, currentDigit]

      replaceDigits(combination, removeDigitFromArray(currentDigit, digitsLeft))
      if (combination.length === DIGITS.length) {
        combitations.push(combination)
      }
    }
  }

  for (let i = 2; i <= DIGITS.length; i++) {
    replaceDigits([i], removeDigitFromArray(i, DIGITS))
  }
  // for (let i = 2; i <= DIGITS.length; i++) {
  //   replaceDigits([i], removeDigitFromArray(i, DIGITS))
  // }

  const validated = combitations.filter((c) => validator([DIGITS], [c]))

  return BigInt(validated.length)
}

// eslint-disable-next-line no-use-before-define
// console.log(validator(digits, schema))

console.log(allPermuted(1n) === 0n)
console.log(allPermuted(4n) === 9n)
console.log(allPermuted(5n) === 44n)
console.log(allPermuted(10n) === 1334961n)
// console.log(allPermuted(11n) === 14684570n)
// console.log(allPermuted(12n) === 176214841n)
// console.log(allPermuted(16n), 7697064251745n)
// console.log(allPermuted(30n), 97581073836835777732377428235481n)

function removeDigitFromArray(digit, array) {
  return array.filter((d) => d !== digit)
}

function validator(_digits, _schema, log = false) {
  const messages = []

  const isSame = _digits.toString('') === _schema[0].toString()

  if (isSame) {
    messages.push('Digits are same with schema')
  }

  const allColumnsIsSameLength = _schema.every((column) => column.length === _digits[0].length)

  if (!allColumnsIsSameLength) {
    messages.push('Some columns in schema is not same length as digits length')
  }

  const isDifferenPosition = _schema
    .every((column) => column
      .every((digit, index) => digit !== _digits[0][index]))

  if (!isDifferenPosition) {
    messages.push('Some digits on it\'s own position')
  }

  const isOnlyUniqeValues = new Set(_schema.map((c) => c.join(''))).size === _schema.length

  if (!isOnlyUniqeValues) {
    messages.push('Some values are repeated in schema')
  }

  const isDigitsNotRepeated = _schema.every((column) => new Set(column).size === _digits[0].length)

  if (!isDigitsNotRepeated) {
    messages.push('Some digits are repeated in schema columns')
  }

  if (log) {
    messages.forEach((m) => console.log(m))
  }

  return allColumnsIsSameLength && isDifferenPosition && isOnlyUniqeValues && isDigitsNotRepeated
}

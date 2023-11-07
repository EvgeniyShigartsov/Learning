/* eslint-disable no-continue */
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
  [2, 1, 4, 5, 3],
  [2, 1, 5, 3, 4],
  [2, 3, 1, 5, 4],
  [2, 3, 4, 5, 1],
  [2, 3, 5, 1, 4],
  [2, 4, 1, 5, 3],
  [2, 4, 5, 1, 3],
  [2, 4, 5, 3, 1],
  [2, 5, 1, 3, 4],
  [2, 5, 4, 1, 3],
  [2, 5, 4, 3, 1], // ----11 in total----

  [3, 1, 2, 5, 4],
  [3, 1, 4, 5, 2],
  [3, 1, 5, 2, 4],
  [3, 4, 1, 5, 2],
  [3, 4, 2, 5, 1],
  [3, 4, 5, 2, 1],
  [3, 4, 5, 1, 2],
  [3, 5, 1, 2, 4],
  [3, 5, 2, 1, 4],
  [3, 5, 4, 1, 2],
  [3, 5, 4, 2, 1], // ----11 in total----

  [4, 1, 2, 5, 3],
  [4, 1, 5, 2, 3],
  [4, 1, 5, 3, 2],
  [4, 3, 1, 5, 2],
  [4, 3, 2, 5, 1],
  [4, 3, 5, 1, 2],
  [4, 3, 5, 2, 1],
  [4, 5, 1, 2, 3],
  [4, 5, 1, 3, 2],
  [4, 5, 2, 1, 3],
  [4, 5, 2, 3, 1], // ----11 in total----

  [5, 1, 2, 3, 4],
  [5, 1, 4, 2, 3],
  [5, 1, 4, 3, 2],
  [5, 3, 1, 2, 4],
  [5, 3, 2, 1, 4],
  [5, 3, 4, 1, 2],
  [5, 3, 4, 2, 1],
  [5, 4, 1, 2, 3],
  [5, 4, 1, 3, 2],
  [5, 4, 2, 1, 3],
  [5, 4, 2, 3, 1], // 11 in total
]

const allPermuted = (l) => {
  if (l === 1n) return 0n

  const DIGITS = Array.from({ length: Number(l) }, (_, i) => i + 1)
  const combinations = []

  const replaceDigits = (digitsStart, digitsLeft) => {
    // console.log(digitsStart)
    // console.log(digitsLeft)
    // if (1) return

    for (let i = 0; i < digitsLeft.length; i++) {
      const currentDigit = digitsLeft[i]
      const combination = [...digitsStart, currentDigit]

      if (currentDigit === DIGITS[combination.length - 1]) { continue }
      // console.log(combination)

      if (combination.length === DIGITS.length) {
        combinations.push(combination)

        continue
      }
      const nextDigits = removeDigitFromArray(currentDigit, digitsLeft)
      replaceDigits(combination, nextDigits)
    }
  }

  replaceDigits([2], removeDigitFromArray(2, DIGITS))

  const sequences = combinations.reduce((acc, arr) => {
    const key = arr[1]

    if (!acc[key]) acc[key] = 0

    acc[key] += 1

    return acc
  }, {})

  console.log(sequences)

  return BigInt(combinations.length) * BigInt(DIGITS.length - 1)
}

// const start = Date.now()
// // console.log(allPermuted(10n) === 1334961n)
// console.log(allPermuted(11n) === 14684570n)
// // console.log(allPermuted(12n) === 176214841n)
// console.log('End in: ', (Date.now() - start) / 1000)

// console.log(allPermuted(1n) === 0n)
console.log(allPermuted(3n), 2n)
// console.log(allPermuted(4n), 9n)
// console.log(allPermuted(5n), 44n)
// console.log(allPermuted(6n), 265n)
// console.log(allPermuted(8n))
// console.log(allPermuted(10n), 1334961n)
// console.log(allPermuted(11n) === 14684570n)
// console.log(allPermuted(12n) === 176214841n)
// console.log(allPermuted(16n), 7697064251745n)
// console.log(allPermuted(30n), 97581073836835777732377428235481n)

function removeDigitFromArray(digit, array) {
  return array.filter((d) => d !== digit)
}

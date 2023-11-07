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

// This solution took me hours of thinking & debug, below you can see description of solution if you are interesting.
const allPermuted = (l) => {
  if (l === 1n) return 0n
  if (l === 2n) return 1n
  if (l === 3n) return 2n

  let prevSum = 2n
  let prevPrevSum = 1n

  for (let i = 4; i <= Number(l); i++) {
    const newSum = (prevSum + prevPrevSum) * BigInt((i - 1))
    prevPrevSum = prevSum
    prevSum = newSum
  }

  return prevSum
}

// console.log(allPermuted(1n) === 0n)
// console.log(allPermuted(3n), 2n)
// console.log(allPermuted(4n), 9n)
console.log(allPermuted(5n), 44n)
console.log(allPermuted(6n), 265n)
console.log(allPermuted(10n), 1334961n)
console.log(allPermuted(11n) === 14684570n)
console.log(allPermuted(12n) === 176214841n)
console.log(allPermuted(16n) === 7697064251745n)
console.log(allPermuted(30n) === 97581073836835777732377428235481n)

// ----------- SOLUTION DESCRIPTION -----------

// ------ PART ONE ------

// ! check combinationsFor4 & combinationsFor5 firstly

// L - is a length of the array, [1, 2, 3, 4] - length is 4.
// As you can see, we don't need to continue count all possible combinations for numbers 3, 4, ...nextN
// because it always same with number 2. Keep it in mind when go to part two of the solution description (!).
// In example [combinationsFor4] there is 3 combinations with number 2 at the begining.
// So, we can just multipy 3 by (L - 1) --> 3 * (4 - 1) and get N of all possible combinations.
// BUT it's still a BRUTE FORCE way to count.
// When part one is clear, you can go further down to part two of the description.

const combinationsFor4 = [
// 1, 2, 3, 4  --- digits

  [2, 1, 4, 3],
  [2, 3, 4, 1],
  [2, 4, 1, 3], // ---------- 3 combinations in total with number 2 at begining ----------

  [3, 1, 4, 2],
  [3, 4, 1, 2],
  [3, 4, 2, 1], // ---------- 3 combinations in total with number 3 at begining ----------

  [4, 1, 2, 3],
  [4, 3, 1, 2],
  [4, 3, 2, 1], // ---------- 3 combinations in total with number 4 at begining ----------
]

const combinationsFor5 = [
// 1, 2, 3, 4, 5  --- digits

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
  [2, 5, 4, 3, 1], // ---------- 11 combinations in total with number 2 at begining ----------

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
  [3, 5, 4, 2, 1], // ---------- 11 combinations in total with number 3 at begining ----------

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
  [4, 5, 2, 3, 1], // ---------- 11 combinations in total with number 4 at begining ----------

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
  [5, 4, 2, 3, 1], // ---------- 11 combinations in total with number 5 at begining ----------
]

// ------ PART TWO ------

// Here is a few example objects, where:

// KEY is a SECOND number in combination row, like:
// [2, 1, ...N] - key is 1
// [2, 3, ...N] - key is 3
// [5, 4, ...N] - key is 4

// VALUE is a count how many times this number (KEY) repeats in combinations list with number 2 at the begining
// ^^^ Do you remember, there always same count of combinations with number 2 at the begining
// as for next numbers at begining in combinations list? Cool.

// If you pay attention to examples below, you will see:

// All keys (numbers at the begining) have same count as other ones, expect key 1.
// If you sum all key count expect 1, you will get N of possible combinations for L - 1
// At the same time, key 1 have N of possible combinations for L - 2

// So this brings me to next formula:

// (combinations for L - 1 + combinations for L - 2) * (L - 1)
// Thats all :)

// For small values (1n, 2n ,3n) we just need to know how many combinations is possible for that value
// and use it as constant to next operations.

const solution1n = {} // combinations = 0
const solution2n = {} // combinations = 1
const solution3n = {} // combinations = 2

const solution4n = {
  1: 1,
  3: 1,
  4: 1,
} // 2 + 1 = 3; 3 * 3 = 9. Combinations = 9

const solution5n = {
  1: 2,
  3: 3,
  4: 3,
  5: 3,
} // 9 + 2 = 11; 11 * 4 = 44. Combinations = 44

const solution6n = {
  1: 9,
  3: 11,
  4: 11,
  5: 11,
  6: 11,
} // 44 + 9 = 53; 53 * 5 = 265. Combinations = 265

const solution7n = {
  1: 44,
  3: 53,
  4: 53,
  5: 53,
  6: 53,
  7: 53,
} // 265 + 44 = 309; 309 * 6 = 1854. Combinations = 1854

const solution8n = {
  1: 265,
  3: 309,
  4: 309,
  5: 309,
  6: 309,
  7: 309,
  8: 309,
} // 1854 + 265 = 2119; 2119 * 7 = 14833. Combinations = 14833

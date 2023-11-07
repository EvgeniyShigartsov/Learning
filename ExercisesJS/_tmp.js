const s1 = {} // combinations = 0

const s2 = {} // combinations = 1

// 1 + 1 = 2; 2 * 1 = 2
const s3 = {
  3: 1,
} // combinations = 2

// 2 + 1 = 3; 3 * 3 = 9
const s4 = {
  // 1: 1,
  3: 1,
  4: 1,
} // combinations = 9

// 9 + 2 = 11; 11 * 4 = 44
const s5 = {
  // 1: 2,
  3: 3,
  4: 3,
  5: 3,
} // combinations = 44

// 44 + 9 = 53; 53 * 5 = 265
const s6 = {
  // 1: 9,
  3: 11,
  4: 11,
  5: 11,
  6: 11,
} // combinations = 265

// 265 + 44 = 309; 309 * 6 = 1854
const s7 = {
  // 1: 44,
  3: 53,
  4: 53,
  5: 53,
  6: 53,
  7: 53,
} // combinations = 1854

// 1854 + 265 = 2119; 2119 * 7 = 14833
const s8 = {
  // 1: 265,
  3: 309,
  4: 309,
  5: 309,
  6: 309,
  7: 309,
  8: 309,
} // combinations = 14833

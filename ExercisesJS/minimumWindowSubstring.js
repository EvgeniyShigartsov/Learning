// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".

// Example 1

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

import { string, searchString, result } from './_tmp_hugeString.js'

const case1 = {
  str: 'ADOBECODEBANC',
  search: 'ABC',
  res: 'BANC'
}

const case2 = {
  str: 'aaaaaaaaaaaabbbbbcdd',
  search: 'abcdd',
  res: 'abbbbbcdd'
}

const case3 = {
  str: 'bdab',
  search: 'ab',
  res: 'ab'
}

const case4 = {
  str: string,
  search: searchString,
  res: result,
}

const start = Date.now()

const entries = getEntries(searchString)

const repeats = 1
for (let i = 0; i < repeats; i++) {
  console.log(minWindowS3(case1.str, case1.search), case1.res)

  // const r1 = minWindowS1(case4.str, case4.search)
  // const r2 = minWindowS2(case4.str, case4.search)

  // console.log(validator(entries, getEntries(r1)))
  // console.log(validator(entries, getEntries(r2)))

  
  // console.log(minWindowS1(case4.str, case4.search).length)
  // console.log(minWindowS2(case4.str, case4.search).length)

  // console.log(minWindowS1(case3.str, case3.search).length)
  // console.log(minWindowS2(case3.str, case3.search).length)
  
  // console.log(minWindowS1(case2.str, case2.search).length)
  // console.log(minWindowS2(case2.str, case2.search).length)
  
  // console.log(minWindowS1(case1.str, case1.search).length)
  // console.log(minWindowS2(case1.str, case1.search).length)
}

// console.log('Average: ', (Date.now() - start) / repeats)

// console.log(minWindow('ADOBECODEBANC', 'ABC'), 'BANC')
// console.log(minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd'), 'abbbbbcdd')
// console.log(minWindow('bdab', 'ab'), 'ab')

function minWindowS3(string, searchLetters) {
  // Iterations = ?
  // Average time = ? ms

  let ITERATOR = 0
  if (searchLetters.length > string.length) return ''
  if (searchLetters === string) return searchLetters

  const searchEntries = searchLetters.split('').reduce((acc, letter) => {
    ITERATOR++
    acc[letter] ? (acc[letter] += 1) : (acc[letter] = 1)

    return acc
  }, {})

  let substring = ''

  for (let i = 0; i < string.length; i++) {
    ITERATOR++
    
    const currentLetter = string[i]

    if(i + 1 < searchLetters.length) continue
    if(!searchEntries[currentLetter]) continue
    
    console.log(currentLetter)
  }

  return substring
}

function minWindowS1(string, searchLetters) {
  // Iterations = 3399359
  // Average time = 647 ms

  let ITERATOR = 0
  if (searchLetters.length > string.length) return ''
  if (searchLetters === string) return searchLetters

  const searchEntries = searchLetters.split('').reduce((acc, letter) => {
    ITERATOR++
    acc[letter] ? (acc[letter] += 1) : (acc[letter] = 1)

    return acc
  }, {})

  let entries = []
  let substring = ''

  for (let i = 0; i < string.length; i++) {
    ITERATOR++

    const letter = string[i]
    if (!searchEntries[letter]) continue

    if (searchLetters.length + i - 1 < string.length) {
      entries.push({ startIndex: i, lettersLeft: searchLetters })
    }

    entries = entries.reduce((acc, entry) => {
      ITERATOR++
      const { startIndex, lettersLeft } = entry

      entry.lettersLeft = lettersLeft.replace(letter, '')

      if (entry.lettersLeft === '') {
        const currentSubstring = string.slice(startIndex, i + 1)

        if (!substring) {
          substring = currentSubstring
        } else {
          substring = currentSubstring.length < substring.length ? currentSubstring : substring
        }
      } else {
        acc.push(entry)
      }

      return acc
    }, [])
  }

  return substring
}

function minWindowS2(string, searchLetters) {
  // Iterations = 3398668
  // Average time = 601 ms

  let ITERATOR = 0
  if (searchLetters.length > string.length) return ''
  if (searchLetters === string) return searchLetters

  const searchEntries = searchLetters.split('').reduce((acc, letter) => {
    ITERATOR++

    if (!acc[letter]) acc[letter] = true
    return acc
  }, {})

  let substring = ''

  for (let i = 0; i < string.length; i++) {
    ITERATOR++

    const letter = string[i]
    if (!searchEntries[letter]) continue
    if (string.length - i < searchLetters.length) break

    const currentSubstring = string.slice(i)
    let tmpStr = searchLetters

    for (let j = 0; j < currentSubstring.length; j++) {
      ITERATOR++

      tmpStr = tmpStr.replace(currentSubstring[j], '')

      if (!tmpStr) break
    }

    if (!tmpStr) {
      if (!substring) {
        substring = currentSubstring
      } else {
        substring = currentSubstring.length < substring.length ? currentSubstring : substring
      }
    }
  }

  return substring
}

function getEntries(str) {
  return str.split('').reduce((acc, letter) => {
    acc[letter] ? (acc[letter] += 1) : (acc[letter] = 1)

    return acc
  }, {})
}

function validator(req, given) {
  let result = true

  for (const key in req) {
    const expected = req[key]

    const value = given[key]

    if (!value) return false

    if (value < expected) return false
  }

  return result
}

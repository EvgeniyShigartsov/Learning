// Similarly to the previous kata, you will need to return a boolean value if the base string can be expressed as the repetition of one subpattern.

// This time there are two small changes:

// if a subpattern has been used, it will be present at least twice, meaning the subpattern has to be shorter than the original string;
// the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.
// For example:

// "a"    --> false //no repeated shorter sub-pattern, just one character
// "aaaa" --> true  //just one character repeated
// "abcd" --> false //no repetitions
// "babababababababa" --> true //repeated "ba"
// "bbabbaaabbaaaabb" --> true //same as above, just shuffled

// Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).


function hasSubpattern(string) {
  if (string.length <= 1) return false

  const entities = {}

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (!entities[char]) {
      entities[char] = 0
    }

    entities[char]++
  }

  const entitiesCount = Object.values(entities)

  const gcd = entitiesCount.reduce(getGreatestCommonDivisor)

  if (gcd === 1) {
    return false
  }
  return entitiesCount.every((n) => n % gcd === 0)
}


function getGreatestCommonDivisor(a, b) {
  const min = Math.min(a, b)

  for (let i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) return i
  }

  return 1;
}

// function getGreatestCommonDivisor(a, b) {
//   while (b !== 0) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }

const testCases = [
  ["a", false],
  ["AA", true],
  ["444", true],
  ["aaaa", true],
  ["abcd", false],
  ["babababababababa", true],
  ["bbabbaaabbaaaabb", true],
  ["ababababa", false],
  ["aaaabb", true],
  ["abbb", false],
  ["123a123a123a", true],
  ["123A123a123a", false],
  ["12aa13a21233", true],
  ["12aa13a21233A", false],
  ["aabbbbbbaa", true],
  ["abcdabcaccd", false],
  ["aaabbbccccdddddddd", false],
  ["KiMpMWWpiCvWCivpvKWCWWMK", true],
  ["zngoxJnq8QRJzQLBR8ZJZqaQ3Qzg8BJ3QxxQg3xJRgngQnqgz3Q83gBkZoggaLL3nqQzakxggkLRZonZLLJLxkzQLzkkBaqxJRQBJqLLaZ3k3RRxQQzQqog88qRLaaRaggQZnoZ8ngBLx8oaLLogQLQL8okkBZqQ3gnoLzJBgBL", true],
  ["Jy0OaymyJdJJa0rGmWOWnGOdSlO90arLRgBdmdrddSxlU9RWRgXqXgmk0zWxddkbnWaUrnS2mGubmdBunn19kJSRSSyXVWXrOnWRkxkUrnzulXzbbLkxqJ1SPb1muJPOmRdUrUSyd1LbBPzmluJ2url1rxqU1muSJyUrWUyPdGa0BmJXdkbPJd1UGnWVmnJSJJSV1mSqmmV9WqrqJ2SbbSSP1BrrUOdldzdmSLJrPPLSJBa1d1UxWrG09Lr9PrPgSrgq2mxBRnn12rVmmVJ2bJngG2bb1dUVn9SbmUrgmXUlWWd0JJSPaWSnrzbPPLzd1P", true],
  ["x8xxo8xo8o888o8ox88o88oo888xx88x8x8o", true],
  ["Tl0Y3V8KHYDIi3Mol4HNlJ0rkI6KKlHxODXKYnOnMNjX7RMtn0jr8LIjnJKMNlKiVNoiOV7JrxkM0Y8ojTGQjjlNl3iqXGtOLCXXOp6OMpTVMRKqL76iNkVtkqnRVTR0JL0jKQ84xMKq3jKokYtiD4NXYjGHr3HNTMNC4XMGjDRRNLGir67Q4lMXV77rkHploRONtMjTRKq7INiplGjI", false],
  ["xtU5tnn55ttV5VxnxtUVVtn55nnxU5Ux5x", true],
  ["lllUlUlllUU", false],

]

testCases.forEach(([str, expected], i) => console.log(i + 1, hasSubpattern(str) === expected))
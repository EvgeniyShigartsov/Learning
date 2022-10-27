// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged
// to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

const toObj = (str) =>
  str.split('').reduce((acc, letter) => {
    acc[letter] ? (acc[letter] += 1) : (acc[letter] = 1)

    return acc
  }, {})

function scramble(str1, str2) {
  const avilableLetters = toObj(str1)
  const targetLetters = toObj(str2)

  for (let key in targetLetters) {
    if (!avilableLetters[key]) {
      return false
    }

    avilableLetters[key] -= targetLetters[key]

    if (avilableLetters[key] < 0) {
      return false
    }
  }

  return true
}

console.log(scramble('rkqodlw', 'world') === true)
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true)
console.log(scramble('katas', 'steak') === false)
console.log(scramble('scriptjavx', 'javascript') === false)
console.log(scramble('scriptingjava', 'javascript') === true)
console.log(scramble('scriptsjava', 'javascripts') === true)
console.log(scramble('javscripts', 'javascript') === false)
console.log(scramble('jscripts', 'javascript') === false)
console.log(scramble('aabbcamaomsccdd', 'commas') === true)
console.log(scramble('commas', 'commas') === true)
console.log(scramble('sammoc', 'commas') === true)

// function scramble(str1, str2) {
//   const availableWords = str1.split('').sort().join('')
//   const targetWord = str2.split('').sort().join('')

//   let result = ''
//   let targetWordIndex = 0

//   for (let i = 0; i < availableWords.length; i++) {
//     if (targetWord[targetWordIndex] === availableWords[i]) {
//       result += availableWords[i]
//       targetWordIndex += 1
//     }
//   }

//   return targetWord === result
// }

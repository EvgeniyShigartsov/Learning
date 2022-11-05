// Write a function that takes an array of values and moves all elements that are zero to the end
// of the array, otherwise preserving the order of the array.
// The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any
//  Array.prototype or Object.prototype methods.

function removeZeros(array) {
  let moveValueTo = 0

  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    if (value !== 0 && value !== '0') {
      for (let j = i; j > moveValueTo; j--) {
        array[j] = array[j - 1]
      }
      array[moveValueTo] = value
      moveValueTo++
    }
  }

  return array
}

const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
const solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

console.log(input)
console.log(removeZeros(input))
console.log(solution)

const input2 = [1, null, '5', '0', '2', 0, 8, 6, null, false]
const solution2 = [1, null, '5', '2', 8, 6, null, false, '0', 0]

// console.log(input2)
// console.log(removeZeros(input2))
// console.log(solution2)

const input3 = [1, '0', 2, 0, 52, '0', 7, 0, '3', 1]
const solution3 = [1, 2, 52, 7, '3', 1, '0', 0, '0', 0]

// console.log(input3)
// console.log('------')
// console.log(removeZeros(input3))
// console.log('------')
// console.log(solution3)

const input4 = ['0', '0', '0', 0, 1]
const solution4 = [1, '0', '0', '0', 0]

// console.log(input4)
// console.log('===')
// console.log(removeZeros(input4))
// console.log('===')
// console.log(solution4)

const input5 = ['0', 0, 1]
const solution5 = [1, '0', 0]

// console.log(input5)
// console.log('===')
// console.log(removeZeros(input5))
// console.log('===')
// console.log(solution5)

const input6 = [1, '0', 0, 1]
const solution6 = [1, 1, '0', 0]

// console.log(input6)
// console.log('===')
// console.log(removeZeros(input6))
// console.log('===')
// console.log(solution6)

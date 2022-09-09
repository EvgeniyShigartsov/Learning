// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
// We followed him to a secret warehouse, where we assume to find all the stolen stuff.
// The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure
// about the PIN he saw, when Robby entered it.

// The keypad has the following layout:
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length)
}

const cases = [
  '339',
  '366',
  '399',
  '658',
  '636',
  '258',
  '268',
  '669',
  '668',
  '266',
  '369',
  '398',
  '256',
  '296',
  '259',
  '368',
  '638',
  '396',
  '238',
  '356',
  '659',
  '639',
  '666',
  '359',
  '336',
  '299',
  '338',
  '696',
  '269',
  '358',
  '656',
  '698',
  '699',
  '298',
  '236',
  '239',
]

const expectations = {
  8: ['5', '7', '8', '9', '0'],
  11: ['11', '22', '44', '12', '21', '14', '41', '24', '42'],
  369: cases,
}

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

const matrix = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  [undefined, '0', undefined],
]

const shifts = [
  [0, -1],
  [-1, 0],
  [1, 0],
  [0, 1],
]

const getShiftedNumbersMatrix = (observed) => {
  const shiftedNumbers = []
  const shiftedNumbersMatrix = []

  for (let i = 0; i < observed.length; i++) {
    const currentNum = observed[i]
    shiftedNumbers.push(currentNum)

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        const isCurrentNum = matrix[y][x] === currentNum

        if (isCurrentNum) {
          shifts.forEach((shift) => {
            const shiftedY = matrix[y - shift[1]]

            if (shiftedY) {
              const shiftedNum = shiftedY[x - shift[0]]
              if (shiftedNum) {
                shiftedNumbers.push(shiftedNum)
              }
            }
          })
        }
      }
    }
    shiftedNumbersMatrix.push([...shiftedNumbers])
    shiftedNumbers.length = 0
  }
  return shiftedNumbersMatrix
}

const calculatePINsVariations = (shiftedMatrix, currentPin, currentIndex = 0) => {
  const results = []

  if (currentIndex === shiftedMatrix.length) {
    return results
  }

  for (let i = 0; i < shiftedMatrix.length; i++) {
    const currentNumbers = shiftedMatrix[i]
    currentNumbers.forEach((currentNumber) => {
      const pin = currentPin.replaceAt(i, currentNumber)
      results.push(pin)
      results.push(...calculatePINsVariations(shiftedMatrix, pin, currentIndex + 1))
    })
  }

  return results
}

const getPINs = (observed) => {
  const possiblePins = []
  const shiftedNumbersMatrix = getShiftedNumbersMatrix(observed)

  if (observed.length === 1) {
    possiblePins.push(...shiftedNumbersMatrix[0])
  } else {
    possiblePins.push(...calculatePINsVariations(shiftedNumbersMatrix, observed))
  }

  return [...new Set(possiblePins)].sort()
}

// console.log(getPINs('369'))
// console.log(expectations[369].sort())

// console.log(getPINs('11'))
// console.log(expectations[11].sort())

// console.log(getPINs('8').sort().toString() === expectations[8].sort().toString())
// console.log(getPINs('11').sort().toString() === expectations[11].sort().toString())
// console.log(getPINs('369').sort().toString() === expectations[369].sort().toString())

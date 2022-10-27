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

// Just helper to easier manage strings
String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length)
}

const expectations = {
  8: ['5', '7', '8', '9', '0'],
  11: ['11', '22', '44', '12', '21', '14', '41', '24', '42'],
  369: [
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
  ],
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

const keypadMatrix = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  [undefined, '0', undefined],
]

// Horizontal (x) & vertical (y) keypad shifts
const keypadShifts = [
  [0, -1],
  [-1, 0],
  [1, 0],
  [0, 1],
]

// Get matrix with all possible numbers for each observed character
const getShiftedNumbersMatrix = (observed) => {
  const shiftedNumbersMatrix = []

  for (let i = 0; i < observed.length; i++) {
    const currentNumber = observed[i]
    const currentNumberVariations = []

    currentNumberVariations.push(currentNumber)

    for (let y = 0; y < keypadMatrix.length; y++) {
      for (let x = 0; x < keypadMatrix[y].length; x++) {
        const isCurrentNum = keypadMatrix[y][x] === currentNumber

        if (isCurrentNum) {
          keypadShifts.forEach(([shiftX, shiftY]) => {
            if (keypadMatrix[y - shiftY] && keypadMatrix[y - shiftY][x - shiftX]) {
              currentNumberVariations.push(keypadMatrix[y - shiftY][x - shiftX])
            }
          })
        }
      }
    }
    shiftedNumbersMatrix.push(currentNumberVariations)
  }
  return shiftedNumbersMatrix
}

const calculatePINsVariations = (shiftedMatrix, currentPin, currentIndex = 0) => {
  const results = []

  // Recursion out condition
  // When it equals i.e. all possible pin variations were found, I can go out recursion.
  if (currentIndex === shiftedMatrix.length) {
    return results
  }

  for (let i = 0; i < shiftedMatrix.length; i++) {
    if (i < currentIndex) {
      // Skip unnecessary iterations & recursions, i.e. I'm inside recursion, and
      // handle previous variations in the previous recursion.
      continue
    }
    const currentNumbers = shiftedMatrix[i]

    currentNumbers.forEach((currentNumber) => {
      const pin = currentPin.replaceAt(i, currentNumber)

      // Go into recursion only if i don't have this pin variation before
      if (!results.includes(pin)) {
        // Increase currentIndex while currentIndex will not be equal to shiftedMatrix.length
        results.push(...calculatePINsVariations(shiftedMatrix, pin, currentIndex + 1))
      }
      results.push(pin)
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

  // Return only unique values. In some cases, like '11',
  // different recursions may return same value at the start and end of recursion, like 22 or 44.
  return [...new Set(possiblePins)].sort()
}

// console.log(getPINs('11'))
// console.log(getPINs('369'))
// console.log(getPINs('000000'))

console.log(getPINs('8').sort().toString() === expectations[8].sort().toString())
console.log(getPINs('11').sort().toString() === expectations[11].sort().toString())
console.log(getPINs('369').sort().toString() === expectations[369].sort().toString())

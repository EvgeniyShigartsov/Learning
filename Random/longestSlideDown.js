// Imagine that you have a pyramid built of numbers, like this one here:
//      /3/
//    \7\ 4
//    2 \4\ 6
//   8 5 \9\ 3

// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid.
//As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.

// Some tests include some extraordinarily high pyramids so as you can guess,
// brute-force method is a bad idea unless you have a few centuries to waste.
// You must come up with something more clever than that.

const longestSlideDown = (pyramid) => {
  let steps = [
    {
      index: 0,
      number: pyramid[0][0],
    },
  ]

  for (let i = 1; i < pyramid.length; i++) {
    const row = pyramid[i]
    const newSteps = []

    for (let j = 0; j < steps.length; j++) {
      const { index, number } = steps[j]

      const leftStep = {
        index: index,
        number: number + row[index],
      }
      const rightStep = {
        index: index + 1,
        number: number + row[index + 1],
      }

      newSteps.push(leftStep, rightStep)
    }
    steps = newSteps
  }

  console.log(steps)

  return Math.max(...steps.map(({ number }) => number))
}

const expected = 308
const mediumPyramid3 = [
  // []
  [75], // 75
  // 75
  [95, 64], // 170
  // 170 139
  [17, 47, 82], // 221
  //187, 217, 186, 221
  [18, 35, 87, 10], // 308
  // 205, 222, 252, 304, 273, 196, 231, 308
]

// 170 + 17 = 187, 170 + 47 = 217, 139 + 47 = 186, 139 + 82 = 221
// 187 + 18 = 205, 187 + 35 = 222, 217 + 35 = 252, 217 + 87 = 304, 186 + 87 = 273, 186 + 10 = 196, 221 + 10 = 231

const mediumPyramid = [
  [75], // 75
  [95, 64], // 170
  [17, 47, 82], // 221
  [18, 35, 87, 10], // 308
  [20, 4, 82, 47, 65], // 390
  [19, 1, 23, 75, 3, 34], // 465
  [88, 2, 77, 73, 7, 63, 67], // 538
  [99, 65, 4, 28, 6, 16, 70, 92], // 566
  [41, 41, 26, 56, 83, 40, 80, 70, 33], // 649
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29], // 696
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14], // 772
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57], // 850
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48], // 908
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31], // 981
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23], // 1074
]

const mediumPyramid2 = [
  // []
  [75],
  [95, 64],
  // 170 139
  [17, 47, 82],
  //187, 217, 186, 221
  [18, 35, 87, 10],
  // 205, 222, 252, 304, 273, 196, 231
]

const smallPyramid = [
  // []
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
]

const extraordinarilyPyramid = [
  //[]
  [5],
  [1, 70],
  [0, 50, 99],
  [8000, 5, 6, 100],
]

// console.log(longestSlideDown(smallPyramid), 23)
// console.log(longestSlideDown(extraordinarilyPyramid), 8006)
// console.log(longestSlideDown(mediumPyramid), 1074)
// console.log(longestSlideDown(mediumPyramid2), 308)
console.log(longestSlideDown(mediumPyramid3), expected)

// РАБОЧИЕ РЕШЕНИЯ

function longestSlideDown1(pyramid) {
  let steps = [
    {
      pairIndexes: [0, 1],
      number: pyramid[0][0],
    },
  ]

  for (let i = 1; i < pyramid.length; i++) {
    const row = pyramid[i]
    const nextSteps = []

    steps.forEach(({ pairIndexes, number }) => {
      row.forEach((incomingNum, incIndex) => {
        if (pairIndexes.includes(incIndex)) {
          nextSteps.push({
            pairIndexes: [incIndex, incIndex + 1],
            number: incomingNum + number,
          })
        }
      })
    })

    steps = nextSteps
  }

  console.log(JSON.stringify(steps).length)
  console.log(steps)

  return Math.max(...steps.map(({ number }) => number))
}

function longestSlideDown2(pyramid) {
  let steps = [
    {
      index: 0,
      number: pyramid[0][0],
    },
  ]

  for (let i = 1; i < pyramid.length; i++) {
    const row = pyramid[i]
    const newSteps = []

    for (let j = 0; j < steps.length; j++) {
      const { index, number } = steps[j]

      const leftStep = {
        index: index,
        number: number + row[index],
      }
      const rightStep = {
        index: index + 1,
        number: number + row[index + 1],
      }

      newSteps.push(leftStep, rightStep)

      // console.log(steps)
      // console.log(leftStep, rightStep)
      // console.log(newSteps)
    }
    steps = newSteps
  }

  console.log(JSON.stringify(steps).length)
  console.log(steps)

  return Math.max(...steps.map(({ number }) => number))
}

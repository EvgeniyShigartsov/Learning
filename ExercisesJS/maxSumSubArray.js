const getMaxSubSumFast = (arr) => {
  let maxSum = 0
  let partialSum = 0

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]

    partialSum += n

    console.log(n, partialSum - n, partialSum)

    maxSum = Math.max(maxSum, partialSum)

    if (partialSum < 0) partialSum = 0
  }

  console.log(arr)

  return maxSum
}

function getMaxSubSum(arr) {
  let maxSum = 0 // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j]
      maxSum = Math.max(maxSum, sumFixedStart)
    }
  }

  return maxSum
}

console.log(getMaxSubSumFast([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
// console.log(getMaxSubSumFast([-1, 2, 3, -9])) // 5
// console.log(getMaxSubSumFast([-1, 2, 3, -9, 11])) // 11
// console.log(getMaxSubSumFast([-2, -1, 1, 2])) // 3
// console.log(getMaxSubSumFast([1, 2, 3])) // 6
// console.log(getMaxSubSumFast([100, -9, 2, -3, 5])) // 100
// console.log(getMaxSubSumFast([]), 0)

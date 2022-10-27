const arr1 = [1, 2, 3, 4, 3, 2, 1]
const arr2 = [11, 13, 14, 15, 6, 4, 2]
const arr3 = [10, 9, 8, 7, 6]

const peakIndexMountainArray = (arr) => {
  const max = Math.max(...arr)
  return arr.indexOf(max)
}
console.log(peakIndexMountainArray(arr1))
console.log(peakIndexMountainArray(arr2))
console.log(peakIndexMountainArray(arr3))

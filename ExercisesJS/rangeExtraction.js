const solution = (list) => {
  let result = ''
  const range = []

  for (let i = 0; i < list.length; i++) {
    const current = list[i]
    const next = list[i + 1]
    range.push(list[i])

    if (current - next === 1 || next - current === 1) {
      continue
    }
    result += range.length > 2 ? `${range[0]}-${range[range.length - 1]},` : range.toString() + ','

    range.length = 0
  }

  return result.slice(0, result.length - 1)
}

const testArr = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
const result = '-6,-3-1,3-5,7-11,14,15,17-20'

console.log(solution(testArr) === result)

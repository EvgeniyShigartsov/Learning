// В функцию передается массив с числами. Необходимо из функции вернуть новый
// массив, в котором все числа что были переданы внутрь функции будут отсортированы
// в порядке уменьшения количества цифры и в порядке увеличения самого числа.

function solve(arr) {
  const numbers = [...arr]
    .sort((a, b) => a - b)
    .reduce((acc, num) => {
      acc[num] ? acc[num]++ : (acc[num] = 1)
      return acc
    }, {})

  const couples = Object.entries(numbers)
  const singles = []
  const multiples = []
  couples.forEach((couple) => {
    couple[1] === 1 ? singles.push(+couple[0]) : multiples.push(...new Array(couple[1]).fill(+couple[0]))
  })
  return [...multiples, ...singles]
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7])) // [3,3,3,5,5,7,7,2,9]
console.log(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0])) // [0,0,4,4,9,9,3,5,7,8]
console.log(solve([4, 9, 8, 5, 0, 7, 3, 8, 4, 9, 0]))

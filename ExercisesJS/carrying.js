const sum = (a, b) => a + b
const multiply = (a, b) => a * b

const calculate = (fn) => (a) => (b) => fn(a, b)

console.log(calculate(sum)(5)(2))
console.log(calculate(multiply)(5)(2))

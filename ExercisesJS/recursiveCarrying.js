function sum(n) {
  const stack = [n]
  return function fn(n) {
    if (n === undefined) {
      return stack.reduce((acc, n) => (acc += n), 0)
    }
    stack.push(n)
    return fn
  }
}
console.log(sum(1)(2)(3)())
console.log(sum(1)(2)(3)(5)())
console.log(sum(1)(2)(3)(5)(10)())
console.log(sum(3)())

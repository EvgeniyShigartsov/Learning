function fibonacci(n) {
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    let c = a + b // 1 + 1 = 2 // 1 + 2 = 3  // 2 + 3 = 5 // 3 + 5 = 8
    a = b // 1 // 2 // 3 // 5
    b = c // 2 // 3 // 5 // 8
  }
  return b
}

function fibonacci2(n) {
  let a = 1
  let b = 1

  for (let i = 3; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
console.log(fibonacci(1))
console.log(fibonacci2(1))

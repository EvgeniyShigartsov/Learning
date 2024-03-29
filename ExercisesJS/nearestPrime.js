function nearestPrimeNumber(num) {
  const primes = {
    min: 0,
    max: 0,
  }
  for (let i = num; i > 1; i--) {
    let isPrime = true
    for (let k = i - 1; k > 1; k--) {
      if (i % k === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      primes.min = i
      break
    }
  }
  for (let i = num; i <= num * 2; i++) {
    let isPrime = true
    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime && i > num) {
      primes.max = i
      break
    }
  }
  const pointsToMax = primes.max - num
  const pointsToMin = num - primes.min
  return pointsToMax < pointsToMin ? primes.max : primes.min
}
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }

// function nearestPrimeNumber(num) {
//     if (num < 2) return 2
//     if (isPrime(num)) return num
//     for (let i = 1; ; i++) {
//         if (isPrime(num - i)) return num - i
//         if (isPrime(num + i)) return num + i
//     }
// }

console.log(nearestPrimeNumber(4))
console.log(nearestPrimeNumber(3))
console.log(nearestPrimeNumber(11))
console.log(nearestPrimeNumber(125))
console.log(nearestPrimeNumber(110))
console.log(nearestPrimeNumber(1110))
console.log(nearestPrimeNumber(350000))

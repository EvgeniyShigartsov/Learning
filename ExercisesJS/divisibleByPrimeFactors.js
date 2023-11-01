// https://www.codewars.com/kata/562c04fc8546d8147b000039

// The numbers 12, 63 and 119 have something in common related with their divisors and their prime factors, let's see it.

// Numbers PrimeFactorsSum(pfs)        DivisorsSum(ds)              Is ds divisible by pfs
// 12         2 + 2 + 3 = 7         1 + 2 + 3 + 4 + 6 + 12 = 28            28 / 7 = 4,  Yes
// 63         3 + 3 + 7 = 13        1 + 3 + 7 + 9 + 21 + 63 = 104         104 / 13 = 8, Yes
// 119        7 + 17 = 24           1 + 7 + 17 + 119 = 144                144 / 24 = 6, Yes

// There is an obvius property you can see: the sum of the divisors of a number is divisible by the sum of its prime factors.

// We need the function ds_multof_pfs() that receives two arguments: nMin and nMax, as a lower and upper limit
// (inclusives), respectively, and outputs a sorted list with the numbers that fulfill the property described above.

// We represent the features of the described function:

// ds_multof_pfs(nMin, nMax) -----> [n1, n2, ....., nl] # nMin ≤ n1 < n2 < ..< nl ≤ nMax

const sumAllPrimeFactors = (n) => {
  let primeFactorsSum = 0
  let currentFactor = 2
  let divisible = n

  while (divisible > 1) {
    if (divisible % currentFactor === 0) {
      primeFactorsSum += currentFactor

      divisible /= currentFactor
    } else {
      currentFactor++
    }
  }

  return primeFactorsSum
}

const sumAllDivisors = (n) => {
  let sum = 0

  for (let i = 1, maxPossiblePairDivider = n; i < maxPossiblePairDivider; i++) {
    const divisiblePairResult = n / i

    if (Number.isInteger(divisiblePairResult)) {
      sum += divisiblePairResult === i ? i : i + divisiblePairResult

      maxPossiblePairDivider = divisiblePairResult
    }
  }

  return sum
}

const dsMultofPfs = (min, max) => {
  const results = []

  for (let n = min; n <= max; n++) {
    const primeFactorsSum = sumAllPrimeFactors(n)
    const divisorsSum = sumAllDivisors(n)

    if (Number.isInteger(divisorsSum / primeFactorsSum)) {
      results.push(n)
    }
  }

  return results
}

const start = Date.now()

for (let i = 0; i < 20; i++) {
  dsMultofPfs(10993, 15588)
}

console.log('End in', ((Date.now() - start) / 1000).toFixed(2), ' seconds')

const case1 = {
  min: 10,
  max: 100,
  output: [12, 15, 35, 42, 60, 63, 66, 68, 84, 90, 95],
}

const case2 = {
  min: 20,
  max: 120,
  output: [35, 42, 60, 63, 66, 68, 84, 90, 95, 110, 114, 119],
}

const case3 = {
  min: 50,
  max: 140,
  output: [60, 63, 66, 68, 84, 90, 95, 110, 114, 119, 140],
}

// eslint-disable-next-line no-array-constructor
new Array(case1, case2, case3).forEach(({ min, max, output }) => {
  const result = dsMultofPfs(min, max)
  console.log(result)
  console.log(result.toString() === output.toString())
  console.log('-------------')
})

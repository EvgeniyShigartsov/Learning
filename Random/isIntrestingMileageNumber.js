// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!"
// Every time there's an interesting number coming up, he notices and then promptly forgets.
// Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer,
// and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that
// lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together.
// Write the function that parses the mileage number input, and returns a 2 if the number is "interesting"
// (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// "Interesting" Numbers

// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array

// For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2

// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.

const isFollodewedByZeros = (n) => String(n).replace(new RegExp('0', 'g'), '').length === 1

const isSameDigits = (n) => {
  const str = String(n)
  return str.replace(new RegExp(str[0], 'g'), '').length === 0
}

const isSequential = (n) => {
  const numsArray = String(n).split('').map(Number)

  for (let i = 0; i < numsArray.length - 1; i++) {
    const current = numsArray[i]
    const prev = numsArray[i - 1]
    const next = numsArray[i + 1]

    if (current - next !== 1 && next - current !== 1) {
      if (current === 9 && next === 0) return true

      return false
    }
    if (prev === next) return false
  }
  return true
}

const isPalindorme = (n) => {
  const string = String(n)

  return string.split('').reverse('').join('') === string
}

const isInteresting = (n, awesomePhrases) => {
  if (n < 98) return 0

  const numbers = [n, n + 1, n + 2]
  const checkerFns = [isFollodewedByZeros, isSameDigits, isSequential, isPalindorme, (n) => awesomePhrases.includes(n)]

  for (let i = 0; i < numbers.length; i++) {
    const currentN = numbers[i]
    if (currentN < 100) continue

    const isInterestingNumber = checkerFns.some((fn) => fn(currentN) === true)

    if (isInterestingNumber) {
      return i === 0 ? 2 : 1
    }
  }

  return 0
}

console.log(isInteresting(123, []), 2)
console.log(isInteresting(122, []), 1)
console.log(isInteresting(654, []), 2)
console.log(isInteresting(3210, []), 2)
console.log(isInteresting(32101, []), 0)
console.log(isInteresting(7890, []), 2)
console.log(isInteresting(1234, []), 2)
console.log(isInteresting(1232, []), 1)
console.log(isInteresting(987654320, []), 1)
console.log(isInteresting(120, []), 1)
console.log(isInteresting(98, []), 1)
console.log(isInteresting(99, []), 1)

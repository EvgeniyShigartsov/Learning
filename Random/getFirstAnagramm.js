// Задача с реального собеса.

// Дан массив строк arr.
// Требуется написать функцию, которая принимает произвольную строку.
// Функция должна проверить, существует ли как минимум два значения в
// массиве, которые являются анаграммами к переданной в функцию строке,
// если такие строки существуют, тогда функция должна вернуть первую
// встретившуюся в массиве строку-анаграмму.
// В случае если анаграмм в массиве менее 2, необходимо вернуть null.

const arr = ['asfd', 'asd', 'dsa', '1nkil', 'asd', 'fhk', 'lfd', 'link', 'link1']
// const getFirstAnagram = (str, strings) => {
//     const targetLetters = str.split('')

//     const anagrams = strings.filter((currentStr) => {
//         let equalLetters = true
//         const letters = currentStr.split('')

//         for (let currentLetter of letters) {
//             const check = Boolean(targetLetters.find((targetLetter) => targetLetter === currentLetter))
//             if (!check) equalLetters = false
//         }

//         return str.length === currentStr.length && equalLetters
//     })
//     return anagrams.length >= 2 ? anagrams[0] : null
// }

const sortString = (string) => string.split('').sort().join('')

const getFirstAnagram = (str, strings) => {
  const anagrams = []
  const target = sortString(str)
  const cheked = strings.filter((currStr) => currStr.length === str.length).map((string) => sortString(string))

  for (const string of cheked) {
    if (string === target) {
      anagrams.push(strings.find((incomingStr) => sortString(incomingStr) === string))
    }
    if (anagrams.length === 2) break
  }
  return anagrams.length === 2 ? anagrams[0] : null
}
console.log(getFirstAnagram('asd', arr)) // "asd"
console.log(getFirstAnagram('link', arr)) // null
console.log(getFirstAnagram('link1', arr)) // "1nkil"

// В функцию longestCommonPrefix передается массив слов, необходимо реализовать
// функцию так, чтобы она возвращала самый длинных префикс (первые буквы), который
// содержится во всех словах.

function longestCommonPrefix(words) {
  let prefix = ''
  const minLength = Math.min(...words.map((el) => el.length))

  for (let i = 0; i <= minLength; i++) {
    const temp = new Set()
    for (let j = 0; j <= words.length - 1; j++) {
      temp.add(words[j][i])
    }
    if (temp.size === 1) {
      prefix += Array.from(temp).join('')
    }
  }
  return prefix
}
console.log(longestCommonPrefix(['привет', 'правила', 'проезд'])) // "пр"
console.log(longestCommonPrefix(['очень', 'плохая', 'музыка'])) // "
console.log(longestCommonPrefix(['очень', 'очередь', 'очерет'])) // оче

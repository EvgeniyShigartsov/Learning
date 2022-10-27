function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return ''

  let resultStr = ''

  for (let i = 0; i < strarr.length; i++) {
    let currentStr = ''
    for (let j = 0; j < k; j++) {
      currentStr += strarr[i + j] || ''
    }

    if (currentStr.length > resultStr.length) {
      resultStr = currentStr
    }
  }

  return resultStr
}

console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3))

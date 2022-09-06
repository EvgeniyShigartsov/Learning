const checkBrackets = (str) => {
  const stack = []
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i]

    if (bracket === '(' || bracket === '{' || bracket === '[') stack.push(bracket)
    else {
      const lastEl = stack.pop()
      if (bracket !== pairs[lastEl]) return false
    }
  }
  console.log(stack)
  return stack.length === 0
}
console.log(checkBrackets('(){}[]'))
console.log(checkBrackets('(({[()]})){}[]'))

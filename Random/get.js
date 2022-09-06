const get = (keySequence, nestedObject) => {
  const keys = keySequence.split('.')

  const currentKey = keys[0]
  const keyValue = nestedObject[currentKey]

  if (!currentKey || keyValue === undefined) return undefined

  if (keyValue instanceof Object) {
    keys.shift()

    return get(keys.join('.'), keyValue)
  }

  return keyValue
}

console.log(get('red.big.apple', { red: { big: { apple: 'Яблоко' } } }))
console.log(get('red.fast.fancy.car', { red: { slow: 'some propperty' } }))
console.log(get('length', []))
console.log(get('one.two', []))

const words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'orange', 'banana']

const mostPopular = (arr) => {
  const entries = arr.reduce((acc, word) => {
    acc[word] !== undefined ? (acc[word] += 1) : (acc[word] = 1)
    return acc
  }, {})

  const result = Object.entries(entries)
    .sort((a, b) => {
      const prev = a[1]
      const next = b[1]

      return a - b
    })
    .map(([value]) => value)

  console.log(result)
}
mostPopular(words)

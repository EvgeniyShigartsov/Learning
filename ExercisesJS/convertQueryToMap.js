const query = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
const out = {
  user: {
    name: {
      firstname: 'Bob',
      lastname: 'Smith',
    },
    favoritecolor: 'Light Blue',
  },
}

const uriQuery = 'a=a%26b%3Dc%3F'
const uriOut = { a: 'a&b=c?' }

const convertQueryToMap = (query) => {
  const out = {}
  if (!query) return out

  const statements = query.split('&')

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i]
    const [path, value] = statement.split('=')
    const keys = path.split('.')

    let parentObj = out
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j]
      const isLastKey = j === keys.length - 1

      if (!parentObj[key] && !isLastKey) {
        const nextObj = {}
        parentObj[key] = nextObj
        parentObj = nextObj
      } else if (!isLastKey) {
        parentObj = parentObj[key]
      }
      if (isLastKey) {
        parentObj[key] = decodeURIComponent(value)
      }
    }
  }

  return out
}

console.log(convertQueryToMap(query))
console.log(convertQueryToMap(''))

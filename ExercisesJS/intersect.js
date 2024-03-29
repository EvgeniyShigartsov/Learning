const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [1, 3, 5, 7]

const intersect = (a, b) => {
  let counter = 0
  const r = a.reduce((acc, n) => {
    const isIntersect = b.find((n2) => {
      ++counter

      return n2 === n
    })

    if (isIntersect) {
      acc.push(n)
    }
    ++counter
    return acc
  }, [])

  console.log('intersect1 counter', counter)
  console.log('intersect1 result', r)
}
const intersect2 = (a, b) => {
  const iterator1 = a.length < b.length ? a : b
  const iterator2 = iterator1 === a ? b : a

  // console.log('ONE', iterator1);
  // console.log('TWO', iterator2);

  let counter = 0
  const r = iterator1.reduce((acc, n) => {
    const isIntersect = iterator2.find((n2) => {
      ++counter

      return n2 === n
    })

    if (isIntersect) {
      acc.push(n)
    }
    ++counter
    return acc
  }, [])

  console.log('intersect2 counter', counter)
  console.log('intersect2 result', r)
}

intersect(arr2, arr1)
// intersect(arr1, arr2);
console.log('//////')
intersect2(arr2, arr1)
// intersect2(arr1, arr2);

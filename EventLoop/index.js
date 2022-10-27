const btn = document.querySelector('.btn')

// Handler are TASK
btn.addEventListener('click', () => {
  setTimeout(() => console.log('Timeout 1')) // TASK
  Promise.resolve().then(() => console.log('Promise 1')) // MICRO TASK
  console.log('Console.log 1')
})

// Handler are TASK
btn.addEventListener('click', () => {
  setTimeout(() => console.log('Timeout 2')) // TASK
  Promise.resolve().then(() => console.log('Promise 2')) // MICRO TASK
  console.log('Console.log 2')
})

btn.click() // In this case callback over this line runs like ONE task.

const example1 = () => {
  setTimeout(() => console.log('first'), 1000)
  setTimeout(() => console.log('second'), 0)
  setTimeout(() => console.log('third'), 0)
}

// example1();

const example2 = () => {
  setTimeout(console.log, 0, 'first timeout')

  const intervalID = setInterval(() => {
    console.log('first interval')
    clearInterval(intervalID)
  }, 100)

  setTimeout(console.log, 1000, 'third timeout')
  setTimeout(console.log, 100, 'second timeout')
  setTimeout(console.log, 50, 'fourth timeout')

  console.log('dick')
}

// example2()

const example3 = async () => {
  const number = await new Promise((resolve, reject) => {
    resolve(1)
    console.log(2)
    return 3
  })
    .then((number) => {
      console.log('Then first:', number)
      return number
    })
    .then((number) => {
      console.log('Then second:', number * 2)
      return number * 2
    })
  console.log('number: ', number)
}

// example3();

const example4 = () => {
  console.log('one')
  const promise = new Promise((resolve, reject) => {
    resolve(42)
    console.log('two')

    setTimeout(() => console.log('three'), 0)
  })

  promise.then((result) => {
    console.log('four', result)
  })
}

// example4();

const example5 = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => console.log('timeout one'), 0)

    setTimeout(() => {
      console.log('first console')
      setTimeout(() => console.log('second console'), 0)
      resolve('first promise')
    }, 0)
  })

  const promise2 = new Promise((resolve, reject) => {
    resolve('second promise')
    setTimeout(() => console.log('timeout two'), 0)
  })

  promise1.then((result) => console.log(result))
  promise2.then((result) => console.log(result))
}

// second promise,  timeout one, first console, first promise
// timeout two, second console
// example5()

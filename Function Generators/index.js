// function* idMaker() {
//   let index = 0
//   while(index < 3) {
//     yield index++
//   }
// }
// const gen = idMaker()
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next().value)
// console.log(gen)

// function* anothergenerator(i){
//     yield i + 100
//     yield i + 200
//     yield i + 300
// }

// function* genetator(i) {
//   yield i
//   console.log('run ' + i)
//   yield* anothergenerator(i)
//   console.log('run2 ' + i)
//   yield i + 100500
//   console.log('run3 ' + i)
// }
// const a = genetator(10)
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())

// function* logGenerator() {
//   console.log('first call')
//   console.log(yield);
//   console.log(yield);
//   console.log(yield);
// }
// const a = logGenerator()
// a.next()
// a.next('one')
// a.next('two')
// a.next('three')
// console.log('...................');
// const b = logGenerator()
// b.next()
// b.next("b1")
// b.next("b2")
// b.next("b3")

const a = function* unreachable() {
  yield 'Y'
  return 'R'
  yield 'after'
}
const gen = a()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

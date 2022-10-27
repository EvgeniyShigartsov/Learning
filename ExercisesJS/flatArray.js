const arr = [1, 2, [3, 4, [5]], 6, 7, [[8], [9, [10, [11, [12]]], [13]]]]
// function flatArr(arr) {
//     const res = []
//     arr.forEach((el) => {
//         Array.isArray(el) ? deep(el) : res.push(el)
//     })
//     function deep(deppEl) {
//         deppEl.forEach((el) => {
//             Array.isArray(el) ? deep(el) : res.push(el)
//         })
//     }

//     return res
// }
// function flatArr(arr) {
//     const res = []
//     arr.forEach((el) => {
//         Array.isArray(el) ? res.push(...flatArr(el)) : res.push(el)
//     })
//     return res
// }

function flatArr(arr) {
  return arr
    .toString()
    .split(',')
    .map((x) => +x)
}
console.log(flatArr(arr))

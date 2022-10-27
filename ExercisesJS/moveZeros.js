// Создать функцию moveZeroes()
// Функция принимает аргументом массив чисел и сортирует следующим образом:
// Позитивные значение должны идти в начале массива, а нули сдвинуть в конец
// Функция должна изменять исходный массив.
// Оптимальное решение использует константную память.

// Пример:
// const arr = [1,0,2,0,3];
// moveZeroes(arr);
// console.log(arr) // [1,2,3,0,0] (Порядок значений слева не имеет значения)

const arr = [0, 3, 0, 10, 40, 0, 2]

// function moveZeroes(arr) {
//     arr.sort((a, b) => {
//         if (a === 0) return 1;
//         if (b === 0) return -1;
//         return a - b;
//     });
// }

// function moveZeroes(arr) {
//     const temp = [];
//     const zeroes = [];

//     for (let num of arr) {
//         if (num === 0) {
//             // zeroes.push(num)
//             temp.push(num)
//         } else {
//             // temp.push(num)
//             temp.unshift(num)
//         }
//     }

//     arr.length = 0;
//     arr.push(...temp, ...zeroes);
// }

function moveZeroes(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left] === 0) {
      while (arr[right] === 0) right--
      arr[right] = arr[left] + arr[right]
      arr[left] = arr[right] - arr[left]
      arr[right] = arr[right] - arr[left]
      right--
    }
    left++
  }
}

moveZeroes(arr)
console.log(arr)

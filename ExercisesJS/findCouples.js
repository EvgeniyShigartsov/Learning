const matrix = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [1, 1, 0, 1],
]

// Создать функцию findCouples();
// Функция принимает в себя матрицу и должна вернуть кол-во пар;
// Пара - значение двух ячеек равное 1, по-вертикали или горизонтали
// Условие гарантирует что максимальная комбинация пары равна 2

// Пример
// [    ________
//     [|1 ,  1|,  0 ,  1 ],
//      --------
//     [ 0 ,  0 ,  1 ,  0 ],
//      ________       ___
//     [|1 ,  1|,  0 , |1|],
//      --------       | |
//     [ 0 ,  0 ,  0 , |1|]
// ];                  ---
// findCouples(matrix) // 3

function findCouples(mtx) {
  const size = mtx.length
  let couples = 0
  const shifts = [
    [0, 1],
    [1, 0],
    [-1, 1],
    [1, 1],
  ]

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const current = mtx[y][x]
      if (current === 1) {
        // shifts.forEach((shift) => {
        //     const yShift = y + shift[0];
        //     const xShift = x + shift[1];
        //     console.log(y, x)
        //     if (yShift < size && yShift > -1 && mtx[yShift][xShift] === 1) couples++
        // })

        if (mtx[y][x + 1] === 1) couples++
        if (y + 1 < size && mtx[y + 1][x] === 1) couples++
      }
    }
  }

  return couples
}

console.log(findCouples(matrix))

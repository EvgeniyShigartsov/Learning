// Функия принимает массив элементов.
// Элемента представляют собой строки, состоящие из "Х"(земля) и "О"(вода)
// Отдельно стоящий остров(т.е. 4 его стороны окружены водой) имеет перимет равный 4-м.
// Необходимо найти периметр всех островов.

// Пример:

const t = ['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']

//  Ответ - 24

// ["X", "O", "O", "X", "O"]
// ["X", "O", "O", "X", "O"]
// ["O", "O", "O", "X", "O"]
// ["X", "X", "O", "X", "O"]
// ["O", "X", "O", "O", "O"]
function landPerimeter(arr) {
  const islands = []
  const mtx = arr.map((item) => item.split(''))

  for (let x = 0; x < mtx.length; x++) {
    const island = {}
    for (let y = 0; y < mtx[x].length; y++) {
      let temp = mtx[x][y]
      if (temp === 'X') {
        console.log(x + ' ' + y)
      }
    }
  }
  return islands
}

console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'])) // Total land perimeter: 24

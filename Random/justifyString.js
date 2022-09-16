// Your task in this Kata is to emulate text justification in monospace font.
//  You will be given a single-lined text and the expected justification width.
// The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Gap between words can't differ by more than one space.
// Lines should end with a word not a space.
// '\n' is not included in the length of a line.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Last line should not contain '\n'
// Strings with one word do not need gaps ('somelongword\n').

const LIPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.'

const expected = `Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.`

const justifyOneRow = (words, width) => {
  let result = ''
  let avilableSpaces = width - words.join('').length

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    result += word

    if (i !== words.length - 1) {
      const wordsLeft = words.length - i - 1
      const spacing = Math.ceil(avilableSpaces / wordsLeft)

      result += ' '.repeat(spacing)
      avilableSpaces -= spacing
    }
  }
  return result + '\n'
}

const justify = (text, width) => {
  const words = text.split(' ')
  const wordsRow = []

  let result = ''

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const rowLength = wordsRow.join(' ').length + word.length + 1

    if (rowLength <= width) {
      wordsRow.push(words[i])
    } else {
      result += justifyOneRow(wordsRow, width)
      wordsRow.length = 0
      wordsRow.push(word)
    }
  }

  result += wordsRow.join(' ')

  return result
}

console.log(justify(LIPSUM, 30) === expected)
console.log(justify('123 45 6', 7) === '123  45\n6')
console.log(justify('123', 7) === '123')
console.log(justify('', 10) === '')

class Point {
  constructor(y, x) {
    this.symbol = '.'

    return { y, x, symbol: this.symbol }
  }
}

class Renderer {

  constructor() {
    this.points = []

    this._fieldSize = 10
    this._field = this._createField()

    const overboardIndex = this._fieldSize // Indexes starts from 0, so here is 10 instead 11
    this._borders = {
      ['x-1']: '│',
      [`x${overboardIndex}`]: '│',
      ['y-1']: '─',
      [`y${overboardIndex}`]: '-',
      ['x-1y-1']: '┌',
      [`x-1y${overboardIndex}`]: '└',
      [`x${overboardIndex}y-1`]: '┐',
      [`x${overboardIndex}y${overboardIndex}`]: '┘',
    }
  }

  _createField() {
    const field = new Array(this._fieldSize).fill(null).map(() => new Array(this._fieldSize).fill(null))

    return field
  }

  addPoint(point) {
    for (let y = 0; y < this._field.length; y++) {
      for (let x = 0; x < this._field[y].length; x++) {
        if (point.x === x && point.y === y) {
          this._field[y][x] = point.symbol
        }
      }
    }
    this.points.push(point)

    return this
  }

  render() {
    let filed = ''
    
    for (let y = -1; y < this._fieldSize + 1; y++) {
      for (let x = -1; x < this._fieldSize + 1; x++) {
        const adressX = String('x' + x)
        const adressY = String('y' + y)

        const fullAdress = adressX + adressY


        if (this._borders[fullAdress]) {
          filed += this._borders[fullAdress]
        } else if (this._borders[adressX]) {
          filed += this._borders[adressX]
        } else if (this._borders[adressY]) {
          filed += this._borders[adressY]
        } else {
          filed += this._field[y][x] || ' '
        }

        if (x === this._fieldSize) filed += '\n'
      }

    }

    return filed

  }
}

const renderer = new Renderer()

renderer
  .addPoint(new Point(0, 0))
  .addPoint(new Point(2, 0))
  .addPoint(new Point(0, 2))
  .addPoint(new Point(2, 2))

renderer
  .addPoint(new Point(8, 8))
  .addPoint(new Point(9, 8))
  .addPoint(new Point(8, 9))
  .addPoint(new Point(9, 9))

renderer
  .addPoint(new Point(4, 5))
  .addPoint(new Point(5, 6))
  .addPoint(new Point(5, 4))

console.log(renderer.render())

const RomanNumerals = {
  romanRepresentation: {
    M: {
      symbol: 'M',
      value: 1000,
    },
    D: {
      symbol: 'D',
      value: 500,
    },
    C: {
      symbol: 'C',
      value: 100,
    },
    L: {
      symbol: 'L',
      value: 50,
    },
    X: {
      symbol: 'X',
      value: 10,
    },
    V: {
      symbol: 'V',
      value: 5,
    },
    I: {
      symbol: 'I',
      value: 1,
    },
  },

  fromRoman(romanNumber) {
    const symbols = romanNumber.split('')
    let result = 0

    for (let i = 0; i < symbols.length; i++) {
      const currentSymbol = symbols[i]
      const currentValue = this.romanRepresentation[currentSymbol].value

      const nextSymbol = symbols[i + 1]
      const nextValue = Boolean(nextSymbol) && this.romanRepresentation[nextSymbol].value

      if (nextValue > currentValue) {
        result = result - currentValue
        continue
      }
      result += currentValue
    }
    return result
  },
  toRoman(number) {
    const { M, D, C, L, X, V, I } = this.romanRepresentation

    const values = [
      {
        symbol: M.symbol,
        count: Math.floor(number / M.value),
      },
      {
        symbol: D.symbol,
        count: Math.floor((number % M.value) / D.value),
      },
      {
        symbol: C.symbol,
        count: Math.floor((number % D.value) / C.value),
      },
      {
        symbol: L.symbol,
        count: Math.floor((number % C.value) / L.value),
      },
      {
        symbol: X.symbol,
        count: Math.floor((number % L.value) / X.value),
      },
      {
        symbol: V.symbol,
        count: Math.floor((number % X.value) / V.value),
      },
      {
        symbol: I.symbol,
        count: number % V.value,
      },
    ]

    let result = ''
    let skipNextIteration = false
    for (let i = 0; i < values.length; i++) {
      if (skipNextIteration) {
        skipNextIteration = false
        continue
      }

      const current = values[i]
      const next = values[i + 1]
      const prev = values[i - 1]

      if (next && next.count === 4) {
        if (current.count === 0) {
          result += next.symbol + current.symbol
        } else {
          result += next.symbol + prev.symbol
        }
        skipNextIteration = true
        continue
      }

      result += this.getFilledString(current.symbol, current.count)
    }

    return result
  },
  getFilledString(symbol, length) {
    const symbolsArr = new Array(length)
    symbolsArr.fill(symbol)

    return symbolsArr.join('')
  },
}

console.log(RomanNumerals.fromRoman('XXI'), 21)
console.log(RomanNumerals.fromRoman('I'), 1)
console.log(RomanNumerals.fromRoman('IV'), 4)
console.log(RomanNumerals.fromRoman('IX'), 9)
console.log(RomanNumerals.fromRoman('VIII'), 8)
console.log(RomanNumerals.fromRoman('MMVIII'), 2008)
console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666)
console.log(RomanNumerals.fromRoman('MCDXCIV'), 1494)
console.log(RomanNumerals.fromRoman('MCDXLIV'), 1444)
console.log(RomanNumerals.fromRoman('MCMXCIV'), 1994)
console.log(RomanNumerals.fromRoman('MCMXCIX'), 1999)
console.log(RomanNumerals.fromRoman('MMDCLXVII'), 2667)

console.log(RomanNumerals.toRoman(1), 'I')
console.log(RomanNumerals.toRoman(4), 'IV')
console.log(RomanNumerals.toRoman(9), 'IX')
console.log(RomanNumerals.toRoman(1000), 'M')
console.log(RomanNumerals.toRoman(1494), 'MCDXCIV')
console.log(RomanNumerals.toRoman(1964), 'MCMLXIV')
console.log(RomanNumerals.toRoman(1966), 'MCMLXVI')
console.log(RomanNumerals.toRoman(1990), 'MCMXC')
console.log(RomanNumerals.toRoman(1994), 'MCMXCIV')
console.log(RomanNumerals.toRoman(1999), 'MCMXCIX')
console.log(RomanNumerals.toRoman(2008), 'MMVIII')

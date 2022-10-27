// Новый фильм "Мстители" только что вышел! В кассе кинотеатра много людей,
// стоящих в огромной очереди. Каждый из них имеет по одной купюре, номиналом
// 100, 50 или 25 $.
// Билет "Мстители" стоит 25 $.
// Вася сейчас работает клерком. Он хочет продать билет каждому человеку в этой
// очереди.
// Может ли Вася продать билет каждому человеку и дать сдачу, если у него
// изначально нет денег и он продает билеты строго в порядке очереди?
// Верните YES, если Вася сможет продать билет каждому человеку и дать сдачу.
// В противном случае верните NO.
const tickets = (people) => {
  let result = 'YES'
  const bills = {
    25: 0,
    50: 0,
  }

  for (const bill of people) {
    if (bill === 25) bills[25] += 1
    if (bill === 50) {
      bills[50] += 1
      bills[25] -= 1

      if (bills[25] < 0) {
        result = 'NO'
        break
      }
    }
    if (bill === 100) {
      const hasFifty = bills[50] >= 1
      const hasTwentyFivesMany = bills[25] >= 3
      const hasTwentyFivesOne = bills[25] >= 1

      if (hasFifty && hasTwentyFivesOne) {
        bills[50] -= 1
        bills[25] -= 1
      } else if (hasTwentyFivesMany) {
        bills[25] -= 3
      } else {
        result = 'NO'
        break
      }
    }
  }

  return result
}

console.log(tickets([25, 25, 50])) // "YES"
console.log(tickets([25, 100])) // "NO" (У Васи нет сдачи со 100)
console.log(tickets([25, 25, 50, 50, 100])) // "NO"
console.log(tickets([25, 25, 25, 25, 25, 100, 100])) // "NO"
console.log(tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100])) // "YES"
console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100])) // "YES"
console.log(tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])) // => "NO"
console.log(tickets([25, 25, 50])) // "YES"
console.log(tickets([25, 100])) // "NO"
console.log(tickets([25, 25, 50, 50, 100])) // "NO"
console.log(tickets([25, 50, 25, 100])) // "YES"
console.log(tickets([25, 50, 50])) // "NO"
console.log(tickets([25, 25, 25, 100])) // "YES"
console.log(tickets([25, 25, 25, 25, 25, 50, 100])) // "YES"
console.log(tickets([25, 100])) // "NO"

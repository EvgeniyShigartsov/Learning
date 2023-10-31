// const sum = (a, b) => a + b
// const multiply = (a, b) => a * b

// const calculate = (fn) => (a) => (b) => fn(a, b)

// console.log(calculate(sum)(5)(2))
// console.log(calculate(multiply)(5)(2))


function curry(func) {
  return function curried(...args) {
      if (args.length >= func.length) {
          return func.apply(this, args);
      } else {
          return function (...args2) {
              return curried.apply(this, args.concat(args2));
          };
      }
  };
}


// Объяснение:

// На вход мы получаем функцию, которую нужно преобразовать. Возвращаем мы тоже функцию, она называется curried, в которую можно передать неограниченное количество аргументов. 

// Внутри возвращаемой функции есть две логические ветви. Мы проверяем, набралось ли достаточное количество аргументов, и если да, то просто вызываем функцию func со всеми набранными аргументами. Если аргументов недостаточно, то мы возвращаем функцию, с помощью которой накопятся новые аргументы и снова вызовется функция curried, которая опять будет ждать накопления аргументов или вызовет func.

// Код для проверки:

const sum = (a, b, c) => {
  return a + b + c;
};

const currySum = curry(sum);

console.log(currySum(1, 1, 1)); // 3
console.log(currySum(1)(1, 1)); // 3
console.log(currySum(1, 1)(1)); // 3
console.log(currySum(1)(1)(1)); // 3
'use strict';

// 1. Выведите в консоль все целые числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
  // console.log(i);
}

// 2. Выведите в консоль все целые числа от -100 до 0.
for (let i = -100; i <= 0; i++) {
  // console.log(i);
}

// 3. Выведите в консоль все целые числа от 100 до 1.
for (let i = 100; i >= 1; i--) {
  // console.log(i);
}

// 4. Выведите в консоль все четные числа из промежутка от 1 до 100.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// 5. Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    // console.log(i);
  }
}

// 6. Найдите сумму всех целых чисел от 1 до 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
// console.log(sum);

// 7. Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sumEven = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}
// console.log(sumEven);

// 8. Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let notEvenSum = () => {
  let sumNotEven = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      sumNotEven += i;
    }
  }
  console.log(sumNotEven);
};
// notEvenSum();

// 9. Даны два целых числа. Найдите остаток от деления первого числа на второе.
let division = (num1, num2) => {
  let res = num1 % num2;
  console.log(res);
};
// division(7, 4);

// 10. Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
let string = 'Дана некоторая строка';

let stringRevers = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
};
// stringRevers(string);

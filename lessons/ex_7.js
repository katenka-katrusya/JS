'use strict';

// 1. Дана строка. Выведите в консоль последний символ строки.
let str = 'Выведите в консоль последний символ строки';

let result = (string) =>
  // at(-1)
  console.log(`Последний символ строки: ${string.at(-1)}`);

// slice(-1)
// console.log(`Последний символ строки: ${string.slice(-1)}`);

result(str);

// 2. Дано число. Проверьте, четное оно или нет.

// Можно написать log при вызове ф-ии, тогда необходимо создать переменную для результата num2 и вернуть её
let number = (num) => {
  let num2 = num % 2 === 0 ? 'Чётное' : 'Нечётное';
  return num2;
};

console.log(number(6));

// Можно выводить log внутри ф-ии, тогда дополнительная переменная с результатом не нужна
let number2 = (num) =>
  num % 2 === 0 ? console.log('Чётное') : console.log('Нечётное');

number2(5);

// 3. Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let letter1 = 'проверьте';
let letter2 = 'Первые';

let check = (l1, l2) => {
  // l1[0] === l2[0]
  //   ? console.log('Первые буквы совпадают')
  //   : console.log('Первые буквы разные');

  // можно первые буквы привести к одному регистру и потом сравнить
  l1[0].toLowerCase() === l2[0].toLowerCase()
    ? console.log('Первые буквы совпадают')
    : console.log('Первые буквы разные');
};

check(letter1, letter2);

// 4. Дано число. Выведите в консоль первую цифру этого числа.

let number3 = (num) => {
  let returnNum = +num.toString()[0];
  console.log(returnNum);
};

number3(34518);

// 5. Дано число. Выведите в консоль последнюю цифру этого числа.

let number4 = (num) => {
  console.log(+num.toString().at(-1));
};

number4(345180);

// 6. Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let sumNumber = (num) => {
  let sum = +num.toString().at(0) + +num.toString().at(-1);
  console.log(sum);
};

sumNumber(345181);

// 7. Дано число. Выведите количество цифр в этом числе.

let colNums = (num) => console.log(num.toString().length);

colNums(123456789);

// 8. Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let numbersCheck = (num1, num2) => {
  num1.toString()[0] === num2.toString()[0]
    ? console.log('Первые цифры совпадают')
    : console.log('Первые цифры не совпадают');
};

numbersCheck(123, 222);

// 9. Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let stringCheck = (str) => {
  str.length >= 1
    ? console.log(`Предпоследний символ: ${str.at(-2)}`)
    : console.log('Строка пустая');
};

stringCheck('1233');

// 10. Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let even = (num1, num2) => {
  num1 % num2 === 0 ? console.log(true) : console.log(false);
};

even(7, 2);

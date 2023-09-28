'use strict';

// 1. Дан массив с числами. Найдите сумму квадратов элементов этого массива.
let array = [2, 7, 9, 0, 12, 0, 10];

let sum = (arr) => {
  let sum = 0;
  for (let el of arr) {
    let square = el ** 2;
    sum += square;
  }
  console.log(sum);
};

// sum(array);

// 2. Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
let sqrtRoot = (arr) => {
  let sum = 0;
  for (let el of arr) {
    let root = Math.sqrt(el);
    sum += root;
  }
  console.log(+sum.toFixed(1));
};

// sqrtRoot(array);

// 3. Дан массив с числами. Найдите сумму положительных элементов этого массива.
let array1 = [2, 7, 9, -7, 12, 0, -10];

let sumPositive = (arr) => {
  let sum = 0;
  for (let el of arr) {
    // if (el > 0) {
    //   sum += el;
    // }

    el > 0 ? (sum += el) : false;
  }
  console.log(sum);
};

// sumPositive(array1);

// 4. Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
let sumPositive2 = (arr) => {
  let sum = 0;
  for (let el of arr) {
    el > 0 && el < 10 ? (sum += el) : false;
  }
  console.log(sum);
};
// sumPositive2(array1);

// 5. Дана строка. Получите массив букв этой строки.
let string = 'abcde';

let strToArray = (str) => {
  let res = Array.from(str);
  console.log(res);
};
// strToArray(string);

// 6. Дано некоторое число. Получите массив цифр этого числа.
let number = 12034505;

let numToArray = (num) => {
  let res = Array.from(String(num), Number);
  console.log(res);
};
// numToArray(number);

// 7. Дано некоторое число. Переверните его
let reversNumber = (num) => {
  let res = String(num).split('').reverse().join('');
  console.log(number);
  console.log(res);

  // пояснение --->>>
  // let res = String(num); /* перевернуть можем только строку */
  // console.log(res);
  // res = res.split(''); /* получается массив ['1', '2'..] */
  // console.log(res);
  // res = res.toReversed(); /* перевернутый массив */
  // console.log(res);
  // res = res.join('');
  // console.log(number); /* изначальное число */
  // console.log(
  //   res
  // ); /* не переводим в намбер, потому что потеряется ноль в начале */
};
// reversNumber(number);

// 8. Дана строка. Если последний символ мягкий знак, верните предпоследний и тд.
let str = 'Метельььь';

let string3 = (str) => {
  let res = Array.from(str); /* переводим строку в массив */
  /* метод findLast применяем для массива */
  res = res.findLast((el) => el !== 'ь');

  console.log(res);
};

// string3(str);

// 9. Дано некоторое число. Найдите сумму цифр этого числа.
let sumNumbers = (num) => {
  let sum = 0;

  let res = String(num); /* нужна строка для работы */
  res = Array.from(res); /* строку переводим в массив */

  // 1 способ
  for (let el of res) {
    sum += +el;
  }
  console.log(sum);

  // 2 способ
  // for (let i = 0; i < res.length; i++) {
  //   sum += +res[i];
  // }
  // console.log(sum);
};

sumNumbers(number);

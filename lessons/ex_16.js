'use strict';

// 1. С помощью цикла заполните массив 10-ю случайными целыми числами.

function getRandomNumber(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
// console.log(getRandomNumber(100, 1));

function getRandomArray(func) {
  let array = [];
  let length = 10;
  for (let i = 0; i < length; i++) {
    array.push(func(1, 20));
  }
  return array;
}

let newRandomArray = getRandomArray(getRandomNumber);

console.log(newRandomArray);

// 2. Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' разными способами
// (через substr, slice).
let str = 'я учу javascript!';
let cutWords = (str) => {
  let res;
  // res = str.slice(2, 5);
  // res = str.slice(-12, -1);

  res = str.substr(2, 3);
  res = str.substr(6, 10);
  return res;
};
console.log(cutWords(str));

// 3. Поменяйте все дефисы на точки.
let replaceString = () => {
  let str = '1-2-3-4-5';
  let element = '-';

  /* replace находит только один элемент, поэтому нужен цикл */
  while (str.includes(element)) {
    str = str.replace(element, '.');
  }
  return str;
};
console.log(replaceString());

// можно использовать метод replace и регулярное выражение, цикл тогда не нужен
let replaceString2 = () => {
  let str = '6-7-8-9-10';
  // между слэшами - регулярка, буква 'g' - глобальный поиск. В итоге всё заменяем на точки
  let newStr = str.replace(/-/g, '.');
  return newStr;
};
console.log(replaceString2());

// 4. Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
let strToArray = () => {
  let str = '12345';
  let newStr = str.split('');
  return newStr;
};
console.log(strToArray());

// 5. С помощью метода join слейте его в строку '1-2-3-4-5'.
let arr = [1, 2, 3, 4, 5];
// console.log(arr.join('-'));
// arr.push(6, 7, 8);

// метод slice
// let newArr = arr.slice(0, 3);

// метод splice
// arr.splice(1, 2);
// arr.splice(3, 0, 'a', 'b', 'c');
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

// Проверьте, есть ли в этом массиве число 3.
// метод includes
// let res = arr.includes(3);

// Метод find помогает найти первый элемент в массиве согласно переданному в параметре коллбэку.
// Если элемента нет, то возвращается undefined.
// let res = arr.find((el) => el > 0); /* ф-ия коллбэк */

// Метод indexOf. Возвращает -1, если такого элемента нет
let res = arr.indexOf(3);

console.log(res);

// Получите массив его ключей.
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));

//
let num = 12345;
let arr2 = String(num).split('');

let sum = 0;
for (let digit of arr2) {
  sum += +digit;
}

console.log(sum);

// 5. Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз,
// пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
// которое потребовалось для достижения результата.

function exampleFunc(num) {
  let count = 0;

  while (num > 10) {
    num /= 2;
    count++;
    console.log(num);
  }
  return count;
}
console.log(exampleFunc(100));

// 6. Все ли числа в массиве положительные
function arrayPositive(arr) {
  for (let el of arr) {
    if (el < 0) {
      return false;
    }
  }
  return true;
}
console.log(arrayPositive([1, 2, -3, 4, 5]));

// Код должен проверить число на то, что оно является простым:
console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) {
      return true;
    }
    return false;
  }
}

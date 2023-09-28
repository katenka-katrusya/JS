'use strict';

// 1. Пусть в переменной num хранится число.
// Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа.
// Если полученная сумма меньше или равна 9, то выведите сообщение о том, что
// сумма цифр однозначна, в противном случае выведите сообщение о том,
// что сумма цифр двухзначна.
let nums = (num) => {
  let sum = 0;
  num = String(num);
  if (num >= 10 && num <= 99) {
    sum = +num[0] + +num[1];
    console.log(sum);
    if (sum <= 9) {
      console.log('сумма цифр однозначна');
    } else {
      console.log('сумма цифр двухзначна');
    }
  } else {
    console.log('число меньше 10');
  }
};
nums(99);

// 2. В переменной arr содержится некоторый массив с числами. Напишите условие,
// которое проверит, что в массиве 3 элемента. Если это так,
// выведите на экран сумму элементов массива.
let array = (arr) => {
  if (arr.length === 3) {
    let sum = 0;
    for (let el of arr) {
      sum += el;
    }
    return sum;
  }
  return 'В массиве больше 3 элементов';
};

let arr = [1, 2, 3, 4];
console.log(array(arr));

// 3. Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на https://.
let array2 = [
  'gggggggghghghg/.com',
  'https://www.code.mu',
  'hh:http://',
  'https://dropcode.ru',
  'htjt.html',
];

let resArr = (arr) => {
  let newArr = arr.filter((el) => el.startsWith('https://'));
  return newArr;
};
console.log(resArr(array2));

// 4. Дан массив со строками. Оставьте в этом массиве только те строки,
// которые заканчиваются на .html.
let resArr2 = (arr) => {
  let newArr = arr.filter((el) => el.endsWith('.html'));
  return newArr;
};
console.log(resArr2(array2));

// 5. Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
function adddigit(array, percent) {
  let newarray = [];
  for (let element of array) {
    newarray.push((element = element + (element * percent) / 100));
  }
  return newarray;
}
let ar2 = [10, 100, 1000];
console.log(adddigit(ar2, 10));

// 6. Заполните массив случайными числами из промежутка от 1 до 100.
function randomNums(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  let num = randomNumber;
  return num;
}
console.log(randomNums(1, 100));

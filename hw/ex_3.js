'use strict';

// for of - без индекса ///// for in - индекс без значений в виде СТРОКИ

let fruits = ['Яблоко', 'Арбуз', 'Дыня', 'Киви'];

for (let fruit of fruits) {
  // console.log(fruit);
}

let raiting = ['Катя', 'Вася', 'Петя', 'Марина'];
for (let i in raiting) {
  // console.log(i);
  // console.log(`${parseInt(i) + 1} место: ${raiting[i]}`);
}

// Заполнение массива на основе счётчика
let arr = [];
for (let i = 1; i < 11; ++i) {
  arr.push(i ** 2);
}
// console.log(arr);

// Заполнение массива на основе значений другого массива (который выше - arr)
let arr2 = [];
for (let element of arr) {
  arr2.push(element / 2);
}
// console.log(arr, arr2);

// Заполнение пустого массива на основе других данных (длинна массива неизвестна)
// let lines = [];
// let next;
// while ((next = file.nextLine())) {
//   lines.push(next);
// }

// Обработка значений массива
// for (let line of lines) {
//   console.log('Длина строки:', line.length);
// }

// Обработка индексов массива
// for (let number in lines) {
//   console.log(`Длина строки №${number}: ${lines[number].length}`);
// }

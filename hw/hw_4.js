'use strict';

// Задача 1. Напишите генератор массивов длиной count со случайными числами от n до m.
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите результат с помощью console.log.

// let array = [];
// let n = -10;
// let m = 10;
// let count = 10;

// let min = Math.min(m, n);
// let max = Math.max(m, n);

// for (let i = 0; i < count; i++) {
//   array.push(Math.floor(Math.random() * (max - min) + min));
// }
// console.log(array);

// Задача 2. Создайте с помощью цикла for массив упорядоченных чисел с количеством чисел, равным count. Например:
// count = 5; соответствует массив [1,2,3,4,5];
// count = 7; соответствует массив [1,2,3,4,5,6,7];
// count = 3; соответствует массив [1,2,3].
// С помощью второго цикла перемешайте этот массив.
// Выведите получившийся результат на экран с помощью console.log.

let array = [];
let count = 7;

for (let i = 1; i <= count; i++) {
  array.push(i);
}
console.log('Исходный массив =', array);

for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
console.log('Перемешанный массив =', array);

// Задача 3. С помощью цикла найдите индекс (порядковый номер) элемента массива из предыдущего задания с числом n.
// Если такой элемент не будет найден, то выведите соответствующее сообщение на экран.
let index = 5;

array.forEach((element, index) =>
  console.log(`Индекс: ${index}, Элемент: ${element}`)
);
array[index] >= 0
  ? console.log(`Под индексом ${index} содержится элемент ${array[index]}`)
  : console.log(`Индекс ${index} отсутствует`);

// for (let i = 0; i < array.length; i++) {
//   console.log(`Индекс: ${i}, Элемент: ${array[i]}`);
// }
// array[index] >= 0
//   ? console.log(`Под индексом ${index} содержится элемент ${array[index]}`)
//   : console.log(`Индекс ${index} отсутствует`);

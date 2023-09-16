'use strict';

// Задача 1. Создайте функцию с названием getAge(), которая будет рассчитывать возраст по году рождения.
// У функции будет всего один аргумент (параметр), который нужно передать в функцию.
// Функция должна сделать расчёт возраста по текущему году. После расчёта функция должна вернуть результат с помощью команды return.
// Созданную функцию нужно вызвать, передав ей дату рождения. Результат, который вернёт функция, необходимо вывести в консоль.

function getAge(yearOfBirth) {
  let age = null;
  let date = new Date().getFullYear();
  if (yearOfBirth < date) {
    age = date - yearOfBirth;
    console.log(`Ваш возраст: ${age} лет`);
  } else {
    age = yearOfBirth - date;
    console.log(`Вы из будущего и вам ${age} лет`);
  }
  return age;
}

getAge(1993);

// Задача 2. Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список.
// В качестве аргументов функция должна принимать два массива: массив строк с исходными email-адресами и массив строк с email-адресами в чёрном списке.

// Массив с почтовыми адресами:
let whiteList = [
  'my-email@gmail.ru',
  'jsfunc@mail.ru',
  'annavkmail@vk.ru',
  'fullname@skill.ru',
  'goodday@day.ru',
];

// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru'];

// фильтр
function filter(arr1, arr2) {
  let result = arr1.filter((el) => !arr2.includes(el));
  return result;
}

console.log(filter(whiteList, blackList));

// Задача 3. Создайте функцию arrSort(), аргументом (параметром) которой будет массив.
// Задача функции — сделать сортировку элементов переданного массива по возрастанию.
// Функция должна вернуть отсортированный массив, а результат выполнения функции должен быть выведен в консоль с помощью console.log.
let array = [12, 33, 3, 44, 100];

function arrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(arrSort(array));

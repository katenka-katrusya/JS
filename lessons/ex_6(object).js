'use strict';

// 1. У нас есть объект, в котором хранятся зарплаты нашей команды.
//   Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//   Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let salariesSum = (obj) => {
  let sum = 0;
  for (let i in obj) {
    /* применяем for...in потому, что for...of не работает с объектами */
    sum += obj[i];
  }
  return console.log(sum);
};
salariesSum(salaries);

// 2. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return console.log(
    obj
  ); /* по заданию ничего не должен возвращать, но нам надо проверить работу кода */
}

multiplyNumeric(menu);

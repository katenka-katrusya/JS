'use strict';

let user = {
  name: 'John',
};

user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// console.log(user);

// Проверка на пусто. Если пусто, то тру
let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
// console.log(isEmpty(schedule));

// Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

// for (let key in salaries) {
//   sum += +salaries[key];
// }
// console.log(sum);

// Умножаем все числовые свойства на 2
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu));

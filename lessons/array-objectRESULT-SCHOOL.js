'use strict';

// Задание #1
// Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
// Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:
// “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

let john = {
  name: 'John',
  age: 24,
  pet: 'Шарик',
};
let ann = {
  name: 'Ann',
  age: 34,
  pet: 'Матильда',
};

function objectsPets(obj) {
  return `Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`;
}
console.log(objectsPets(ann));

// Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.

function incrementAge(obj) {
  return obj.age + 1;
}
console.log(incrementAge(ann));

// Выведите циклом все названия свойств и их значения, которые есть у объекта john.

function loop(obj) {
  for (let key in obj) {
    console.log('Свойство: ' + key + ' Значение: ' + obj[key]);
  }
}
loop(john);

// Задание #2
// Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

let sumNumbers = (arr) => {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum;
};
console.log(sumNumbers([1, 10, 5, 4, 0]));

// Задание #3
// Создайте пустой массив names.
// Добавьте в него 5 любых имен.
// Выведите массив в консоль.
// Уберите из начала и конца массива по 1 элементу.
// Снова выведите массив в консоль.

let array = [];

function arrayExample(arr) {
  arr.push('Иван', 'Катя', 'Никита', 'Валера', 'Марина');
  console.log(arr);
  arr.shift();
  arr.pop();
  console.log(arr);
}
arrayExample(array);

// Задание #4
// Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML.
// Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

function generationInHTML(arr) {
  // используем map, чтобы обернуть каждый элемент массива в <li>
  console.log(arr.map((el) => `<li>${el}</li>`));
  // Соединяем элементы нового массива в одну строку с помощью join()
  // в итоге будет одна длинная строка
  console.log(arr.map((el) => `<li>${el}</li>`).join(''));
  // кладём строку из элементов внутрь конструкции <ul></ul>
  console.log(`<ul>${arr.map((el) => `<li>${el}</li>`).join('')}</ul>`);
  // Такая команда вернёт нам полноценную строку, которая будет соответствовать синтаксису HTML
}
generationInHTML(names);

// Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.
const object = {
  age: 22,
  favColor: 'red',
  height: 188,
  pet: 'dog',
  money: 12300,
};

function destructuring(obj) {
  let { age, favColor, height, pet, money } = obj;
  console.log(age, favColor, height, pet, money);
}
destructuring(object);

// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj.

const obj = {
  age: 22,
  favColor: 'red',
  height: 188,
  pet: 'dog',
  money: 12300,
};

const updateObj = {
  age: 23,
  favColor: 'blue',
  money: 11450,
};

function object2(obj1, obj2) {
  // vможно через спред ...
  const newObj = { ...obj1, ...obj2 };

  // можно через Object.assign
  // const newObj = Object.assign(obj1, obj2);
  return newObj;
}
// получаем новый объект с перезаписанными значениями из второго объекта
console.log(object2(obj, updateObj));

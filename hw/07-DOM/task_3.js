'use strict';

// Создайте массив объектов студентов. Создайте функцию с названием createStudentsList() в файле task_3.js, принимающую один параметр listArr.
// Функция должна создавать список ul с карточками студентов, основанный на переданном в функцию массиве студентов.
// Для решения задачи лучше всего использовать цикл внутри функции createStudentsList().
// При желании можно украсить элементы CSS-стилизацией.

function createStudentsList(listArr) {
  let ul = document.createElement('ul');
  ul.className = 'list';
  divContainer.append(ul);

  for (let element of listArr) {
    let li = document.createElement('li');
    li.className = 'item';
    ul.append(li);

    let h2 = document.createElement('h2');
    h2.className = 'title';
    h2.innerHTML = `${element.name}`;
    li.append(h2);

    let span = document.createElement('span');
    span.innerHTML = `Возраст: ${element.age}`;
    li.append(span);
  }
}

let divContainer = document.createElement('div');
divContainer.className = 'container';
document.body.prepend(divContainer);

let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 },
];

createStudentsList(allStudents);

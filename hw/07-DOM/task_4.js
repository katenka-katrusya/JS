'use strict';

// Отличие задачи в том, что новый список студентов должен быть отображён на странице после клика по заранее созданной кнопке.
// Создайте кнопку button с текстом внутри «Показать список». Привяжите к кнопке событие клика.
// При клике должна быть вызвана ранее созданная функция createStudentsList() и под кнопкой должен появиться список студентов.

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

let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 },
];

let divContainer = document.createElement('div');
divContainer.className = 'container';
document.body.prepend(divContainer);

let btn = document.createElement('button');
btn.textContent = 'Показать список';
btn.className = 'btn';
divContainer.prepend(btn);

btn.addEventListener(
  'click',
  function () {
    createStudentsList(allStudents);
  },
  { once: true }
);

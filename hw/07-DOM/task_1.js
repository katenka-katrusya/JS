'use strict';

// Создайте функцию с названием createStudentCard() в файле task_1.js, принимающую два параметра: name и age.
// Функция должна создавать карточку студента внутри элемента body HTML-страницы.
// Карточка студента представляет собой DOM-элемент, а именно тег div, внутри которого находится заголовок h2 с именем студента из параметра name и span под заголовком с возрастом студента (age).
// При желании можно украсить элементы CSS-стилизацией.

let divContainer = document.createElement('div');
divContainer.className = 'container';
document.body.prepend(divContainer);

function createStudentCard(name, age) {
  let divCard = document.createElement('div');
  divCard.className = 'card';
  divContainer.append(divCard);

  let h2 = document.createElement('h2');
  h2.className = 'title';
  h2.innerHTML = `${name}`;
  divCard.append(h2);

  let span = document.createElement('span');
  span.innerHTML = `Возраст: ${age}`;
  divCard.append(span);
}

createStudentCard('Екатерина', 29);
createStudentCard('Иван', 30);

// сначала было так, оказалось, что это древний способ:

// document.write('<div class="container">');

// function createStudentCard(name, age) {
//   document.write(`
//   <div class='card'>
//   <h2 class='title'>${name}</h2>
//   <span>Возраст: ${age}</span>
//   </div>
//   `);
// }

// createStudentCard('Екатерина', 29);
// createStudentCard('Иван', 30);

// document.write('</div>');

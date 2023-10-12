'use strict';

// Доработайте функцию createStudentCard() так, чтобы она принимала не два параметра с информацией о студенте,
// а один — student, который является объектом с информацией о студенте.
// Функция делает то же самое, что и в первой задаче, — создаёт карточку студента.

function createStudentCard(student) {
  let divCard = document.createElement('div');
  divCard.className = 'card';
  divContainer.append(divCard);

  let h2 = document.createElement('h2');
  h2.className = 'title';
  h2.innerHTML = `${student.name}`;
  divCard.append(h2);

  let span = document.createElement('span');
  span.innerHTML = `Возраст: ${student.age} лет`;
  divCard.append(span);
}

let divContainer = document.createElement('div');
divContainer.className = 'container';
document.body.prepend(divContainer);

let studentObj = {
  name: 'Игорь',
  age: 17,
};

let studentObj2 = {
  name: 'Марина',
  age: 20,
};

createStudentCard(studentObj);
createStudentCard(studentObj2);

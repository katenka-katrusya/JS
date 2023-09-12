"use strict";

// Function Declaration от Function Expression

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// 2. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
function minimum(a, b) {
  return Math.min(a, b); /* или так  a < b ? a : b */
}
// console.log(minimum(8, 0));

// 3. Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат
// let num = +prompt("Введите целое число", "2");
// let deg = +prompt("Введите степень", "3");

// function degree(x, n) {
//   return Math.pow(x, n);
// }

// let result = degree(num, deg);

// if (Number.isInteger(num) && Number.isInteger(deg)) {
//   alert(result);
// } else {
//   alert("Введите целое число");
// }

// Function Expression

// Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.
// Это выглядит следующим образом:

// let sayHi = function() {
//   alert( "Привет" );
// };

// Стрелочный функции
// 1.
// let num = (x, n) => x ** n;
// console.log(num(3, 3));

// 2.
// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет!') :
//   () => alert("Здравствуйте!");

// welcome();

// 3. Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

let question = "Вы согласны?";
let ask = confirm(question) ? () => alert("Вы согласились.") : () => alert("Вы отменили выполнение.");
ask();

// 2 вариант
// let ask = (question, yes, no) => (confirm(question)) ? yes() : no()
// ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."))

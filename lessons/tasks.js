// 1. Пусть дана переменная r с радиусом круга. По соответствующей формуле найдите площадь круга и запишите ее в переменную s.
// Выведите содержимое этой переменной на экран.
let areaOfCircle = (r) => {
  let result = Math.PI * r ** 2;
  return +result.toFixed(2);
};
console.log(`Площадь круга:`, areaOfCircle(4));

// 2. Пусть дана переменная a со стороной квадрата. Найдите площадь квадрата
// и запишите ее в переменную s. Выведите содержимое этой переменной на экран.
let areaOfTheSquare = (width) => {
  let s = width ** 2;
  return console.log(`Площадь квадрата:`, s);
};
areaOfTheSquare(5);

// 3. Пусть даны переменные a и b со сторонами прямоугольника.
// Найдите площадь прямоугольника и запишите ее в переменную s.
// Выведите содержимое этой переменной на экран.
function areaOfaRectangle(a, b) {
  let s = a * b;
  return console.log(`Площадь прямоугольника:`, s);
}
areaOfaRectangle(2, 4);

// 4. Пусть даны переменные a и b со сторонами прямоугольника.
// Найдите периметр прямоугольника и запишите его в переменную p.
// Выведите содержимое этой переменной на экран.
function perimeterOfaRectangle(a, b) {
  let p = (a + b) * 2;
  return console.log(`Периметр прямоугольника:`, p);
}
perimeterOfaRectangle(5, 2);

// 5. Пусть дана переменная tc с температурой в градусах Цельсия.
// По соответствующей формуле выполните перевод этой температуры в градусы Фаренгейта.
function temperature(tc) {
  let tf = tc * 1.8 + 32;
  return console.log(`Градусы Фаренгейта:`, tf);
}
temperature(20);

// 6. Пусть дана переменная tf с температурой в градусах Фаренгейта.
// По соответствующей формуле выполните перевод этой температуры в градусы Цельсия.
function temperature2(tf) {
  let tc = (tf - 32) / 1.8;
  return console.log(`Градусы по Цельсию:`, +tc.toFixed(1));
}
temperature2(73);

// допы
// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели.
// Выведите на экран все его элементы.

let obj = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',
};
console.log(obj);

// Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями.
// Выведите на экран фамилию, имя и отчество через пробел.
let user = {
  name: 'Пётр',
  surname: 'Курочкин',
  patronymic: 'Сергеевич',
};
console.log(user['surname'], user['name'], user['patronymic']);

//
let date = {};
const currentDate = new Date();
date.year = currentDate.getFullYear();
date.month = currentDate.getMonth() + 1;
date.day = currentDate.getDate();
console.log(date.day, date.month, date.year);

// Возведите в квадрат каждый элемент этого объекта.
let obj2 = { x: 1, y: 2, z: 3 };
obj2.x **= 2;
obj2.y **= 2;
obj2['z'] **= 2;
console.log(obj2);

//
let obj3 = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj3);
console.log(keys);

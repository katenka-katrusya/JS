'use strict';

// 1. Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let array = [2, 7, 2, 5, 3, 9, 0];

let array1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;

    // Переберите этот массив циклом и отнимите от каждого элемента единицу.
    // arr[i]--;

    // Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
    // arr[i] += 10;
  }
  return arr;
};
console.log(array1(array));

// 2. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами.
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
let keys = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let values = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

let object = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
};
console.log(object(keys, values));

// 3. Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj2 = {};

let object2 = (obj1) => {
  for (let i in obj1) {
    if (obj1[i] % 2 === 0) {
      obj2[i] = obj1[i];
    }
  }
  return obj2;
};
console.log(object2(obj1));

// 4. Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта,
// а значениями - ключи старого объекта.
let newObject = {};

let object3 = (obj, newObj) => {
  /* на вход принимаем старый объект и новый пустой */
  for (let i in obj) {
    /* проходимся по старому объекту */
    let key = obj[i]; /* ключ - элемент старого объекта, присваиваем */
    let value = i; /* элемент - ключ старого объекта, присваиваем */

    newObj[key] = value;
    /* указываем объект (newObj), куда помещаем наши ключ: значение */
  }
  return newObj; /* возвращаем новый объект */
};

console.log(object3(obj1, newObject));

// 5. Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let object4 = (obj) => {
  for (let key in obj) {
    // obj[key] **= 2;

    // Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
    obj[key]++;
  }
  return obj;
};
console.log(object4(obj1));

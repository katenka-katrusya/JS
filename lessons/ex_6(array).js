// 1. Сделай функцию, которая принимает массив любых целых чисел,
// которая возращает истину, если все элементы четные,
// если бы хотя бы один элемент не четный, то false.

let array = [10, 4, 5, 18, 15, 20, 3];

function even(arr) {
  let result = arr.filter((el) => el % 2 === 0);
  return console.log(result.length === arr.length ? true : false);

  // result.length === arr.length
  //   ? console.log('Все элементы чётные')
  //   : console.log('Есть нечётный элемент');
}
// even(array);

// 2. Сделай функцию, которая принимает массив любых целых чисел,
// которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.

let evenTwo = (arr) => {
  let result2 = arr.filter((el) => el % 2 === 0);
  console.log(result2.length === arr.length ? false : true);
};

// evenTwo(array);

// 3. Сделай функцию, которая принимает массив любых целых чисел,
// которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

let newArray = [];

let multipleOfFive = (arr) => {
  newArray = arr.filter((el) => el % 5 === 0);
  console.log(newArray);
};

// multipleOfFive(array);

// 4. Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
// и функция возращает среднее арифметическое, (округлить результат до десятых)

let average = (arr) => {
  let sum = 0;
  let res = 0;
  for (let el of arr) {
    sum += el;
    res = sum / arr.length;
  }
  return console.log(+res.toFixed(1));
};

// average(array);

// 5. Написать функцию, которая принимает массив чисел, например [1,2,3,4,5],
// и переносит первый элемент массива в конец (например можно засунуть первый элемент в конец,
// затем удалить первый элемент)

function transfer(arr) {
  let newElement = arr.shift(arr[0]); /* удаляем первый элемент массива */
  console.log(newElement); /* смотрим, что за элемент удалили */
  arr.push(newElement); /* добавляем его  в конец массива */
  return console.log(arr);
}

// transfer(array);

// 6. Написать функцию, которая принимает массив сотрудников,
// каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...])
// и возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".

let arrayUsers = [];

let users = [
  {
    name: 'Иван',
    age: 23,
  },

  {
    name: 'Светлана Николаевна',
    age: 50,
  },

  {
    name: 'Елизавета',
    age: 35,
  },

  {
    name: 'Егор',
    age: 23,
  },

  {
    name: 'Никита',
    age: 32,
  },
];

let employees = (arr) => {
  /* с for...of не работает, используем for...in */
  for (let el in arr) {
    /* перебираем массив */
    arrayUsers.push(`Имя: ${arr[el].name}, возраст: ${arr[el].age}`);
    // создали пустой массив и начали пушить в него каждый элемент
    // теперь у нас целая строка - это один элемент
  }
  console.log(arrayUsers);
};

employees(users);

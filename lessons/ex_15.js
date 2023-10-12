'use strict';

// 1. Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let array = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

function sumArray(arr) {
  let sum = 0;

  // 1 способ через for...of

  // for (let el of arr) {
  //   for (let i of el) {
  //     for (let j of i) {
  //       sum += j;
  //     }
  //   }
  // }

  // 2 способ просто через for

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        sum += arr[i][j][k];
      }
    }
  }
  return sum;
}
// console.log(sumArray(array));

// 2. Заполнение многомерного массива
function arrayPush() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr[i] = []; // создаем подмассив

    for (let j = 0; j < 5; j++) {
      arr[i].push(j + 1); // заполняем подмассив числами
    }
  }
  return arr;
}

// console.log(arrayPush());

// 3. Сформируйте с помощью двух вложенных циклов массив с x
function arrayPush2() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 4; j++) {
      arr[i].push('x');
    }
  }
  return arr;
}

// console.log(arrayPush2());

// 4. Сформируйте с помощью трех вложенных циклов массив:
function arrayPush3() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 2; j++) {
      arr[i][j] = [];

      for (let k = 0; k < 5; k++) {
        arr[i][j].push(k + 1);
      }
    }
  }
  return arr;
}

// console.log(arrayPush3());

// 5.
function arrayPush4() {
  let arr = [];
  let count = 1; /* чтобы в массивах были числа от 1 и ++ */

  for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
      arr[i].push(count++);
    }
  }
  return arr;
}
// console.log(arrayPush4());

// 6.
function arrayPush5() {
  let arr = [];
  let count = 0;

  for (let i = 0; i < 4; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
      arr[i].push((count += 2));
    }
  }
  return arr;
}
// console.log(arrayPush5());

// 8. Сформируйте с помощью трех вложенных циклов трехмерный массив
function arrayPush6() {
  let arr = [];
  let count = 1;

  for (let i = 0; i < 2; i++) {
    arr[i] = [];

    for (let j = 0; j < 2; j++) {
      arr[i][j] = [];

      for (let k = 0; k < 2; k++) {
        arr[i][j].push(count++);
      }
    }
  }
  return arr;
}

// console.log(arrayPush6());

// ДРУГОЙ СПОСОБ, НЕ пушим, а присваиваем

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  /* объявляем k = 1 */
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k++; /* присваиваем */
  }
}

// console.log(arr);

// Найдите сумму элементов приведенного объекта.
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

function arrayObject(obj) {
  let sum = 0;

  /* проходимся по объекту внешнему */
  for (let i in obj) {
    /* здесь по внутреннему: key1: {}, key2: {}, key3: {} */
    for (let j in obj[i]) {
      sum += obj[i][j]; /* берём ЗНАЧЕНИЯ свойств (ключей) */
    }
  }
  return sum;
}
// console.log(arrayObject(obj));

// console.log(students['group3'][0]);

//
let data = {
  1: ['data11', 'data12', 'data13'],
  2: ['data21', 'data22', 'data23'],
  3: ['data31', 'data32', 'data33'],
  4: ['data41', 'data42', 'data43'],
};

function object1(obj) {
  for (let i in obj) {
    for (let el of obj[i]) {
      console.log(el);
    }
  }
}
// object1(data);

//
let data2 = [
  {
    1: 'data11',
    2: 'data12',
    3: 'data13',
  },
  {
    1: 'data21',
    2: 'data22',
    3: 'data33',
  },
  {
    1: 'data31',
    2: 'data32',
    3: 'data33',
  },
];

function object2(obj) {
  // через вложенный цикл

  // for (let el of obj) {
  //   for (let i in el) {
  //     console.log(el[i]);
  //   }
  // }

  // через один цикл
  for (let el of obj) {
    console.log(el['1'] + ' ' + el['2'] + ' ' + el['3']);
  }
}
// object2(data2);

// Выведите на экран данные каждого работника в формате имя - зарплата.
let employees = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];

function object3(obj) {
  // for (let el of obj) {
  //   console.log(`Имя: ${el.name}. Зарплата ${el.salary}`);
  // }
  // object3(employees);

  // Выведите на экран сумму зарплат всех работников.
  let sum = 0;
  for (let el of obj) {
    sum += el.salary;
  }
  return sum;
}
console.log(object3(employees));

// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
function object4() {
  let employees = [
    {
      name: 'name1',
      salary: 300,
      age: 28,
    },
    {
      name: 'name2',
      salary: 400,
      age: 29,
    },
    {
      name: 'name3',
      salary: 500,
      age: 30,
    },
    {
      name: 'name4',
      salary: 600,
      age: 31,
    },
    {
      name: 'name5',
      salary: 700,
      age: 32,
    },
  ];

  let sum = 0;

  for (let el of employees) {
    el.age >= 30 ? (sum += el.salary) : false;
  }
  return sum;
}
console.log(`Общая зарплата работников 30 лет и старше:`, object4());

// Выведите на экран название месяца, соответствующее значениям переменных lang и month.
let months = {
  ru: [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ],
  en: [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ],
};

let lang = 'ru';
let month = 5; // число от 0 до 11

function object5(obj, prop, value) {
  console.log(obj[prop][value]);
}
object5(months, lang, month);

// Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
let affairs = {
  2018: {
    11: {
      29: ['дело111', 'дело112', 'дело113'],
      30: ['дело121', 'дело122', 'дело123'],
    },
    12: {
      30: ['дело211', 'дело212', 'дело213'],
      31: ['дело221', 'дело222', 'дело223'],
    },
  },
  2019: {
    12: {
      29: ['дело311', 'дело312', 'дело313'],
      30: ['дело321', 'дело322', 'дело323'],
      31: ['дело331', 'дело332', 'дело333'],
    },
  },
};

let year = 2019;
let month2 = 12;
let day = 31;

function object6(obj, year, month, day) {
  console.log(obj[year][month][day]);
}

object6(affairs, year, month2, day);

// Добавьте еще одно дело в дату '2019-12-29'.
let affairs2 = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

function object7(obj) {
  obj['2019-12-29'].push('data24', 'data25');
  return obj;
}
console.log(object7(affairs2));

//
let students = {
  group1: {
    subgroup11: ['student111', 'student112', 'student113'],
    subgroup12: ['student121', 'student122', 'student123'],
  },
  group2: {
    subgroup21: ['student211', 'student212', 'student213'],
    subgroup22: ['student221', 'student222', 'student223'],
  },
  group3: {
    subgroup31: ['student311', 'student312', 'student313'],
    subgroup32: ['student321', 'student322', 'student323'],
  },
};

function object8(obj) {
  // Добавьте нового студента в подгруппу 'subgroup11'.
  obj.group1.subgroup11.push('student114');

  // Добавьте в первую группу еще одну подгруппу.
  obj.group1.subgroup13 = [];

  // Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
  obj.group4 = {};
  obj.group4.subgroup41 = [];
  obj.group4.subgroup41.push('student411', 'student412');

  return obj;
}
console.log(object8(students));

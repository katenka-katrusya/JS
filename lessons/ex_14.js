'use strict';

// 1. Напишите код, который будет проверять число на то, простое оно или нет.
// Простое число делится только на единицу и на само себя, и не делится на другие числа.
function primeNumb(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return 'Составное число';
      }
    }
    return 'Простое число';
  } else {
    return 'Число должно быть больше 1';
  }
}

// console.log(primeNumb(10));

// 2. Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
let array = [10, 20, 30, 40, 21, 32, 51];

let selection = (arr) => {
  let sum = 0;
  for (let el of arr) {
    let strElement = String(el);
    // console.log(strElement);
    if (strElement[0] === '1' || strElement[0] === '2') {
      /* сравнение со строкой при строгом сравнении */
      /* если сравнивать с цифрой, то использовать НЕстрогое сравнение */
      sum += +strElement;
    }
  }
  return sum;
};
console.log(selection(array));

// 3. перебрать массив с двухзначными числами и найти числа, у которых первая цифра на один больше второй, найти их сумму
let arr2 = ['21', '32', '34', '43', '45', '54', '55'];
let sum = 0;

for (let elem of arr2) {
  if (+elem[0] === +elem[1] + 1) {
    sum += +elem;
  }
}

console.log(sum);

// 4.
let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum2 = 0;

for (let elem in obj) {
  obj[elem] = String(obj[elem]);
  // console.log(obj[elem]);     /* для просмотра промеж. рез-та */
  if (obj[elem][0] === '1' || obj[elem][0] === '2') {
    // console.log(obj[elem]);  /* для просмотра промеж. рез-та */
    sum2 += +obj[elem];
  }
}

console.log(sum2);

// 5. Дан массив с числами. Найдите среднее арифметическое его элементов.
function average(arr) {
  let sum = 0;
  let res = 0;
  for (let el of arr) {
    sum += el;
    res = sum / arr.length;
  }
  return res;
}
console.log(average(array));

// 6.
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 7. Дан массив с числами. Выведите элементы этого массива в обратном порядке.
function array1(arr) {
  for (let i = arr.at(-1); i >= 0; i--) {
    console.log(arr[i]);
  }
}
// array1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 8. Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
let numbersArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    document.write(`${arr[i]} <br>`);
  }
};
// numbersArray(array);

// 9. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let days = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

let daysArray = (arr) => {
  for (let el of arr) {
    el === 'Суббота' || el === 'Воскресенье'
      ? document.write(`<b>${el}<b/><br>`)
      : document.write(`${el}<br>`);
  }
};
// daysArray(days);

// 10. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let dayAll = new Date();
// console.log(dayAll);
let day = dayAll.getDay();
// console.log(day);
function daysArray2(arr) {
  /* используем массив дней недели выше */
  for (let el of arr) {
    /* сравниваем элемент массива === и связываем массив с днями и текущий день (0 - пн, 1 - вт и тд). 
    При связывании с массивом, дни начинаются тоже с нуля, т.е. БЕЗ массива 1 - это пн, а не 0. 
    Поэтому возвращаемся в массиве с днями на предыдущий элемент arr[day - 1] и тогда 1 - пн, 2 - вт и тд. */
    el === arr[day - 1]
      ? document.write(`<i>${el}</i><br>`)
      : document.write(`${el}<br>`);
  }
}
daysArray2(days);

// 11. Увеличьте зарплату каждого работника на 10%.
let salary = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

let salaryPercent = (obj, percent) => {
  let res = 0;
  for (let key in obj) {
    res = (obj[key] / 100) * percent; /* находим процент (в примере 10%) */
    obj[key] += res;
  }
  return obj;
};
console.log(salaryPercent(salary, 10));

// 12. С помощью этих массивов создайте новый объект,
// сделав его ключами элементы первого массива, а значениями - элементы второго.
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [6, 7, 8, 9, 10];
let newObject = {};

function object4(arr1, arr2, newObj) {
  for (let i = 0; i < arr1.length; i++) {
    //
    newObj[arr1[i]] = arr2[i];
  }
  return newObj;
}
console.log(object4(arr3, arr4, newObject));

// 13. Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj5 = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };

function object5(obj) {
  let sumKeys = 0;
  let sumValues = 0;
  let res = 0;

  for (let key in obj) {
    sumKeys += +key;
    // console.log(`сумма ключей: ${sumKeys}`);
    sumValues += +obj[key];
    // console.log(`сумма значений: ${sumValues}`);
    res = sumKeys / sumValues;
  }
  return res;
}
console.log(object5(obj5));

// 14. Запишите ключи этого объекта в один массив, а значения - в другой.
let obj6 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

function arrays(obj) {
  let keys = [];
  let values = [];

  for (let i in obj) {
    keys.push(i);
    values.push(obj[i]);
  }
  // возвращаем два массива. П.С. для вывода двух значений, используюся []
  return [console.log(keys), console.log(values)];
}
arrays(obj6);

// 15. Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
let obj7 = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};
let newArr12 = [];

function arr12(obj) {
  for (let key in obj) {
    obj[key] = String(obj[key]);
    if (obj[key][0] === '1' || obj[key][0] === '2') {
      newArr12.push(+obj[key]);
    }
  }
  return newArr12;
}
console.log(arr12(obj7));

// 16. Создайте из массива следующий объект: {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
let arr10 = ['a', 'b', 'c', 'd', 'e'];
let obj10 = {};

let arr13 = (arr, obj) => {
  for (let i = 0; i < arr.length; i++) {
    let key = i + 1;
    let value = arr[i];
    obj[key] = value;
  }
  return obj;
};
console.log(arr13(arr10, obj10));

// 17. Создайте из массива следующий объект: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
function obj13(arr) {
  let obj = {};
  for (let i in arr) {
    let key = arr[i];
    let value = +i + 1;

    obj[key] = value;
  }
  return obj;
}
console.log(obj13(arr10));

'use strict';

// 1. Заполните массив целыми числами от 1 до 10.
function array() {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
  console.log(arr);
}

// array();

// 2. Заполните массив четными числами из промежутка от 1 до 100.
let arr = [];

function array1(arr) {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

// console.log(array1(arr));

// 3. Дан массив с дробями. Округлите эти дроби до одного знака в дробной части.
let fractions = [1.456, 2.125, 3.32, 4.1, 5.34];

let array2 = (arr) => {
  let result = []; /* объявляем новый пустой массив, куда всё сложим */
  for (let el of arr) {
    let res = +el.toFixed(1); /* складываем в переменную округленные элементы */
    result.push(res); /* пушим в пустой массив округленные элементы */
  }
  console.log(result);
};
// array2(fractions);

// допы. Код должен вывести первую цифру числа:
let num = 123;
console.log(String(num)[0]);

// количество цифр в числе
console.log(String(num).length);

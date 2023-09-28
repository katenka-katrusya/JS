'use strict';

//
let num = 500;

while (num > 10) {
  num = num / 2;
  console.log(num);
}

// console.log(num);

// 2. Выведите в консоль числа от 1 до 100.
let i = 0;
while (i < 100) {
  i++;
  // console.log(i);

  // если мы меняем log и i++, то сначала будт выводиться указанное число (в примере это 0) и закончится 99
  // тогда придётся писать i = 0, а в условии (i <= 100)
  // console.log(i);
  // i++;
}

// 3. Выведите в консоль числа от 11 до 33.
let n = 11;
while (n <= 33) {
  // console.log(n);
  n++;
}

// 4. Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций, необходимых для этого.
let cycle = () => {
  let num = 20;
  let count = 0;
  while (num < 1000) {
    num *= 3;
    count++;
    console.log(num);
  }
  return console.log(`Количество проделанных итераций: ${count}`);
};
// cycle();

// 5. С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
let cecleFor = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
      console.log(i);
    }
  }
};
// cecleFor();

// 5. Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего
let arr = ['a', 'b', 'c', 'd', 'e'];

let cecleFor2 = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
  }
};
// cecleFor2(arr);

// 6. Выведите в консоль элементы следующего массива в обратном порядке
let cecleFor2Reverse = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};
// cecleFor2Reverse(arr);

// 7. Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

let cecleObj = (object) => {
  for (let key in object) {
    if (object[key] % 2 !== 0) {
      console.log(object[key]);
    }
  }
};
cecleObj(obj);

// 8. Найдите сумму четных чисел от 2 до 100.
let cecle2 = () => {
  let res = 0;
  for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
      res += i;
    }
  }
  return res;
};
console.log(cecle2());

// 9. Найдите произведение целых чисел от 1 до 20.
let multi = () => {
  let mul = 1;
  for (let i = 1; i <= 20; i++) {
    mul *= i;
  }
  return mul;
};
console.log(multi());

// 10. С помощью цикла сформируйте строку '987654321'.
let cecle3 = () => {
  let str = '';
  for (let i = 9; i > 0; i--) {
    str += i;
  }
  return str;
};
console.log(cecle3());

// 11. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let cecle4 = () => {
  let str = '';
  for (let i = 1; i < 10; i++) {
    str += `-${i}`;
  }
  return `${str}-`;
};
console.log(cecle4());

// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
let cecle5 = () => {
  let sum = 0;
  for (let i = 10; i < 1000; i++) {
    let str = String(i);
    // console.log(str[0]);

    // выведите в консоль сумму первой и второй цифры каждого числа.
    sum = +str[0] + +str[1];
    // console.log(sum);

    // Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
    if (sum === 5) {
      console.log(i);
    }
  }
};
// cecle5();

// 12. Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор,
// пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
let cecle6 = (arr) => {
  for (let el of arr) {
    console.log(el);
    if (el === 0) {
      break;
    }
  }
};
// cecle6([2, 5, 1, 0, 3, 5]);

// 13. Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
let cecle7 = () => {
  let i = 0;
  let arr = [2, 5, -1, 0, 3, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] < 0) {
      break;
    }
  }
};
cecle7();

// 14. Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
let cecle8 = (arr) => {
  for (let el in arr) {
    if (arr[el] === 3) {
      return console.log(`Элемент 3 находится под индесом ${el}`);
    }
  }
};
let array = [2, 5, 3, -1, 0, 3, 5];
cecle8(array);

// 15. С помощью двух вложенных циклов выведите на экран следующую строку:
// 111222333444555666777888999
let cecleTwo = () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 4; j++) {
      document.write(i);
    }
  }
};
// cecleTwo();

// 11 12 13 21 22 23 31 32 33
let cecleTwo2 = () => {
  //   for (let i = 1; i <= 3; i++) {
  //     for (let j = 1; j <= 3; j++) {
  //       document.write(' ' + i + j + ' ');
  //     }
  //   }
  // };

  // 2 способ
  for (let i = 10; i <= 30; i += 10) {
    let num;
    for (let j = 1; j <= 3; j++) {
      num = i + j;
      document.write(num + ' ');
    }
  }
};
cecleTwo2();

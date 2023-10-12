'use strict';

// Задание #1
// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true,
// если оно простое, иначе — false.
// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.

function isPrimeNumber(num) {
  // for (let i = 2; i < num; i++) {
  //   if (num % i === 0) return 'Число составное';
  // }
  // return 'Число простое';

  for (let i = 2; i < num; i++) {
    return num % i === 0 ? false : true;
  }
}
console.log(isPrimeNumber(19));

// Задание #2
// Напишите функцию func(), которая принимает num, min, max:
// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2
// Иначе возвращает округленное вниз значение num.

function func(num, min, max) {
  if (num < min) return min ** 2;
  else if (num > max) return max ** 2;
  else if (num < max - (max - min) / 2) return num ** 2;
  else return Math.floor(num);
}

console.log(func(8.5, 1, 10));
console.log('==================');

// Задание #3
// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры
// и возвращает true, если число является совершенным, и false в противном случае.
// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа).
// Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.

function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num ? true : false;
}
console.log(isPerfectNumber(6));

// Задание #4
// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition).
// Возвращает она цифру числа number, находящуюся на позиции digitPosition.
// Если происходит попытка чтения числа на позиции, которой не существует
// (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.

// Примечание. Нельзя использовать приведение числа к строке.

function getNumberDigit(number, digitPosition) {
  const digits = [];

  while (number >= 1) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }
  return digits[digits.length - digitPosition - 1];
}
console.log(getNumberDigit(123, 2));

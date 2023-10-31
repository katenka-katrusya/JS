'use strict';

// 1. Выведите в консоль сумму результатов работы функций func1 и func2.
function func1() {
    return 3;
}

// console.log(func1());

let func2 = func1;

console.log(func1() + func2());

// Задачи с codewars
// 2.
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(i * x);
    }
    return z;
}

console.log(countBy(2, 5));

// 3.
function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('admin', 'admin'));

// 4.
function makeUpperCase(str) {
    return str.toUpperCase();
}

console.log(makeUpperCase('никита'));

// 5.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft <= distanceToPump;
};

console.log(zeroFuel(50, 25, 2));

// 6.
function areYouPlayingBanjo(name) {
    return name.toLowerCase().startsWith('r')
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Robert'));
console.log(areYouPlayingBanjo('Mary'));
console.log(areYouPlayingBanjo('rolf'));

// 7. Sum Numbers
function sum(numbers) {
    'use strict';

    if (numbers.length > 0) {
        let sum = 0;

        for (let el of numbers) {
            sum += el;
        }
        return sum;
    } else return 0;
}

console.log(sum([1, 5.2, 4, 0, -1]));

// 8.

function countSheeps(arrayOfSheeps) {
    // let count = 0;

    // for (let sheep of arrayOfSheeps) {
    //   if (sheep === true) {
    //     count++;
    //   }
    // }
    // return count;

    // в одну строчку с помощью фильтра
    return arrayOfSheeps.filter(Boolean).length;
}

console.log(
    countSheeps([
        true, true, true, false, true, true, true, true, true, false, true, false,
        true, false, false, true, true, true, true, true, false, false, true, true,
    ])
);

// 9.
function booleanToString(b) {
    return b.toString();
}

console.log(booleanToString(false));

// 10.
function repeatStr(n, s) {
    return s.repeat(n);
}

console.log(repeatStr(6, 'I'));

// 11.
function maps(array) {
    return array.map((el) => el * 2);
}

console.log(maps([1, 2, 3]));

// 12.
function printError(str) {
    // от a до m - хорошая работа принтера, используем регулярное выражение
    let regex = /[^a-m]+/g;
    let error = str.match(regex) ? str.match(regex).join('').length : 0;
    return `${error}/${str.length}`;
}

console.log(printError('aaaxbbbbyyhwawiwjjjwwm'));

// 13.
let calculator = (function () {
    let data = {number: 0};

    return {
        sum: function (n) {
            data.number += n;
        },
        subtract: function (n) {
            data.number -= n;
        },
        display: function () {
            console.log('Result: ', data.number);
        },
    };
})();
calculator.sum(10);
calculator.sum(3);
calculator.display(); // Result: 13
calculator.subtract(4);
calculator.display(); // Result: 9

// 14.

function accum(str) {
    // let arr = str.split('');
    // let newString = '';

    // for (let i = 0; i < arr.length; i++) {
    //   let firstLetterToUpperCase = arr[i].toUpperCase();
    //   newString += firstLetterToUpperCase + arr[i].toLowerCase().repeat(i) + '-';
    // }
    // return newString.slice(0, -1);

    // В ОДНУ СТРОЧКУ
    return str
        .split('')
        .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
        .join('-');
}

console.log(accum('RqaEzty'));

// 15. Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year / 100);
}

console.log(century(2000));

// 16. Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

var isSquare = (number) => Number.isInteger(Math.sqrt(number));

console.log(isSquare(25));

// 17. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

let validatePIN = (pin) => {
    let numbers = pin.trim().length;
    return numbers === 4 || numbers === 6 ? /^[0-9]+$/.test(pin) : false;
};

console.log(validatePIN('1234'));

// 18. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

let paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);
console.log(paperwork(-5, 5));

// 19. You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

// Note: Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    // let sum = 0;
    // classPoints.push(yourPoints);
    // for (let el of classPoints) {
    //   sum += el;
    // }
    // return yourPoints > sum / classPoints.length ? true : false;

    // В ОДНУ СТРОЧКУ
    return (
        yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
    );
}

console.log(betterThanAverage([2, 5, 5, 4, 3, 3, 5, 5, 5, 4, 5], 5));

// 20. Simple, given a string of words, return the length of the shortest word(s).

let findShort = (str) => Math.min(...str.split(' ').map((word) => word.length));

console.log(findShort('Your points are not included in'));

// 21. You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let sum = 0;
//     for (let el of arr) {
//         el > 0 ? sum += el : 0;
//     }
//     return sum;
// }

// В ОДНУ СТРОКУ с помощью только reduce
// let positiveSum = (arr) => arr.reduce((sum, item) => item > 0 ? sum += item : sum, 0);

// с помощью filter и reduce
let positiveSum = (arr) => arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
console.log(positiveSum([22, -63, 86, 4, -82, -36, -60, -11, 30, 27, 18, -48, -83, 27, -78, -42, 22, -44, -26, -54, 34, -18, -58, 89, 29, 2, 29, 55, 66, -87, -19, 51, -69, 0, -6, 33, 2, 42, 70, -63, -92, -90, -88, -50, -86, 59, -21, 46, 39, 0, -18, -20, 99, 17, -32, 84, -68, -40, 86, 65, 3, -66, 3, -88, -19, -26, 49, -68, -91, -45, 77, -28, 81, -100, -45, -17, -27, -67, 15, -13, 47, 78, -78, -95, -85, 76, -83, -15, 61, 55, -68, 54, 69, 31, -27, -56, -95, -23, 13, -26, 92, -59, -18, -73]));

'use strict';

let obj = [
    {
        color: 'red',
        phone: [89201771211, 89006745600],
        checked: true,
    },
    {
        color: 'green',
        phone: [89505564545, 89334561101],
        checked: false,
    },
    {
        color: 'blue',
        phone: [88001220909, 89056000677],
        checked: true,
    }
];

//
let revers = (num) => {
    num += '';
    let res = '';

    for (let i = num.length - 1; i >= 0; i--) {
        res += num[i];
    }
    return +res;
};
console.log(revers(54321));

//

function countPositivesSumNegatives(input) {
    let countPositive = 0;
    let sumNegative = 0;

    if (input == null || input.length == 0) return [];

    input.forEach((elem) => elem > 0 ? countPositive++ : sumNegative += elem);
    return [countPositive, sumNegative];
}

console.log(countPositivesSumNegatives([-31]));

// Удалить пробелы
// let noSpace = (x) => x.split(' ').filter(el => el.length > 0).join('');

let noSpace = (x) => x.replaceAll(' ', '');  // код с кодварса
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
    // В ОДНУ СТРОКУ
    return x.split('').map(n => n < 5 ? 0 : 1).join('');

    // let newStr = '';
    //
    // for (let item of x) {
    //     item < '5' ? newStr += '0' : newStr += '1';
    // }
    // return newStr;
}

console.log(fakeBin('456789'));


// ФАКТОРИАЛ РЕКУРСИЯ
function calcFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * calcFactorial(n - 1);
}

console.log(calcFactorial(5));


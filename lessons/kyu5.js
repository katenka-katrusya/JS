'use strict';

// 1. Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation
// marks untouched.

let pigIt = (str) => str.split(' ').map(item => item.match(/[a-z]+/gi) ? item.slice(1) + item[0] + 'ay' : item).join(' ');

// console.log(pigIt('Pig latin is cool !'));

// 2. This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(operation) {
    return operation ? operation(0) : 0;
}

function one(operation) {
    return operation ? operation(1) : 1;
}

function two(operation) {
    return operation ? operation(2) : 2;
}

function three(operation) {
    return operation ? operation(3) : 3;
}

function four(operation) {
    return operation ? operation(4) : 4;
}

function five(operation) {
    return operation ? operation(5) : 5;
}

function six(operation) {
    return operation ? operation(6) : 6;
}

function seven(operation) {
    return operation ? operation(7) : 7;
}

function eight(operation) {
    return operation ? operation(8) : 8;
}

function nine(operation) {
    return operation ? operation(9) : 9;
}

// --- operation
function times(x) {
    return function (y) {
        return x * y;
    };
}

function plus(x) {
    return function (y) {
        return x + y;
    };
}

function minus(x) {
    return function (y) {
        return y - x;
    };
}

function dividedBy(x) {
    return function (y) {
        return Math.floor(y / x);
    };
}

console.log(six(dividedBy(two())));
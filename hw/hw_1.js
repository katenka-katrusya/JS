// Задача 1. Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка;
// x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками.
// Выведите результат с помощью console.log. Напомним, что площадь прямоугольника — это произведение ширины и высоты.

let x1 = 10;
let x2 = 2;
let y1 = 5;
let y2 = 3;

let square = Math.abs((x1 - x2) * (y1 - y2));

console.log("1. Площадь прямоугольника =", square);

// Задача 2. Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.

let a = 13.123456789;
let b = 2.123;
let n = 5;

let aNorm = Math.floor((a % 1) * Math.pow(10, n));
let bNorm = Math.floor((b % 1) * Math.pow(10, n));

console.log("2. Остатки от деления a =", aNorm, "b =", bNorm);

console.log("Число a больше b:", aNorm > bNorm);
console.log("Число a меньше b:", aNorm < bNorm);
console.log("Число a больше или равно b:", aNorm >= bNorm);
console.log("Число a меньше или равно b:", aNorm <= bNorm);
console.log("Числа a и b равны:", aNorm === bNorm);
console.log("Число a и b не равны:", aNorm !== bNorm);

// Задача 3. Напишите генератор двух случайных чисел в диапазоне между n и m включительно. Учтите, что n и m могут быть отрицательными,
// а также может быть n > m или n < m. Выведите два произвольных числа в консоль с помощью console.log.
// Сравните два полученных числа. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

let k = 2;
let m = 5;

// кол-во цифр, которые могут быть сгенерированы
let range = Math.abs(m - k);
console.log("3. Кол-во сгенерированных чисел =", range);

let min = Math.min(k, m);
num1Random = Math.round(Math.random() * range) + min;
num2Random = Math.round(Math.random() * range) + min;

console.log("1 число =", num1Random, "2 число =", num2Random);

console.log("Первое число больше второго", num1Random > num2Random);
console.log("Первое число меньше второго", num1Random < num2Random);
console.log("Первое число больше или равно второму", num1Random >= num2Random);
console.log("Первое число меньше или равно второму", num1Random <= num2Random);
console.log("Числа равны", num1Random === num2Random);
console.log("Числа не равны", num1Random !== num2Random);

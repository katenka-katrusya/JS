'use strict';

let recipeMap = new Map([
  ['огурец', 500],
  ['помидор', 350],
  ['лук', 50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}
console.log('========================');

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}
console.log('========================');

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key) => {
  console.log(`${key}: ${value}`); // огурец: 500 и так далее
});

console.log('========================');

let obj = {
  name: 'John',
  age: 30,
};

let map = new Map(Object.entries(obj));
console.log(map);
console.log(map.get('name')); // John

console.log('========================');

function mapExample() {
  let map = new Map();
  map.set('banana', 1);
  map.set('orange', 2);
  map.set('meat', 4);

  let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
  return obj;
}
console.log(mapExample());

console.log('========================');

// 1. Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
function unique(arr) {
  let set = new Set(arr); /* создаём уник. значения с помощью Set */
  let array = [...set]; /* превращаем коллекцию Set в массив */
  return array;
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values));

// 2. Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));

// 3. Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

function mapExample2() {
  let map = new Map();

  map.set('name', 'John'); /* добавляем пару ключ: значение */
  map.set('country', 'Russian');

  let keys = map.keys(); /* объявляем переменную, в которой будут ключи */
  keys = [...keys]; /* эти ключи переводим в массив */
  keys.push('more'); /* можем пушить */

  return console.log(keys);
}
mapExample2();

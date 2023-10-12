'use strict';

let computer = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  coreCount: 8,
  cpuManufacturrer: 'AMD',
  socket: 'AM4',
  videoCardModel: 'NVidia GerForce GTX 1060',
  videoMemory: 4096,
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
  price: 10000,
};

// console.log(Object.keys(computer));
// console.log(Object.values(computer));
// console.log(Object.entries(computer));

// СПОСОБЫ прохода по объекту:

// для удобства объект переводим в массив:
let keys = Object.keys(computer);
let values = Object.values(computer);
let entries = Object.entries(computer);

for (let key of keys) {
  console.log(`${key}: ${computer[key]}`); /* выводим ключ и значение */
}

for (let value of values) {
  console.log(value);
}

for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

// так же, но более читаемо:
for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// Все эти св-ва можно применить и просто к массиву, т.е. можно использовать это:
// Object.keys(computer);
// Object.values(computer);
// Object.entries(computer);
// Ключом будет индекс в виде строки. Массив является объектом.

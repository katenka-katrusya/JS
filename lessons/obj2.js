'use strict';

let motherBoard = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let cpu = {
  coreCount: 8,
  cpuManufacturrer: 'AMD',
  socket: 'AM4',
};

let videoCard = {
  videoCardModel: 'NVidia GerForce GTX 1060',
  videoMemory: 4096,
};

let ram = {
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
};

let computer = {
  price: 10000,
  ...motherBoard,
  // св-во socket из щбъекта motherBoard будет заменено на такое же из объекта cpu
  ...cpu,
  ...videoCard,
  ...ram,
};

// АЛЬТЕРНАТИВНЫЙ способ смешевания объектов между собой:

let computerWithAssign = Object.assign(
  // целевой объект, в кот. будут "замешаны" слудующие
  {
    price: 10000,
  },
  // объекты, "подмешиваемые" в первый
  motherBoard,
  cpu,
  videoCard,
  ram
);

// ОБА варианта будут иметь одинаковое содержимое

console.log(computer);
console.log(computerWithAssign);

'user strict';

// 1. Создайте объект calculator (калькулятор) с тремя методами:

/* read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. */

let calculator = {
  read() {
    this.num1 = +prompt('Введите первое число:', '2');
    this.num2 = +prompt('Введите второе число:', '4');
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  },
};
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// 2. У нас есть объект ladder (лестница), который позволяет подниматься и спускаться.
// Теперь, если нам нужно выполнить несколько последовательных вызовов.
/* ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0 */
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep().down().showStep();

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();

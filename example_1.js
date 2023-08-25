/*
Вычисляем количество квартир в доме.
Дано количество подъездов, этажей и квартир на одном этаже.
Нужно вывести количество квартир в одном подъезде и во всём доме.
*/

// кол-во подъездов
let entrances = 4;
// кол-во этажей
let floors = 9;
// кол-во квартир на этаже
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log("Квартир в подъезде", flatsPerEntrance);

let flats = entrances * flatsPerEntrance;
console.log("Всего квартир в доме", flats);

/*
Пропорции для рецепта Кровавой Мэри.
Даны пропорции ингредиентов для Кровавой Мэри и объём напитка, который
нужно получить. Вычислить необходимый объём ингредиентов из этих данных.
*/

// ингредиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

// желаемый объём напитка
let volume = 500;

// коэффициент для получения объёма ингредиента
let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

// сколько нужно водки для желаемого объёма Кровавой Мэри
console.log(vodka * k);

/*
Вычисление дискриминанта и решения квадратного уравнения
a*x*x + b*x + c = 0
Даны параметры a, b и c для квадратного уравнения.
Нужно вывести возможные значения x этого уравнения.
*/

let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

// корень дискриминанта
let dRoot = Math.sqrt(d);
console.log("x1 = ", (-b + dRoot) / (2 * a));
console.log("x2 = ", (-b - dRoot) / (2 * a));

/*
Вычисляем n чисел ряда Фибоначчи.
Каждое следующее число - сумма двух предыдущих.
*/

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log(current);
}

// 1. Сделай функцию, которая принимает массив любых целых чисел,
// которая возращает истину, если все элементы четные,
// если бы хотя бы один элемент не четный, то false.

let array = [2, 4, 4, 18, 4];

function even(arr) {
  let result = arr.filter((el) => el % 2 === 0);
  return console.log(result.length === arr.length ? true : false);

  // result.length === arr.length
  //   ? console.log('Все элементы чётные')
  //   : console.log('Есть нечётный элемент');
}
even(array);

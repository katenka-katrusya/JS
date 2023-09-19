// Исправьте код так, что бы в консоле не было ошибок и в документ браузера выводился верный результат. А именно список товаров с нумерацией, весом и общим весом всех товаров.

document.write('<h1>Список товаров</h1>');

document.write('<ul>');

let index = 0;
let weight = 0;
let totalWeight = 0;

// Товар
function productList(weight) {
  weight = +prompt(`Введите вес товара ${index}`);
  totalWeight += weight;
  index++;

  document.write(`
    <li>
      Товар ${index}, вес: <strong>${weight}</strong> кг
    </li>`);
  return weight;
}

document.write('</ul>');
console.log(productList(weight));
console.log(productList(weight));
console.log(productList(weight));

let round = +(totalWeight / index).toFixed(2);

document.write('<hr>');
document.write(`<p>Общий вес товаров: ${round} кг</p>`);

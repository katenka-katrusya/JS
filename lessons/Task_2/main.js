// Сделайте программу вывода рецепта приготовления пельменей короче:

// Используйте более короткий способ вывода, объединив несколько команд document.write() в одну

// Определите повторяющийся фрагмент кода и создайте для этого фрагмента отдельную функцию с параметрами (аргументами). Вызывайте функцию с параметрами в нужной части программы.

document.write('<div class="container">');
document.write('<h1 class="main-title">Приготовление пельменей</h1>');

let index = 0; // Счетчик этапов

document.write('<ul class="list">');

function instructions(text, className = 'list__item') {
  index++;
  document.write(`<li 
    class="list__item ${className}">
    <span class="list__index">${index}</span>
    <p class="list__text">${text}</p>
    </li>`);
}

console.log(instructions('Налейте в кастрюлю воду'));
console.log(instructions('Достаньте из холодильника пельмени'));
console.log(
  instructions(
    'Забросьте пельмени в горячую воду. ОСТОРОЖНО, НЕ ОБОЖГИТЕСЬ!',
    'list__item_warning'
  )
);
console.log(instructions('Посолите и поперчите по вкусу'));
console.log(instructions('Ждите готовности'));
console.log(instructions('Приятного аппетита!', 'list__item_finish'));

document.write('</ul>');
document.write('</div>');

// // Этап 1
// index++;
// let text1 = 'Налейте в кастрюлю воду';
// let className1 = '';
// document.write(`<li class="list__item ${className1}">`);
// document.write(`<span class="list__index">${index}</span>`);
// document.write(`<p class="list__text">${text1}</p> `);
// document.write(`</li>`);

// // Этап 2
// index++;
// let text2 = 'Достаньте из холодильника пельмени';
// let className2 = '';
// document.write(`<li class="list__item ${className2}">`);
// document.write(`<span class="list__index">${index}</span>`);
// document.write(`<p class="list__text">${text2}</p> `);
// document.write(`</li>`);

// // Этап 3
// index++;
// let text3 = 'Забросьте пельмени в горячую воду. ОСТОРОЖНО, НЕ ОБОЖГИТЕСЬ!';
// let className3 = 'list__item_warning';
// document.write(`<li class="list__item ${className3}">`);
// document.write(`<span class="list__index">${index}</span>`);
// document.write(`<p class="list__text">${text3}</p> `);
// document.write(`</li>`);

// // Этап 4
// index++;
// let text4 = 'Посолите и поперчите по вкусу';
// let className4 = '';
// document.write(`<li class="list__item ${className4}">`);
// document.write(`<span class="list__index">${index}</span>`);
// document.write(`<p class="list__text">${text4}</p> `);
// document.write(`</li>`);

// // Этап 5
// index++;
// let text5 = 'Ждите готовности';
// let className5 = '';
// document.write(`<li class="list__item ${className5}">`);
// document.write(`<span class="list__index">${index}</span>`);
// document.write(`<p class="list__text">${text5}</p> `);
// document.write(`</li>`);

// // Этап 6
// index++;
// let text6 = 'Приятного аппетита!';
// let className6 = 'list__item_finish';
// document.write(`<li class="list__item ${className6}">`);
// document.write(`<span class="list__index">${index}</span>`);
// document.write(`<p class="list__text">${text6}</p> `);
// document.write(`</li>`);

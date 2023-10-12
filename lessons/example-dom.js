'use strict';

// let elem = document.querySelector('.elem');
// console.log(elem); // здесь будет первый инпут

// 1. Получите ссылку на первый абзац из дива с id, равным block/с классом block.

let elem = document.querySelector('.block p'); /* #block - для id */
console.log(elem);

// 2. Получите ссылку на первый абзац с классом www.
let elemText = document.querySelector('.www');
console.log(elemText);

// 3. Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', function () {
  console.log(1);
});

button2.addEventListener('click', function () {
  console.log(2);
});

button3.addEventListener('click', function () {
  console.log(3);
});

// Давайте, например, привяжем к одному элементу реакцию на наведение курсора и реакцию на уход:
button3.addEventListener('mouseover', function () {
  console.log('1');
});
button3.addEventListener('mouseout', function () {
  console.log('2');
});

// 4. Привяжите все эти функции к нашему абзацу.

function func1() {
  console.log('1');
}

function func2() {
  console.log('2');
}

function func3() {
  console.log('3');
}

// берём переменную выше elemText
elemText.addEventListener('click', func1);
elemText.addEventListener('click', func2);
elemText.addEventListener('click', func3);

// 5. Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
let btn = document.querySelector('.btn');

btn.addEventListener('dblclick', () => alert('Hello!'));

// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
btn.addEventListener('mouseover', () => console.log('я пришёл'));

// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.
btn.addEventListener('mouseout', () => console.log('я ушёл'));

// 6. Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.

let btn2 = document.querySelector('.btn2');
let text = document.querySelector('.text');

btn2.addEventListener('click', () => console.log(text.textContent));

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
btn2.addEventListener('click', () =>
  console.log((text.textContent = 'Этот текст изменён'))
);

// 7. Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка.
// По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// п.с. как с одинаковым классом это сделать так и не поняла

let text2 = document.querySelector('.text2').textContent;
let text3 = document.querySelector('.text3').textContent;
let btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
  let sum = 0;
  let numbers = text2.split(',');
  let numbers2 = text3.split(',');
  let res = [...numbers, ...numbers2];

  for (let el of res) {
    sum += +el;
  }
  console.log(sum);
});

// 8. Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.

let num1 = document.querySelector('.num1').textContent;
let num2 = document.querySelector('.num2').textContent;
let num3 = document.querySelector('.num3').textContent;
let summa = document.querySelector('.summa');
let btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', () => {
  let [one, two, three] = [num1.split(','), num2.split(','), num3.split(',')];
  // console.log(one, two, three);

  let arrayAll = [...one, ...two, ...three];
  let sum = 0;

  for (let el of arrayAll) {
    sum += +el;
  }
  console.log((summa.textContent = sum));
});

// 9. Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

let count = document.querySelector('.count');
let btn5 = document.querySelector('.btn5');

// btn5.addEventListener('click', () => +count.textContent++);

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
btn5.addEventListener(
  'click',
  () => (count.textContent = count.textContent + '!')
);

// 10. Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.

let text6 = document.querySelector('.text6');
let btn6 = document.querySelector('.btn6');

btn6.addEventListener('click', () =>
  console.log((text6.innerHTML = '<i>Здесь теперь курсив</i>'))
);

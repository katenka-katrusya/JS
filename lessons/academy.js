/* Техническое задание

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/

let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;
let best = 0;

for (let i = 0; i < attempts.length; i++) {
    let maxValue = attempts[i];
    let maxIndex = i;

    for (let j = i + 1; j < attempts.length; j++) {
        if (attempts[j] > maxValue) {
            maxValue = attempts[j];
            maxIndex = j;
        }
    }

    [attempts[i], attempts[maxIndex]] = [attempts[maxIndex], attempts[i]];
}

averageBest = (attempts[0] + attempts[1] + attempts[2]) / 3;

qualified = averageBest > qualificationDistance;

// расшифровать код
// Алфавит
let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение
let decodedMessage = '';

for (let i = 0; i < encodedSymbols.length; i++) {
    decodedMessage += symbols[encodedSymbols[i]];
}


/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

*/

let footballPlayers = [
    {name: 'Барсик', goals: 2, passes: 3},
    {name: 'Масик', goals: 3, passes: 7},
    {name: 'Персик', goals: 6, passes: 2}
];

let getStatistics = function (players) {

    let sum = 0;
    let percent = 0;
    let coefficient = 0;

    for (let i = 0; i < players.length; i++) {
        // высчитываем коэф
        coefficient = players[i].goals * 2 + players[i].passes;
        // записываем в массив с объектами: players[i] - достали объект, .coefficient = coefficient - записали новый ключ и новое значение
        players[i].coefficient = coefficient;

        // считаем сумму всех голов
        sum += players[i].goals;
    }

    for (let i = 0; i < players.length; i++) {
        // считаем процент от всех голов
        percent = Math.round((players[i].goals * 100) / sum);
        // добавляем в массив с объектами
        players[i].percent = percent;
    }
    return players;
};

getStatistics(footballPlayers);

// МАГАЗИН КОМПЬЮТЕРОВ
let processorPrice = {
    'i5': 5000,
    'i7': 10000
};

let displayPrice = {
    13: 5000,
    15: 10000
};

let memoryPrice = {
    8: 3000,
    16: 4000
};

let buildComputer = function (memory, display, processor) {
    let customComputer = {
        basicPrice: 5000,
        processor: processor,
        display: display,
        memory: memory,

        getDescription: function () {
            return 'компьютер с процессором ' + this.processor + ', диагональю ' + this.display + ', оперативной памятью ' + this.memory;
        },

        getPrice: function () {
            return this.basicPrice + processorPrice[this.processor] + displayPrice[this.display] + memoryPrice[this.memory];
        }
    };

    return customComputer;
};

let myComputer = buildComputer(8, 13, 'i7');
console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());

let anotherComputer = buildComputer(16, 15, 'i5');
console.log('В корзине ' + anotherComputer.getDescription() + ' стоимостью ' + anotherComputer.getPrice());

// конфигуратор дома
let materialPrice = {
    'wood': 1000,
    'stone': 1500,
    'brick': 2000
};

let house = {
    rooms: 10,
    floors: 5,
    material: 'wood',
    coefficient: 10.5,

    calculateSquare: function () {
        return this.rooms * this.coefficient * this.floors;
    },

    calculatePrice: function () {
        return this.calculateSquare() * materialPrice[this.material];
    }
};

//
var catalogData = [
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    },
    {
        isAvailable: true,
        isSpecial: true
    },
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    }
];

var updateCards = function (products) {
    var elements = document.querySelectorAll('.product');

    for (var i = 0; i < elements.length; i++) {

        var element = elements[i];
        var product = products[i];

        var availabilityClass = 'product--available';

        if (!product.isAvailable) {
            availabilityClass = 'product--unavailable';
        }

        element.classList.add(availabilityClass);

        if (product.isSpecial) {
            element.classList.add('product--special');
        }
    }
};

updateCards(catalogData);

/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
var cardsData = [
    {
        inStock: true,
        imgUrl: 'gllacy/choco.jpg',
        text: 'Сливочно-кофейное с кусочками шоколада',
        price: 310,
        isHit: true,
        specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
        inStock: false,
        imgUrl: 'gllacy/lemon.jpg',
        text: 'Сливочно-лимонное с карамельной присыпкой',
        price: 125,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cowberry.jpg',
        text: 'Сливочное с брусничным джемом',
        price: 170,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cookie.jpg',
        text: 'Сливочное с кусочками печенья',
        price: 250,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/creme-brulee.jpg',
        text: 'Сливочное крем-брюле',
        price: 190,
        isHit: false
    }
];

var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);

    if (text) {
        element.textContent = text;
    }
    return element;
};

var createCard = function (product) {
    var listItem = makeElement('li', 'good');

    var title = makeElement('h2', 'good__description', product.text);
    listItem.appendChild(title);

    var picture = makeElement('img', 'good__image');
    picture.src = product.imgUrl;
    picture.alt = product.text;
    listItem.appendChild(picture);

    var price = makeElement('p', 'good__price', product.price + '₽/кг');
    listItem.appendChild(price);

    var availabilityClass = 'good--available';
    if (!product.inStock) {
        availabilityClass = 'good--unavailable';
    }
    listItem.classList.add(availabilityClass);

    if (product.isHit) {
        listItem.classList.add('good--hit');
        var specialOffer = makeElement('p', 'good__special-offer', product.specialOffer);
        listItem.appendChild(specialOffer);
    }

    return listItem;
};

var renderCards = function (product) {
    var cardList = document.querySelector('.goods');

    for (var i = 0; i < product.length; i++) {
        var cardItem = createCard(product[i]);
        cardList.appendChild(cardItem);
    }
};
renderCards(cardsData);






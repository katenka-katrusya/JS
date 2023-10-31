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




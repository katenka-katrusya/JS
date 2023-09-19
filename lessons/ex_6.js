// 1. Написать функцию, которой передаем, имя, фамилия и возраст,
// и получаем строку "Привет Иван Петров с возрастом 17 лет"
// (только здесь данные, которые были переданы в функцию)

function hello() {
  let userName = prompt('Введите своё имя:', 'Вася');
  let userSurname = prompt('Введите свою фамилию:', 'Пупкин');
  let yearOfBirth = +prompt('Введите свой год рождения:', '1993');

  let date = new Date().getFullYear();
  let age = date - yearOfBirth;

  return console.log(`Првет, ${userName} ${userSurname}, тебе ${age} лет`);
}

// hello();

// 2. Написать функцию, которая принимает пол человека ('M','F') в виде строки,
// результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

function sex(gender) {
  if (gender === 'M') {
    console.log('Ваш пол мужской');
  } else if (gender === 'F') {
    console.log('Ваш пол женский');
  } else {
    console.log('Ваш пол неопределён');
  }
}

// let gender = prompt('Ваш пол мужской или женский (M, F)?');

// sex(gender);

// 3. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

function dayOfTheWeek(number) {
  switch (number) {
    case '1':
      console.log('Понедельник');
      break;
    case '2':
      console.log('Вторник');
      break;
    case '3':
      console.log('Среда');
      break;
    case '4':
      console.log('Четверг');
      break;
    case '5':
      console.log('Пятница');
      break;
    case '6':
      console.log('Суббота');
      break;
    case '7':
      console.log('Воскресенье');
      break;
    default:
      console.log('Это что-то непонятное');
  }
}

// let num = prompt('Введите число от 1 до 7', '6');

// dayOfTheWeek(num);

// 4. Написать функцию, которая принимает строку (в этом тексте 3-5 предложений),
// верните каждое первое слово в каждом предложении, через запятую.

function returnString(str) {
  return str
    .split('.')
    .map((el) => el.trim().split(' ')[0])
    .join(', ');
}

let string = `
  Нужно отметить, что эти две записи не полностью эквивалентны. 
  Есть тонкие различия, связанные с наследованием объектов (что будет рассмотрено позже), но на данном этапе изучения это неважно. 
  Почти во всех случаях сокращённый синтаксис предпочтителен.
  `;
// console.log(returnString(string));

// 5. Написать функцию, которой передаем имя, и она возраващает приветствие
// в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

let currentTime = new Date();
// let name = prompt('Введите своё имя', 'Иван');

function greetings(name, hours) {
  if (hours < 12 && hours >= 4) {
    console.log(`Доброе утро, ${name}`);
  } else if (hours >= 12 && hours < 18) {
    console.log(`Добрый день, ${name}`);
  } else if (hours >= 18 && hours <= 23) {
    console.log(`Добрый вечер, ${name}`);
  } else if (hours > 23 && hours < 4) {
    console.log(`Доброй ночи, ${name}`);
  }
}

// greetings(name, currentTime.getHours());

// 6. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
// (1-17 ребенок, 18-36 - молодой, 36-55 - зрелый, от 55 - старый). Например. 33 - зрелый

function age() {
  for (let i = 1; i <= 100; i++) {
    if (i > 0 && i < 18) {
      console.log(`${i} - ребёнок`);
    } else if (i > 17 && i < 36) {
      console.log(`${i} - молодой`);
    } else if (i > 36 && i < 55) {
      console.log(`${i} - зрелый`);
    } else if (i > 55) {
      console.log(`${i} - старый`);
    }
  }
}
// age();

// 7. Создай новую функцию, в которую передаешь имя и возраст человека
// и получаешь сообщение (Иван имеет возраст 44 и он зрелый).
// А также вызови внутри своей функции, функцию из прошлого задания

let paramName = prompt('Имя', 'Иван');
let paramAge = +prompt('Возраст', '10');

personInfo = (param) => {
  if (param > 0 && param < 18) {
    return `ребёнок`;
  } else if (param > 17 && param < 36) {
    return `молодой`;
  } else if (param > 35 && param < 55) {
    return `зрелый`;
  } else if (param > 54) {
    return `старый`;
  }
};

let displayInfo = (personName, personAge) =>
  console.log(
    `${personName} имеет возраст ${personAge} и он ${personInfo(paramAge)}`
  );

displayInfo(paramName, paramAge);

// 2 вариант без prompt

// let displayInfo = (personName, personAge) =>
//   console.log(
//     `${personName} имеет возраст ${personAge} и он ${personInfo(personAge)}`
//   );

// displayInfo('Иван', 30);

// Это программа вывода списка учеников. Внимательно изучите код и добавьте возможность ввода имени и года рождения каждого ученика, используя клавиатуру, и команду prompt().

let currentYear = 2023; // Текущий год

// Функция выводит текст в документ
function printText(text) {
  document.write(text);
}

// Функция выводит в документ strong c текстом
function printStrong(text) {
  document.write(`<strong>${text}</strong>`);
}

// Функция вычисляет возраст, и выводит его в том месте, где ее вызывают (запускают)
function printAge(year) {
  let age = currentYear - year;
  document.write(`<strong>${age} лет</strong>`);
}

// Функция выводит одного ученика, используя доступные функции
function printStudent(index, name, year) {
  printText('<p>');
  printText(`${index}) `);
  printStrong(name);
  printText(`, год рождения: `);
  printStrong(year);
  printText(', возраст: ');
  printAge(year);
  printText('</p>');
}

document.write('<h1>Список учеников</h1>');

let index = 0;

index++;
printStudent(
  index,
  prompt(`Имя: ${index}`, ``),
  +prompt(`Год рождения: ${index}`, ``)
);
index++;
printStudent(
  index,
  prompt(`Имя: ${index}`, ``),
  +prompt(`Год рождения: ${index}`, ``)
);
index++;
printStudent(
  index,
  prompt(`Имя: ${index}`, ``),
  +prompt(`Год рождения: ${index}`, ``)
);

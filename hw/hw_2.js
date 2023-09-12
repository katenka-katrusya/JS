'use strict';

// Задача 1. В переменную password запишите строку с любым произвольным паролем.
// Проверьте надёжность пароля с помощью условного оператора if.
// Пароль является надёжным, когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание.
// Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».

// 1 вариант с if

// let password = prompt('Введите пароль:');

// if (
//   password.length >= 4 &&
//   (password.includes('_') || password.includes('-'))
// ) {
//   console.log('Пароль надёжный');
// } else {
//   console.log('Пароль ненадёжный');
// }

// 2 вариант с тернарным оператором

// let password = prompt('Введите пароль:');
// let check =
//   password.length >= 4 && (password.includes('_') || password.includes('-'))
//     ? console.log('Пароль надёжный')
//     : console.log('Пароль ненадёжный');

// Задача 2. В переменных userName, userSurname даны имя и фамилия пользователя.
// При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно.
// Для этого первые буквы имени и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы).
// Запишите результат в новые переменные и выведите их значения с помощью console.log.
// С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того,
// были ли исходные строки равны преобразованным.

// let userName = 'Иван';
// let userSurname = 'пуПКин';

// let changeUserName =
//   userName[0].toUpperCase() + userName.substring(1).toLowerCase();
// let changeUserSurname =
//   userSurname[0].toUpperCase() + userSurname.substring(1).toLowerCase();

// userName === changeUserName
//   ? console.log(`Имя '${userName}' осталось без изменений`)
//   : console.log(`Имя '${userName}' было преобразовано в '${changeUserName}'`);
// userSurname === changeUserSurname
//   ? console.log(`Имя '${userSurname}' осталось без изменений`)
//   : console.log(
//       `Имя '${userSurname}' было преобразовано в '${changeUserSurname}'`
//     );

// console.log(changeUserName);
// console.log(changeUserSurname);

// Задача 3. В переменной number записано число. Необходимо с помощью console.log вывести сообщение, указывающее на чётность или нечётность числа.

let number = 5;

number % 2 === 0
  ? console.log(`Число ${number} - чётное`)
  : console.log(`Число ${number} - нечётное`);

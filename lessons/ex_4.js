'use strict';

// function findCard(cards, wantedCard = 'Туз') {
//   console.log('Ищем в колоде карту ' + wantedCard);

//   let found = false;

//   for (let card of cards) {
//     console.log(`Из колоды вытянута карта ${card}`);
//     if (card === wantedCard) {
//       found = true;
//       break;
//     }
//   }

//   console.log(
//     found
//       ? `Мы нашли карту ${wantedCard}!`
//       : `В колоде нет карты ${wantedCard} :(`
//   );
// }

// let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

// // ищем туза в колоде
// findCard(myCards);
// // ищем другую карту, например 5
// findCard(myCards, '5');

// 2. нахождение индекса в колоде
function findCardIndex(cards, wantedCard = 'Туз') {
  console.log('Ищем в колоде карту ' + wantedCard);

  // let foundIndex = -1;

  for (let index in cards) {
    let card = cards[index];
    console.log(`Из колоды вытянута карта ${card}`);
    if (card === wantedCard) {
      console.log(`Мы нашли карту ${wantedCard}!`);
      return index;
      // foundIndex = index;
      // break;
    }
  }

  console.log(
    `В колоде нет карты ${wantedCard} :(`
    // foundIndex > -1
    //   ? `Мы нашли карту ${wantedCard}!`
    //   : `В колоде нет карты ${wantedCard} :(`
  );
  return -1;
  // return foundIndex;
}

let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

let aceIndex = findCardIndex(myCards);
let jackIndex = findCardIndex(myCards, 'Валет');

console.log(aceIndex);
console.log(jackIndex);

// 3. пример с пустым ретёрном
function checkAge(age) {
  console.log(`Вам ${age} лет`);
  if (age >= 18) return;
  console.log('Школота');
  console.log(`Потерпи еще ${18 - age} лет до совершеннолетия`);
}

// все сообщения будут выведены
checkAge(10);
checkAge(20);

// Обязательная часть задания
let user1 = {
  name: 'Игорь',
  age: 17,
};

let user2 = {
  name: 'Оля',
  age: 21,
};

function getOlderUser(userOne, userTwo) {
  if (userOne.age > userTwo.age) {
    return userOne.name;
  } else {
    return userTwo.name;
  }
}

let result = getOlderUser(user1, user2);
console.log('Старший пользователь:', result);

// Не обязательная часть задания
let allUsers = [
  {
    name: 'Валя',
    age: 11,
  },

  {
    name: 'Таня',
    age: 24,
  },

  {
    name: 'Рома',
    age: 21,
  },

  {
    name: 'Надя',
    age: 34,
  },

  {
    name: 'Антон',
    age: 7,
  },
];

let getOlderUserArray = (usersArray) => {
  for (let i in usersArray) {
    ageUsers.push(usersArray[i].age);
    maxAge = Math.max(...ageUsers);
  }

  // тут может быть несколько максимальных возрастов
  let userOld = usersArray.filter((user) => user.age === maxAge);
  return userOld;
};

let ageUsers = [];
let maxAge = 0;

let result2 = getOlderUserArray(allUsers);
console.log('Старший пользователь:', result2);

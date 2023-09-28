'use strict';

let me = {
  birthDate: { year: 1993, month: 12, day: 30 },
  getAge: function () {
    /* можно сократить getAge(), убирая function */
    let now = new Date();
    let born = new Date(
      this.birthDate.year,
      this.birthDate.month + 1,
      this.birthDate.day
    );
    let diffInMilliseconds = now.getTime() - born.getTime();
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  },
};

console.log(me.getAge());

// 2.
let name = 'Петя';
let surname = 'Пупкин';

function getFullName() {
  return this.name + ' ' + this.surname;
}

let obj = { name, surname, getFullName };

console.log(obj.getFullName());

obj.whoAmI = function () {
  console.log(`Меня зовут ${this.name} ${this.surname}`);
};

obj.whoAmI();

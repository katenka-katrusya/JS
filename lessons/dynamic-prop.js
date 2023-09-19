function printObjectProperty(obj, propName) {
  console.log(obj[propName]);
}

let me = {
  name: 'Екатерина',
  surname: 'Хорошая',
  middleName: 'Сергеевна',
  birthDate: { year: 1993, month: 12, day: 30 },
  married: true,
};

printObjectProperty(me, 'name');
printObjectProperty(me, 'middleName');

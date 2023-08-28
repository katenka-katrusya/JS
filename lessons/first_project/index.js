let greeting = "Привет, как тебя зовут?";
let yourName = prompt(greeting);

while (yourName == "" || yourName == null) {
  yourName = prompt(greeting);
}

alert(
  yourName +
    ', я загадал  число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я скажу "мало", "много" или "угадал".'
);

let num = random(100);
let guess = prompt("Какое число я загадал?");
let count = 1;

while (guess != num) {
  count += 1;

  if (guess > num) {
    guess = prompt("Много, попробуй ещё раз");
  } else if (guess < num) {
    guess = prompt("Мало, попробуй ещё раз");
  }
}

alert("Ты угадал с " + count + " попытки." + " Это число " + num);

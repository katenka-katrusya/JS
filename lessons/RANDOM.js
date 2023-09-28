function randomNums(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  let num = randomNumber;
  return num;
}
console.log(randomNums(1, 100));

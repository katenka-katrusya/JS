// Сортировка массивов. Метод пузырька
let arr = [3, 2, 22, 5, 10, 34, 33, 3, 15];

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  for (let j = 0; j < arr.length - 1; j++) {
    // console.log('A:', arr[j]);
    // console.log('B:', arr[j + 1]);
    if (arr[j] > arr[j + 1]) {
      /* если поменять на <, то будет по убыванию сортировка */
      // console.log('A > B');
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

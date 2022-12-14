/* Створіть функцію getRandomArray(length, min, max) – яка повертає масив
випадкових цілих чисел. У функції є параметри: length - довжина масиву, min –
мінімальне значення цілого числа, max – максимальне значення цілого числа.
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] */

let length = Math.floor(Math.random() * 100);
let min = (Math.random() * 100) / 2;
let max = Math.random() * 100 * 2;

function getRandomArray(length, min, max) {
  return new Array(length)
    .fill(0)
    .map((el) => Math.floor(Math.random() * (max - min) + min));
}

console.log(getRandomArray(length, min, max));

/* Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх
переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад: getAverage(6,
2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */
const numbers = [6, 2, 55, 11, 78, 2.5, 55, 77, 5.7, 87, 23, 2, 5.6, 3, -2];
function getAverage(...numbers) {
  let res = numbers.filter((item) => Number.isInteger(item));

  result = res.reduce((sum, current) => sum + current) / res.length;
  return result;
}
console.log(getAverage(...numbers));

/* Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані
як аргументи функції. Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */
let arr = getRandomArray(length, min, max);
function filterEvenNumbers(...arr) {
  const result = arr.filter((item) => {
    return Math.abs(item % 2) == 1;
  });
  return result;
}
console.log(filterEvenNumbers(...arr));

/* Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел
більших Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */

const arrOfNumbers = [1, -2, 3, -4, -5, 6, 5, 98, -34];

function countPositiveNumbers(...arrOfNumbers) {
  const isInteger = arrOfNumbers.filter((el) => Number.isInteger(el));
  return isInteger.filter((item) => item > 0).length;
}
console.log(countPositiveNumbers(...arrOfNumbers));

/* Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в
масиві та залишить тільки ті, які діляться на ціло на 5 Приклад: getDividedByFive(6, 2,
55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

const arrOfDivNumbers = [1, -2, 30, -4, -15, 6, 5, 98, -34, 100];

function getDividedByFive(...arrOfDivNumbers) {
  return arrOfDivNumbers.filter((item) => item % 5 == 0);
}
console.log(getDividedByFive(...arrOfDivNumbers));

/* Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади
по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються.
Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) ->
["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"] */

word = "Перемога";

function dividedByThree(word) {
  const divWord = word.trim().toLowerCase();
  const arrResult = [];
  for (let i = 0; i < divWord.length; i += 3) {
    arrResult.push(divWord.substr(i, 3));
  }
  return arrResult;
}
console.log(dividedByThree(word));

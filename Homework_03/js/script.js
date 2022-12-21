/* Створити функцію getMaxDigit(number) – яка отримує будь-яке число та
виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8 */


function getMaxDigit(number){
   
   let arr = String(number).split('');
   return (Number(Math.max(...arr)));
   number = getMaxDigit(number)
      return number;
   }
   document.writeln(`Функція №1: ${getMaxDigit(number= prompt("Введіть число для визначення"))}<br>`)
   

/* Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та
**. Використовуйте цикл */

function getNumber(a, b) {

    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;

  }
document.writeln(`Функція №2: ${getNumber((a = prompt("Введіть число для визначення ступеня ")), (b = prompt("Введіть степінь числа"))) }<br>`)



/* Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" ->
"Влад", "вЛАД" -> "Влад" і так далі); */


function ucFirst(str) {
    return( str[0].toUpperCase() + str.slice(1));
}
 document.writeln(`Функція №3: ${ucFirst(str = prompt("Введіть ім'я")) }<br>`)



/* Створити функцію, яка вираховує суму, що залишається після оплати податку від
зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805 */



function salaryWithoutTax(value) {
  return Math.floor(value - value * (19.5 / 100));
}
document.writeln(`Функція №5: ${salaryWithoutTax(value = prompt("Введіть розмір заробітної плати")) }<br>`)


/* Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
Приклад: getRandomNumber(1, 10) -> 5 */

/* let min = prompt("Введіть мінімальне значення діапазона");
let max = prompt("Введіть максимальне значення діапазона"); */

function getRandomNumber(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
document.writeln(`Функція №6: ${getRandomNumber((min = prompt("Введіть мінімальне значення діапазона")),(max = prompt("Введіть максимальне значення діапазона"))) }<br>`)

/* Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
Приклад: countLetter("а", "Асталавіста") -> 4 */

let word = prompt("Введіть слово");
let letter = prompt("Введіть букву, яку будемо шукати");

function countLetter(word, letter) {
   word = word.toLowerCase();
   letter = letter.toLowerCase();
   let arr = word.split('');
   let counter=0;
   counter = arr.filter(arr => arr == letter);
   return( counter.length);
}
document.writeln(`Функція №7: ${salaryWithoutTax((word = prompt("Введіть слово")), (letter = prompt("Введіть букву, яку будемо шукати")) ) }<br>`)


/* Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від
наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500
грн. або convertCurrency("2500UAH") -> 100$ */

function convertCurrency(currency){

   currency = currency.toLowerCase();

if (currency.includes('$')) {

   currency = currency.slice(0, -1);
   currency = Number(currency * 40);
}
else if (currency.includes('uah')) {
   currency = currency.slice(0, -3);
   currency = Number(currency / 40)}
   else{
      currency = "Спробуйте ще раз"
   }
   return currency;
}
document.writeln(`Функція No8: ${convertCurrency(currency = prompt("Введіть суму та тип валюти в UAH або в $"))}`)







/* Створіть функцію генерації випадкового паролю (тільки числа), довжина
встановлюється користувачем або по замовчуванню = 8 символам. */



/*  function genPassword(passwordLength = 8) {
    const chars = "0123456789";
     passwordLength = prompt("Введіть кілкість символів");
    let password = "";
 for (var i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        return password;
 } */


/* Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124 */



/* Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a',
"blablabla") -> "blblbl" */



/* Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад:
isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу
гусеня") -> true */



/* Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим" */


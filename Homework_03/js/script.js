/* Створити функцію getMaxDigit(number) – яка отримує будь-яке число та
виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8 */

function getMaxDigit(number) {
  let arr = String(number).split("");
  return Number(Math.max(...arr));
  //number = getMaxDigit(number);
  //return number;
}

/* Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та
 **. Використовуйте цикл */

function getNumberExponent(a, b) {
  let result = 0;
  let temp = a;
  if (b == 0) {
    result = 1;
  } else if (b < 0) {
    for (let i = 1; i < Math.abs(b); i++) {
      temp *= a;
      result = 1 / temp;
    }
  } else {
    for (let i = 1; i < b; i++) {
      result *= a;
    }
  }
  return result;
}

/* Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" ->
"Влад", "вЛАД" -> "Влад" і так далі); */

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

/* Створити функцію, яка вираховує суму, що залишається після оплати податку від
зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805 */

function salaryWithoutTax(value) {
  return Math.floor(value - value * (19.5 / 100));
}

/* Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
Приклад: getRandomNumber(1, 10) -> 5 */

function getRandomNumber(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

/* Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
Приклад: countLetter("а", "Асталавіста") -> 4 */

function countLetter(word, letter) {
  //word = word.toLowerCase();
  letter = letter.toLowerCase();
  //let arr = word.split("");
  const arr = word.toLowerCase().split("");
  let counter = 0;
  counter = arr.filter((arr) => arr == letter);
  return counter.length;
}

/* Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від
наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500
грн. або convertCurrency("2500UAH") -> 100$ */

function convertCurrency(currency) {
  currency = currency.toLowerCase();

  if (currency.includes("$")) {
    currency = currency.slice(0, -1);
    currency = Number(currency * 40);
  } else if (currency.includes("uah")) {
    currency = currency.slice(0, -3);
    currency = Number(currency / 40);
  } else {
    currency = "Спробуйте ще раз";
  }
  return currency;
}

/* Створіть функцію генерації випадкового паролю (тільки числа), довжина
встановлюється користувачем або по замовчуванню = 8 символам. */

function genPassword(passwordLength = 8) {
  const chars = "0123456789";
  let password = "";
  for (var i = 1; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

document.writeln(
  `Функція №1: ${getMaxDigit(
    (number = prompt("Введіть число для визначення"))
  )}<br>`
);

document.writeln(
  `Функція №2: ${getNumberExponent(
    (a = Number(prompt("Введіть число для визначення ступеня "))),
    (b = Number(prompt("Введіть степінь числа")))
  )}<br>`
);

document.writeln(`Функція №3: ${ucFirst((str = prompt("Введіть ім'я")))}<br>`);

document.writeln(
  `Функція №4: ${salaryWithoutTax(
    (value = prompt("Введіть розмір заробітної плати"))
  )}<br>`
);

document.writeln(
  `Функція №5: ${getRandomNumber(
    (min = prompt("Введіть мінімальне значення діапазона")),
    (max = prompt("Введіть максимальне значення діапазона"))
  )}<br>`
);

document.writeln(
  `Функція №6: ${countLetter(
    (word = prompt("Введіть слово")),
    (letter = prompt("Введіть букву, яку будемо шукати"))
  )}<br>`
);

document.writeln(
  `Функція No7: ${convertCurrency(
    (currency = prompt("Введіть суму та тип валюти в UAH або в $"))
  )}<br>`
);

document.writeln(
  `Функція No8: ${genPassword(
    (passwordLength = prompt("Введіть кілкість символів"))
  )}<br>`
);

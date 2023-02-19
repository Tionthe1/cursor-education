

const tea = 15.678;
const sandwich = 123.965;
const free = 90.2345;

const arr = [tea, sandwich, free];

//Використовуючи вбудований об'єкт Math – виведіть максимальне число//

console.log("Максимальна ціна: ", Math.max(...arr));

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число//

console.log("Мінімальне ціна: ", Math.min(...arr));

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму//

const ttl = tea + sandwich + free;
console.log("Сума вартості всіх товарів: ", ttl);

/* Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару
між собою. Округлення використовувати в МЕНЬШУ сторону. */

const wholeNumber = Math.floor(tea) + Math.floor(sandwich) + Math.floor(free);

console.log(
  "Сума вартості всіх товарів, округлена в меньшу сторону: ",
  wholeNumber
);

//Виведіть суму товарів округлену до сотень.//

console.log("Сума округлена до сотень :", Math.round(ttl / 100) * 100);

/* Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним
чи непарним числом? */

if (wholeNumber % 2 === 0) {
  console.log("Округлена сума всіх товарів є парним числом: ", true);
} else {
  console.log("Округлена сума всіх товарів є парним числом: ", false);
}

/* Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500
грн. */

console.log("Решта: ", 500 - ttl);

/* Виведіть середнє значення цін, округлене до другого знаку після коми */

console.log(
  "Середнє значення цін, округлене до другого знаку після коми: ",
  (ttl / 3).toFixed(2)
);

/* Створіть змінну, в якої збережіть випадкову знижку (використовуйте
функцію Math.random). */

const discount = Math.floor(Math.random() * 50);

/* Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків
після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів
рівно в два рази нижче їх ціни? */

const priceWhithDiscountTea = (tea - (tea * discount) / 100).toFixed(2);
const priceWhithDiscountSandwich = (
  sandwich -
  (sandwich * discount) / 100
).toFixed(2);
const priceWhithDiscountFree = (free - (free * discount) / 100).toFixed(2);

console.log("Ціна зі знижкою 'Tea': ", priceWhithDiscountTea);
console.log("Чистий прибуток 'Tea': ", priceWhithDiscountTea - tea / 2);

console.log("Ціна зі знижкою 'Sandwich': ", priceWhithDiscountSandwich);
console.log(
  "Чистий прибуток 'Sandwich': ",
  priceWhithDiscountSandwich - sandwich / 2
);

console.log("Ціна зі знижкою 'Free': ", priceWhithDiscountFree);
console.log("Чистий прибуток 'Free': ", priceWhithDiscountFree - free / 2);

/* Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього
завдання у вигляді одного рядка */

console.log(`Максимальна ціна: ${Math.max(tea, sandwich, free)} 
Мінімальна ціна: ${Math.min(tea, sandwich, free)}
Сума вартості всіх товарів: ${tea + sandwich + free}
Сума вартості всіх товарів, округлена в меньшу сторону: ${
  Math.floor(tea) + Math.floor(sandwich) + Math.floor(free)
}
Сума округлена до сотень: ${Math.round(ttl / 100) * 100}
${
  Math.floor(Math.floor(tea) + Math.floor(sandwich) + Math.floor(free)) % 2 ===
  0
    ? "Округлена сума всіх товарів є парним числом " + true
    : "Округлена сума всіх товарів є парним числом " + false
}
Решта: ${500 - ttl}
Середнє значення цін, округлене до другого знаку після коми: ${(
  tea +
  sandwich +
  free / 3
).toFixed(2)}
Ціна зі знижкою 'Tea': ${(
  tea -
  (tea * Math.floor(Math.random() * 50)) / 100
).toFixed(2)}
Чистий прибуток 'Tea': ${(tea - (tea * discount) / 100).toFixed(2) - tea / 2}
Ціна зі знижкою 'Sandwich': ${(
  sandwich -
  (sandwich * Math.floor(Math.random() * 50)) / 100
).toFixed(2)}
Чистий прибуток 'Sandwich': ${
  (sandwich - (sandwich * discount) / 100).toFixed(2) - tea / 2
}
Ціна зі знижкою 'Free': ${(
  free -
  (free * Math.floor(Math.random() * 50)) / 100
).toFixed(2)}
Чистий прибуток 'Free': ${(free - (free * discount) / 100).toFixed(2) - tea / 2}
`);

const output = document.getElementById("output");
output.innerHTML = `Максимальна ціна: ${Math.max(tea, sandwich, free)} <br>
Мінімальна ціна: ${Math.min(tea, sandwich, free)}<br>
Сума вартості всіх товарів: ${tea + sandwich + free}<br>
Сума вартості всіх товарів, округлена в меньшу сторону: ${
  Math.floor(tea) + Math.floor(sandwich) + Math.floor(free)
}<br>
Сума округлена до сотень: ${Math.round(ttl / 100) * 100}<br>
${
  Math.floor(Math.floor(tea) + Math.floor(sandwich) + Math.floor(free)) % 2 ===
  0
    ? "Округлена сума всіх товарів є парним числом " + true
    : "Округлена сума всіх товарів є парним числом " + false
}
Решта: ${500 - ttl}<br>
Середнє значення цін, округлене до другого знаку після коми: ${(
  tea +
  sandwich +
  free / 3
).toFixed(2)}<br>
Ціна зі знижкою 'Tea': ${(
  tea -
  (tea * Math.floor(Math.random() * 50)) / 100
).toFixed(2)}<br>
Чистий прибуток 'Tea': ${
  (tea - (tea * discount) / 100).toFixed(2) - tea / 2
} <br>
Ціна зі знижкою 'Sandwich': ${(
  sandwich -
  (sandwich * Math.floor(Math.random() * 50)) / 100
).toFixed(2)} <br>
Чистий прибуток 'Sandwich': ${
  (sandwich - (sandwich * discount) / 100).toFixed(2) - tea / 2
}<br>
Ціна зі знижкою 'Free': ${(
  free -
  (free * Math.floor(Math.random() * 50)) / 100
).toFixed(2)}<br>
Чистий прибуток 'Free': ${(free - (free * discount) / 100).toFixed(2) - tea / 2}
`;


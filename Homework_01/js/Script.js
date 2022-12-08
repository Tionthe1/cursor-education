const tea =(15.678);
const sandwich = (123.965);
const free = (90.2345);

const arr = [tea, sandwich, free];
const ttl = (tea + sandwich + free);

const wholeNumber = (Math.floor(tea) + Math.floor(sandwich) + Math.floor(free));

console.log("Максимальне ціна: ", Math.max(... arr));
console.log("Мінімальне ціна: ", Math.min(... arr));
console.log("Сума вартості всіх товарів: ", ttl);
console.log("Сума вартості всіх товарів, округлена в меньшу сторону: ", wholeNumber);
console.log("Сума округлена до сотень :", (Math.round(ttl/100))*100);


if (wholeNumber % 2 === 0) {
   console.log("Округлена сума всіх товарів є парним числом ",  true)
} else {
   console.log("Округлена сума всіх товарів є непарним числом ", false)
}

console.log("Решта: ", 500 - ttl);

console.log("Середнє значення цін, округлене до другого знаку після коми: ", (ttl/3).toFixed(2));

const discount = Math.random();

const priceWhithDiscount = (tea-discount).toFixed(2)

console.log("Ціна зі знижкою: ", priceWhithDiscount);
console.log ("Чистий прибуток: ", priceWhithDiscount-(tea / 2));


console.log(`Максимальна ціна: ${Math.max(tea, sandwich, free)} 
Мінімальна ціна: ${Math.min(tea,sandwich, free)}
Сума вартості всіх товарів: ${tea + sandwich + free}
Сума вартості всіх товарів, округлена в меньшу сторону: ${Math.floor(tea) + Math.floor(sandwich) + Math.floor(free)}
Сума округлена до сотень: ${(Math.round(ttl/100))*100}
${Math.floor(Math.floor(tea) + Math.floor(sandwich) + Math.floor(free)) % 2 === 0 ? "Округлена сума всіх товарів є парним числом " + true : "Округлена сума всіх товарів являється не парним числом " + false}
Решта: ${500 - ttl}
Середнє значення цін, округлене до другого знаку після коми: ${(tea + sandwich + free/3).toFixed(2)}
Ціна зі знижкою: ${(tea - Math.random()).toFixed(2)}
Чистий прибуток: ${(tea - Math.random()).toFixed(2) - (tea / 2)}

`);

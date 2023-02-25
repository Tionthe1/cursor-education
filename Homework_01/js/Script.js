export function doAllCalculations() {
  const tea = 15.678;
  const sandwich = 123.965;
  const free = 90.2345;

  const arr = [tea, sandwich, free];

  console.log("Максимальна ціна: ", Math.max(...arr));
  console.log("Мінімальне ціна: ", Math.min(...arr));
  const ttl = tea + sandwich + free;
  console.log("Сума вартості всіх товарів: ", ttl);

  const wholeNumber = Math.floor(tea) + Math.floor(sandwich) + Math.floor(free);

  console.log(
    "Сума вартості всіх товарів, округлена в меньшу сторону: ",
    wholeNumber
  );

  console.log("Сума округлена до сотень :", Math.round(ttl / 100) * 100);

  if (wholeNumber % 2 === 0) {
    console.log("Округлена сума всіх товарів є парним числом: ", true);
  } else {
    console.log("Округлена сума всіх товарів є парним числом: ", false);
  }

  console.log("Решта: ", 500 - ttl);

  console.log(
    "Середнє значення цін, округлене до другого знаку після коми: ",
    (ttl / 3).toFixed(2)
  );

  const discount = Math.floor(Math.random() * 50);

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

  console.log(
    `Максимальна ціна: ${Math.max(tea, sandwich, free)}
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
`
  );

  const output = document.querySelector(".hw-1");
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
}
doAllCalculations();

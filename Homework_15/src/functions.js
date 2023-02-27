//hw-1
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

//hw-2

export function SumOfNumbers() {
  let firstValue = 4;
  while (
    !Number.isInteger(Number(firstValue)) ||
    Number.isNaN(Number(firstValue)) ||
    firstValue === "" ||
    firstValue < 0
  ) {
    alert("Невірне значення, введіть ціле число");
    firstValue = Number(
      prompt("Введіть перше значення, значення повинне бути цілим числом")
    );
  }
  console.log("Перше значення: ", firstValue);

  let secondValue = 9;
  while (
    !Number.isInteger(Number(secondValue)) ||
    Number.isNaN(Number(secondValue)) ||
    secondValue === "" ||
    secondValue < 0
  ) {
    alert("Невірне значення, введіть ціле число");
    secondValue = Number(
      prompt("Введіть друге значення, значення повинне бути цілим числом")
    );
  }
  console.log("Друге значення: ", secondValue);

  while (secondValue <= firstValue) {
    secondValue = Number(
      prompt(
        "Друге значення повинно бути більшим за перше, введіть вірне значення"
      )
    );
  }
  while (
    !Number.isInteger(Number(secondValue)) ||
    Number.isNaN(Number(secondValue)) ||
    secondValue === "" ||
    firstValue > secondValue < 0
  ) {
    alert("Невірне значення, введіть ціле число");
    secondValue = Number(
      prompt("Введіть друге значення, значення повинне бути цілим числом")
    );
  }

  const skipEven = true;
  //console.log("Пропускати парні?: ", skipEven);

  let sumValue = 0;

  if (!skipEven) {
    for (let i = 0; i <= secondValue; i++) {
      sumValue += i;
    }
  }

  if (skipEven) {
    for (let i = 1; i <= secondValue; i++) {
      if (i % 2) {
        sumValue += i;
      }
    }
  }
  //alert("Результат обчислень: " + sumValue);

  //return sumValue;

  const output = document.querySelector(".hw-2");
  output.innerHTML = `
  Перше значення: ${firstValue}<br>
  Друге значення: ${secondValue}<br>
  Пропускати парні?: ${skipEven}<br>
  Результат обчислень: ${sumValue}`;
}
SumOfNumbers();

//hw-3
export function genPassword(passwordLength = 8) {
  passwordLength = 9;
  const chars = "0123456789";
  let password = "";
  for (var i = 1; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  //return password;

  const output = document.querySelector(".hw-3");
  output.innerHTML = `password: ${password}`;
}
genPassword();

//hw-4
export function getPairs(students) {
  students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
  let studPairs = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
  // return studPairs;
  const output = document.querySelector(".hw-4");
  output.innerHTML = `${studPairs}`;
}
getPairs();

//hw-5
let length = Math.floor(Math.random() * 100);
let min = (Math.random() * 100) / 2;
let max = Math.random() * 100 * 2;

export function getRandomArray(length, min, max) {
  return new Array(length)
    .fill(0)
    .map((el) => Math.floor(Math.random() * (max - min) + min));
}
document.querySelector(".hw-5").innerHTML = `${getRandomArray(
  length,
  min,
  max
)}`;

//hw-6

const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4], //3.75
      algorithms: [3, 3, 3, 4, 4, 4], //3.5
      data_science: [5, 5, 3, 4], //4.25
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
function getSubjects(students) {
  const subject = Object.keys(students.subjects);
  let subNames = subject.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")
  );

  return subNames;
}
document.querySelector(".hw-6").innerHTML = `${getSubjects(students[2])}`;

//hw-7

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
export function getMyTaxes(salary) {
  this.salary = salary;
  const taxes = salary * this.tax;
  return taxes;
}
const myTaxesUkraine = getMyTaxes.call(ukraine, 20000);
document.querySelector(".hw-7").innerHTML = `${myTaxesUkraine}`;

//hw-8

export class student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._marks = [];
    this._active = true;
  }
  getInfo() {
    return `Студент ${this.course} курсу ${this.university}, ${this.fullName}"`;
  }
}
const person = new student(
  `Вища Школа Психотерапії
м.Одеса`,
  `1`,
  `Остап Родоманський Бендер`
);
document.querySelector(".hw-8").innerHTML = `${person.getInfo()}`;

//hw-9

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.querySelector(".hw-9").innerHTML = `${getRandomColor()}`;

//hw-10



//hw-11
export function chin(){
let length = 8;
async function getRandomChinese(length) {
  let result = "";
  let i = 0;
  while (i < length) {
    let date = Date.now();
    let sign = String(date).slice(-5);
    let char = String.fromCharCode(sign);
    result += char;
    await delay(50);
    i++;
  }
  return result;
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
getRandomChinese(length).then((value) => {
  document.querySelector(".hw-11").innerHTML = value;
});}
chin()
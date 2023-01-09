/* 
Створіть 3 об'єкти, що описують країни:

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки
податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this

2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у
середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
Функція повинна викликатись через call та працювати з даними через this

3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього
податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
Функція повинна викликатись через call та працювати з даними через this

4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: {
salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary –
генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в
залежності від вибраної країни та значення salary.
Створіть 3 об'єкти, що описують країни:
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval */

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки
податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this */

function getMyTaxes(salary) {
  this.salary = salary;
  const taxes = salary * this.tax;
  return taxes;
}

const myTaxesUkraine = getMyTaxes.call(ukraine, 20000);
const myTaxesLatvia = getMyTaxes.call(latvia, 20000);
const myTaxesLitva = getMyTaxes.call(litva, 20000);
console.log("Taxes in Ukraine: " + myTaxesUkraine);
console.log("Taxes in Latvia: " + myTaxesLatvia);
console.log("Taxes in Litva: " + myTaxesLitva);

/* 2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у
середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
Функція повинна викликатись через call та працювати з даними через this
 */

function getMiddleTaxes(country) {
  const midTax = this.tax * this.middleSalary;
  return midTax;
}
const midTaxesUkr = getMiddleTaxes.call(ukraine);
const midTaxesLat = getMiddleTaxes.call(latvia);
const midTaxesLitv = getMiddleTaxes.call(litva);
console.log("Middle taxes in Ukraine: " + midTaxesUkr);
console.log("Middle taxes in Latvia: " + midTaxesLat);
console.log("Middle taxes in Litva: " + midTaxesLitv);

/* 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього
податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
Функція повинна викликатись через call та працювати з даними через this */

function getTotalTaxes(country) {
  const sumOfTax = this.tax * this.middleSalary * this.vacancies;
  return sumOfTax;
}
const sumOfTaxUkr = getTotalTaxes.call(ukraine);
const sumOfTaxLat = getTotalTaxes.call(latvia);
const sumOfTaxLitv = getTotalTaxes.call(litva);
console.log("Total taxes in Ukraine: " + midTaxesUkr);
console.log("Total taxes in Latvia: " + midTaxesLat);
console.log("Total taxes in Litva: " + midTaxesLitv);

/* 4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:
{salary: number,
taxes: number, 
profit: number }
кожні 10 секунд. Значення salary –
генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в
залежності від вибраної країни та значення salary.
Створіть 3 об'єкти, що описують країни:
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval */

function getMySalary(country) {
  const mySalary = {};
  const minSalary = 1500;
  const maxSalary = 2000;

  mySalary.salary = Math.floor(
    (maxSalary - minSalary) * Math.random() + minSalary
  );

  mySalary.taxes = Math.floor(this.tax * mySalary.salary);
  mySalary.profit = Math.floor(mySalary.salary - mySalary.taxes);
  return mySalary;
}
setInterval(() => {
  console.log("Ukraine: ", getMySalary.call(ukraine));
  console.log("Latvia: ", getMySalary.call(latvia));
  console.log("Litva: ", getMySalary.call(litva));
}, 10000);

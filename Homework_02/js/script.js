let firstValue = Number (prompt('Введіть перше значення'));
while (!Number.isInteger(Number(firstValue))||Number.isNaN(Number(firstValue)) || firstValue === ''|| firstValue < 0 ) {
    alert("Невірне значення, введіть ціле число");
    firstValue = Number (prompt('Введіть перше значення, значення повинне бути цілим числом'));
}
console.log("Перше значення: ", firstValue);

let secondValue = Number ( prompt('Введіть друге значення'));
while (!Number.isInteger(Number(secondValue))||Number.isNaN(Number(secondValue)) || secondValue === ''|| secondValue < 0 ) {
    alert("Невірне значення, введіть ціле число");
    secondValue = Number (prompt('Введіть друге значення, значення повинне бути цілим числом'));
}
console.log("Друге значення: ", secondValue);

while (secondValue <= firstValue) {
secondValue = Number (prompt("Друге значення повинно бути більшим за перше, введіть вірне значення"));}
while (!Number.isInteger(Number(secondValue))||Number.isNaN(Number(secondValue)) || secondValue === ''|| firstValue > secondValue < 0 ) {
    alert("Невірне значення, введіть ціле число");
    secondValue = Number ( prompt('Введіть друге значення, значення повинне бути цілим числом'));
}

const skipEven = confirm ("Пропускати парні числа?");
console.log("Пропускати парні?: ", skipEven);

let sumValue = 0;

if (!skipEven) {
for (let i = 0; i <= secondValue; i++) {
sumValue += i;
}};

if (skipEven) {
for (let i = 1; i <= secondValue; i++) {
    if(i%2){
    sumValue += i;
    }}}
    alert ("Результат обчислень: " + sumValue);
console.log(sumValue);
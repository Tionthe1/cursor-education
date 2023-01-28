/* Створіть функцію, яка повертає проміс getRandomChinese(length).
Функція працює таким чином:
Запускається цикл (підказка: можна використовувати while) length раз, кожен
прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now()
Наприклад отримали const sign = 16086;.
Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з
китайськими ієрогліфами.
Час роботи проміса має складати length * 50ms.
(Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms 
*/


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
  document.querySelector(".main").innerHTML = value;
});


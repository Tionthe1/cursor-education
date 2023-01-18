/* Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір.
Квадрати мають розташовуватись по 5 в ряд.
Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати
функцію generateBlocksInterval(); */

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateBlocks() {
  const container = document.querySelector(".container");
  for (let i = 0; i < 25; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomColor();
    let tempContainer = container.append(div);
    container.append(div);
  }
  return;
}
//generateBlocks();

function changeColor() {
  const divBlocks = document.querySelectorAll(".container > div");
  for (let divBlock of divBlocks) {
    divBlock.style.backgroundColor = getRandomColor();
  }
}

function generateBlocksInterval() {
  generateBlocks();
  setInterval(changeColor, 1000);
}

generateBlocksInterval();

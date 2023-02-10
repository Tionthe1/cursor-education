const btnGenerator = document.getElementById(`generator`);
const text = document.querySelector(`.text`);
const btnUp = document.getElementById(`up`);
const btnDown = document.getElementById(`down`);
let result = document.querySelector(`.result`);

const idGenerator = createIdGenerator();

function* createIdGenerator() {
  let id = 1;
  while (true) yield id++;
}

btnGenerator.onclick = () => {
  result.innerHTML = idGenerator.next().value;
};
btnUp.onclick = () => {
  text.setAttribute(`style`, `font-size: ${fontGenerator.next(`up`).value}px`);
};
btnDown.onclick = () => {
  text.setAttribute(
    `style`,
    `font-size: ${fontGenerator.next(`down`).value}px`
  );
};
const fontGenerator = newFontGenerator(50);
function* newFontGenerator(option) {
  let value = option;
  let size = yield value;
  for (let i = 0; i < Infinity; i++) {
    if (size === "up") {
      value = value + 2;
      size = yield value;
    } else if (size === "down") {
      value = value - 2;

      size = yield value;
    }
  }
}

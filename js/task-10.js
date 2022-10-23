function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls > input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

btnCreate.addEventListener("click", onCreateElement);
btnDestroy.addEventListener("click", onDestroyElement);
input.addEventListener("input", onNumberInput);

let numberQuantity = 0;

function onNumberInput(event) {
  numberQuantity = event.currentTarget.value;
}

function onCreateElement(event) {
  event = numberQuantity;

  for (let i = 0; i < event; i += 1) {
    let total = 0;
    if (!box.firstChild) {
      total = 0;
    } else {
      total += i * 10;
    }
    const markup = document.createElement("div");

    markup.style.backgroundColor = getRandomHexColor();

    markup.style.width = `${30 + total}px`;
    markup.style.height = `${30 + total}px`;
    box.append(markup);
  }
}
function onDestroyElement() {
  box.querySelectorAll("div").forEach((element) => element.remove());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls > input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

btnCreate.addEventListener("click", onCreateElement);
btnDestroy.addEventListener("click", onDestroyElement);
// input.addEventListener("input", onNumberInput);

function onCreateElement() {}

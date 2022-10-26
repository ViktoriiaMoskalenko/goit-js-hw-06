function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyDtn = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBoxes);
destroyDtn.addEventListener("click", onDestroyBoxes);
input.addEventListener("input", onNumberInput);

let inputValue = 0;
let size = 30;

function onNumberInput(event) {
  inputValue = event.currentTarget.value;
}

function onCreateBoxes(event) {
  for (let i = 0; i < inputValue; i += 1) {
    let createEl = document.createElement("div");
    createEl.classList.add("js-box");
    createEl.style.backgroundColor = getRandomHexColor();
    size += 10;
    createEl.style.width = size + "px";
    createEl.style.height = size + "px";

    box.append(createEl);
  }
  console.log(box.children);
}

function onDestroyBoxes() {
  size = 30;
  box.querySelectorAll("div").forEach((element) => element.remove());
}

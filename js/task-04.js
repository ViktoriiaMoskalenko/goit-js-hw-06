const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

console.log(value);

let counterValue = 0;

// OPTION_1

increment.addEventListener("click", onIncrementBtn);
decrement.addEventListener("click", onDecrementBtn);

function onIncrementBtn() {
  counterValue += 1;
  value.textContent = counterValue;

  console.log("increment");
}

function onDecrementBtn() {
  counterValue += 1;
  value.textContent = counterValue;

  console.log("decrement");
}

// OPTION_2

// increment.addEventListener("click", () => {
//   counterValue += 1;
//   value.textContent = counterValue;

//   console.log("increment");
// });
// decrement.addEventListener("click", () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
//   console.log("decrement");
// });

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValidInput);

function onValidInput() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  console.log(input.value.length);
  console.log(input.dataset.length);
}

// const textInput = document.querySelector("#validation-input");

// textInput.addEventListener("blur", onValidInput);

// function onValidInput() {
//   if (
//     textInput.value.length === Number(textInput.getAttribute("data-length"))
//   ) {
//     textInput.classList.add("valid");
//     console.log("Yes");
//   } else {
//     textInput.classList.add("invalid");
//     console.log("No");
//   }
// }

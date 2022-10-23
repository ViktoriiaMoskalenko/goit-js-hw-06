const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onSizeSpan);

function onSizeSpan(event) {
  span.style.fontSize = event.currentTarget.value + "px";
  console.log(span.style.fontSize);
  console.dir(event.currentTarget);
}

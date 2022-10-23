const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const arr = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const newItem = document.createElement("li");
  newItem.textContent = ingredients[i];
  newItem.classList.add("item");
  console.log(newItem);
  arr.push(newItem);
}
list.append(...arr);

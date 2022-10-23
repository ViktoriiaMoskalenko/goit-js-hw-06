const mainList = document.querySelector("#categories");
const mainItem = document.querySelectorAll(".item");

function onQuantityEl(obj) {
  return obj.children.length;
}

console.log(`Number of categories: ${onQuantityEl(mainList)}`);

function onNameEl(obj) {
  let arr = [];
  for (let i = 0; i < obj.length; i += 1) {
    arr = [...obj[i].children];
    console.log(
      `Category: ${arr[0].textContent}\nElements: ${onQuantityEl(arr[1])}`
    );
  }
}
console.log(onNameEl(mainItem));

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

// OPTION_1

const arr = [];

for (let i = 0; i < images.length; i += 1) {
  const newItem = document.createElement("li");
  const newImg = document.createElement("img");
  newImg.classList.add("size");
  newImg.setAttribute("src", images[i].url);
  newImg.setAttribute("alt", images[i].alt);
  newItem.append(newImg);
  console.log(newItem);
  arr.push(newItem);
}
gallery.append(...arr);

// OPTION_2

// const arr = images.map(
//   ({ url, alt }) => `<li><img class="size" src="${url}" alt="${alt}"></li>`
// );
// gallery.insertAdjacentHTML("afterbegin", arr.join(""));

// OPTION_3

// const arr = [];

// for (let i = 0; i < images.length; i += 1) {
//   const newItem = `<li><img class="size" src="${images[i].url}" alt="${images[i].alt}"></li>`;
//   console.log(newItem);
//   arr.push(newItem);
// }
// console.log(arr);
// gallery.insertAdjacentHTML("beforeend", arr.join(""));

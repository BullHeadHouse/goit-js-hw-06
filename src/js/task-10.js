function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButt = document.querySelector("[data-create]");
const destroyButt = document.querySelector("[data-destroy]");
const inputField = document.querySelector("input");
const boxes = document.querySelector("#boxes");

let increment = 30;

createButt.addEventListener("click", onCreateButtonClick);
destroyButt.addEventListener("click", onDestroyButtonClick);

function onCreateButtonClick() {
  createBoxes(inputField.value);
}
function onDestroyButtonClick() {
  destroyBoxes();
}
function createBoxes(amount) {
  const arrayCollection = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${increment}px`;
    box.style.height = `${increment}px`;
    arrayCollection.push(box);
    increment += 10;
  }
  boxes.append(...arrayCollection);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}

let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector("[data-action = 'decrement']"),
  btnIncrement: document.querySelector("[data-action = 'increment']"),
  value: document.querySelector("#value"),
};

refs.btnDecrement.addEventListener("click", onSubButtonClick);
refs.btnIncrement.addEventListener("click", onAddButtonClick);

function onSubButtonClick() {
  //   counterValue -= 1;
  value.textContent = counterValue -= 1;
}
function onAddButtonClick() {
  //   counterValue += 1;
  value.textContent = counterValue += 1;
}

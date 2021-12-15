const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInputType);

function onInputType(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  }
}

const nameInput = document.querySelector("#validation-input");

nameInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputField = event.currentTarget;
  const inputLength = inputField.value.length;
  const dataLength = Number(inputField.dataset.length);

  if (inputLength === dataLength) {
    inputField.classList.contains("invalid")
      ? inputField.classList.replace("invalid", "valid")
      : inputField.classList.add("valid");
  }
  if (inputLength !== dataLength) {
    inputField.classList.contains("valid")
      ? inputField.classList.replace("valid", "invalid")
      : inputField.classList.add("invalid");
  }
}

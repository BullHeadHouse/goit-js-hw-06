const inputControl = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputControl.addEventListener("input", onInputSlide);

function onInputSlide(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

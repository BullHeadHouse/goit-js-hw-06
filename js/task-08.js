const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const objecto = {
    email,
    password,
  };
  if (email === "" || password === "") {
    return alert("Please, fill in all appropriate fields");
  }

  console.log(objecto);
  event.currentTarget.reset();
}

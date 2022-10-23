const form = document.querySelector(".login-form");

form.addEventListener("submit", onSumbitForm);

function onSumbitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("ПОМИЛКА\nВсі поля повинні бути заповнені!");
  }

  const formObj = new FormData(event.currentTarget);
  formObj.forEach((value, name) => {
    console.log("value => ", value);
    console.log("name => ", name);
  });
  event.currentTarget.reset();
}

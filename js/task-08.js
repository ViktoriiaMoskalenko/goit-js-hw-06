const form = document.querySelector(".login-form");

form.addEventListener("submit", onSumbitForm);

function onSumbitForm(event) {
  event.preventDefault();

  // const {
  //   elements: { email, password },
  // } = event.currentTarget;

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("ПОМИЛКА\nВсі поля повинні бути заповнені!");
  }

  // const formObj = new FormData(event.currentTarget);
  // formObj.forEach((value, name) => {
  //   console.log("value => ", value);
  //   console.log("name => ", name);
  // });
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formObj = {
    email,
    password,
  };
  console.log(formObj);
  event.currentTarget.reset();
}

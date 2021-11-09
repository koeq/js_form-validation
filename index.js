const form = document.getElementById("email-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");

console.log(password.value);

const passwordValidation = e => {
  const errMsg = "Please enter a password!";
  if (password.value === "" || password.value === null) {
    error.innerHTML = errMsg;
  }
};

form.addEventListener("submit", e => {
  const errMsg = "Please enter a password!";
  if (password.value === "" || password.value === null) {
    error.innerHTML = errMsg;
    e.preventDefault();
  }
});

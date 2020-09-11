let submitForm = document.getElementById("validateForm"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("pswd"),
  firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  otherName = document.getElementById("otherName"),
  phoneNumber = document.getElementById("phone");

var regEx = {
  name: /[^A-Za-z]/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&_<>':;])(?=.*[\d])[a-zA-Z0-9@$!%*?&_<>':;]{6,}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i,
  phoneNumber: /^[\+0-9]{11,}$/,
};

function required(field, e) {
  if (field.id == "pswd" && field.value == "") {
    field.nextElementSibling.innerHTML = `Please confirm your password`;
  } else if (field.value == "") {
    field.nextElementSibling.innerHTML = `Please enter your ${field.previousElementSibling.innerText}`;
    e.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function passwordValidation(pswd1, pswd2, e) {
  if (pswd1.id === "password" && !regEx.password.test(pswd1.value)) {
    pswd1.nextElementSibling.innerHTML =
      "Your password should have a minimum of 5 characters, 1 capital letter, 1 special character eg @ and 1 number.";
    e.preventDefault();
    return false;
  } else if (pswd1.value.trim() !== pswd2.value.trim()) {
    pswd1.nextElementSibling.innerHTML = "Your passwords don't match";
    pswd2.nextElementSibling.innerHTML = "Your passwords don't match";
    e.preventDefault();
    return false;
  } else {
    pswd1.nextElementSibling.innerHTML = "";
    pswd2.nextElementSibling.innerHTML = "";
    return true;
  }
}

function nameValidation(name, e) {
  if (name.value.match(regEx.name)) {
    name.nextElementSibling.innerHTML = `${name.previousElementSibling.innerText} must not contain special character`;
    e.preventDefault();
    return false;
  } else {
    name.nextElementSibling.innerHTML = "";
    return true;
  }
}

function emailValidation(email, e) {
  if (!regEx.email.test(email.value)) {
    email.nextElementSibling.innerHTML = "Please enter a valid email";
    e.preventDefault();
    return false;
  } else {
    email.nextElementSibling.innerHTML = "";
    return true;
  }
}

function phoneNumberValidation(digit, e) {
  if (!regEx.phoneNumber.test(digit.value)) {
    digit.nextElementSibling.innerHTML = "Please enter a valid phone number";
    e.preventDefault();
    return false;
  } else {
    digit.nextElementSibling.innerHTML = "";
    return true;
  }
}

function validateForm(e) {
  required(email, e);
  required(password, e);
  required(confirmPassword, e);
  required(firstName, e);
  required(lastName, e);
  required(phoneNumber, e);
  nameValidation(firstName, e);
  nameValidation(lastName, e);
  passwordValidation(password, confirmPassword, e);
  emailValidation(email, e);
  phoneNumberValidation(phoneNumber, e);
  return true;
}

submitForm.addEventListener("submit", validateForm);

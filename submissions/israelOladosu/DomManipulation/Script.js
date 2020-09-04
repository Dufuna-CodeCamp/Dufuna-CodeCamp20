let submitForm = document.getElementById("validateForm"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("pswd"),
  firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  otherName = document.getElementById("otherName"),
  phoneNumber = document.getElementById("phone");

var regEx = {
  name: /[^A-Za-z0-9]/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&_<>':;])(?=.*[\d])[a-zA-Z0-9@$!%*?&_<>':;]{6,}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i,
  phoneNumber: /^[\+0-9]{11,}$/,
};

function required(field, e) {
  if (field.id == "pswd" && field.value == "") {
    field.nextElementSibling.innerHTML = `Please confirm your password`;
  } else if (field.value == "") {
    field.nextElementSibling.innerHTML = `Please enter your ${field.previousElementSibling.innerText}`;
    console.dir(field);
    e.preventDefault();
    return false;
  } else if (
    (field.id === "firstName" || field.id === "lastName") &&
    field.value.match(regEx.name)
  ) {
    field.nextElementSibling.innerHTML = `${field.previousElementSibling.innerText} must not contain special character`;
    e.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function passwordCheck(pswd1, pswd2, e) {
  if (pswd1.value !== "") {
    if (pswd1.id === "password" && !regEx.password.test(pswd1.value)) {
      console.log(regEx.password.test(pswd1.value));
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
}

function emailCheck(email, e) {
  if (email.value !== "") {
    if (!regEx.email.test(email.value)) {
      email.nextElementSibling.innerHTML = "Please enter a valid email";
      e.preventDefault();
      return false;
    } else {
      email.nextElementSibling.innerHTML = "";
      return true;
    }
  }
}

function phoneNumberCheck(digit, e) {
  if (digit.value !== "") {
    if (!regEx.phoneNumber.test(digit.value)) {
      digit.nextElementSibling.innerHTML = "Please enter a valid phone number";
      e.preventDefault();
      return false;
    } else {
      digit.nextElementSibling.innerHTML = "";
      return true;
    }
  }
}

function validateForm(e) {
  required(email, e);
  required(password, e);
  required(confirmPassword, e);
  required(firstName, e);
  required(lastName, e);
  required(phoneNumber, e);
  passwordCheck(password, confirmPassword, e);
  emailCheck(email, e);
  phoneNumberCheck(phoneNumber, e);
  return true;
}

submitForm.addEventListener("submit", validateForm);

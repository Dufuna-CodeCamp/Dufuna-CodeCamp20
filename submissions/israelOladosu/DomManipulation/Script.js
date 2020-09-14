let submitForm = document.getElementById("validateForm"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("pswd"),
  firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  phoneNumber = document.getElementById("phone"),
  newsEmail = document.getElementById("newsEmail"),
  newsLetter = document.getElementById("newsLetter");

var regEx = {
  name: /[A-Za-z]/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&_<>':;])(?=.*[\d])[a-zA-Z0-9@$!%*?&_<>':;]{6,}$/,
  email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i,
  phoneNumber: /^[+0-9]{11,}$/,
};

function required(field, e, reg, errMsg, err) {
  if (field.value == "") {
    field.nextElementSibling.innerHTML = errMsg;
    e.preventDefault();
    return false;
  } else if (!reg.test(field.value)) {
    field.nextElementSibling.innerHTML = err;
    e.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function passwordMatch(pswd1, pswd2, e) {
  if (pswd1.value.trim() !== pswd2.value.trim()) {
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

function validateForm(e) {
  required(
    email,
    e,
    regEx.email,
    `Please enter your ${email.previousElementSibling.innerText}`,
    "Please enter a valid email"
  );
  required(
    password,
    e,
    regEx.password,
    `Please enter your ${password.previousElementSibling.innerText}`,
    "Your password should have a minimum of 5 characters, 1 capital letter, 1 special character eg @ and 1 number."
  );
  required(
    confirmPassword,
    e,
    regEx.password,
    `Please confirm your password`,
    "Your password should have a minimum of 5 characters, 1 capital letter, 1 special character eg @ and 1 number."
  );
  required(
    firstName,
    e,
    regEx.name,
    `Please enter your ${firstName.previousElementSibling.innerText}`,
    `${firstName.previousElementSibling.innerText} must not contain special character`
  );
  required(
    lastName,
    e,
    regEx.name,
    `Please enter your ${lastName.previousElementSibling.innerText}`,
    `${lastName.previousElementSibling.innerText} must not contain special character`
  );
  required(
    phoneNumber,
    e,
    regEx.phoneNumber,
    `Please enter your ${phoneNumber.previousElementSibling.innerText}`,
    "Please enter a valid phone number"
  );
  passwordMatch(password, confirmPassword, e);
  return true;
}

submitForm.addEventListener("submit", validateForm);

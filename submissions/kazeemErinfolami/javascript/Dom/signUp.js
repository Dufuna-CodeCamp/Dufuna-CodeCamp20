let submit = document.getElementById("formValidation"),
  firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  phoneNo = document.getElementById("phoneNo"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirmPassword");

//required Error message
let firstNameRequired = "⚠️Please enter your First Name",
  lastNameRequired = "⚠️Please enter your Last Name",
  phoneNoRequired = "⚠️Please enter your PhoneNo",
  emailRequired = "⚠️Please enter your email",
  passwordRequired = "⚠️Please enter your password",
  confirmPasswordRequired = "⚠️Please enter same password as above";

//required validation Error message
let firstError = "",
  lastError = "",
  phoneNoError = "⚠️Please enter a valid PhoneNo",
  emailError = "⚠️Please enter a valid email",
  passwordError =
    "⚠️Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.",
  confirmPasswordError = "⚠️Your password don't match";

//validation
function validation(
  field,
  regExp,
  fieldRequiredError,
  fieldErrorMessage,
  event
) {
  if (field.value === "") {
    field.nextElementSibling.innerHTML = fieldRequiredError;
    event.preventDefault();
    return false;
  } //match
  if (!field.value.match(regExp)) {
    field.nextElementSibling.innerHTML = fieldErrorMessage;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

//RegEx
let name = "",
  phoneReg = /^[+]?[0-9]{8,13}$/,
  emailReg = /[a-z0-9]+@[a-z]+\.com$/i,
  passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
  confirmPasswordReg = password.value;

function formValidation(e) {
  //checkValidation
  validation(firstName, name, firstNameRequired, firstError, e);
  validation(lastName, name, lastNameRequired, lastError, e);
  validation(phoneNo, phoneReg, phoneNoRequired, phoneNoError, e);
  validation(email, emailReg, emailRequired, emailError, e);
  validation(password, passwordReg, passwordRequired, passwordError, e);
  validation(
    confirmPassword,
    confirmPasswordReg,
    confirmPasswordRequired,
    confirmPasswordError,
    e
  );
}

submit.addEventListener("submit", formValidation);

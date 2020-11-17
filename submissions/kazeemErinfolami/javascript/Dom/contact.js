let submit = document.getElementById("formValidation"),
  fullName = document.getElementById("fullName"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message");

//required Error message
let fullNameRequired = "⚠️Please enter your Name",
  emailRequired = "⚠️Please enter your Email Address",
  subjectRequired = "⚠️Please enter a message subject",
  messageRequired = "⚠️Please enter your Message";

//required validation Error message
let fullNameError = "no special cha",
  emailError = "⚠️Please enter a valid email",
  subjectError = "",
  messageError = "";

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
  emailReg = /[a-z0-9]+@[a-z]+\.com$/i,
  subjectReg = "",
  messageReg = "";

function formValidation(e) {
  //checkValidation
  validation(fullName, name, fullNameRequired, fullNameError, e);
  validation(email, emailReg, emailRequired, emailError, e);
  validation(subject, subjectReg, subjectRequired, subjectError, e);
  validation(message, messageReg, messageRequired, messageError, e);
}

submit.addEventListener("submit", formValidation);

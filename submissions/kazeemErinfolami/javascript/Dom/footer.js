let newsSubmit = document.getElementById("newsLetter"),
  newsEmail = document.getElementById("newsEmail");

//required Error message
let newsEmailRequired = "⚠️Please enter your email";
//required validation Error message
let newsEmailError = "⚠️Please enter a valid email";

//validation
function newsValidation(
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
let newsEmailReg = /[a-z0-9]+@[a-z]+\.com$/i;

function newsFormValidation(e) {
  //checkValidation
  newsValidation(newsEmail, newsEmailReg, newsEmailRequired, newsEmailError, e);
  
}

newsSubmit.addEventListener("submit", newsFormValidation);

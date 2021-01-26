let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let nameRegex = /^[_A-z]*([_A-z])*$/g;
let emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(.\w{3,4})+$/;
let msgRegex = /./



function fieldValidation(field, Regex, errorMesg1, errorMesg2, event) {
    if (field.value === "") {
      field.nextElementSibling.innerHTML = errorMesg1;
      event.preventDefault();
      return false;
    }
    if (!field.value.match(Regex)) {
      field.nextElementSibling.innerHTML = errorMesg2;
      event.preventDefault();
      return false;
    } else {
      field.nextElementSibling.innerHTML = "";
      return true;
    }
  }
function validateForm(event) {
    fieldValidation(
      fullName,
      nameRegex,
      "Please enter your Name",
      "Special Characters Not Acceptable",
      event);
    fieldValidation(
      email,
      emailRegex,
      "Please enter your Email Address",
      "Please enter a Valid Email",
      event);
    fieldValidation(
      subject,
      msgRegex,
      "Please enter a message subject",
      "Please enter a message subject",
      event);
    fieldValidation(
      message,
      msgRegex,
      "Please enter your message",
      "Please enter your message",
      event);

      return true;
}

submitForm.addEventListener("submit", validateForm);



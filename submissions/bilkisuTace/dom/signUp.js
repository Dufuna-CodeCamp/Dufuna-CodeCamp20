let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let phoneNumber = document.getElementById('phoneno');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('cpassword');
let nameRegex = /^[_A-z]*([_A-z])*$/g;
let phoneNumberRegex = /^[+]{0,1}[0-9]{11,13}$/i;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
let passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).(?=.{6,})$/;


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
      firstName,
      nameRegex,
      "Please enter your First Name",
      "Special Characters not acceptable",
      event);
    fieldValidation(
      lastName,
      nameRegex,
      "Please enter your Last Name",
      "Special Characters not acceptable",
      event);
    fieldValidation(
      phoneNumber,
      phoneNumberRegex,
      "Please enter your Phone Number",
      "Please enter a Valid Phone number",
      event);
    fieldValidation(
      email,
      emailRegex,
      "Please enter your Email Address",
      "Please enter a Valid Email",
      event);
    fieldValidation(
      password,
      passwordRegex,
      "Please enter your Password",
      "Your password should have a minimum of 6 characters, 1 Capital letter, 1 Special Character eg @ and 1 Number.",
      event);
    fieldValidation(
      confirmPassword,
      passwordRegex,
      "Please confirm your Password",
      "Your passwords don't match",
      event);

      return true;
}

submitForm.addEventListener("submit", validateForm);



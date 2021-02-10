let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastName');
let phonenumber = document.getElementById('phonenumber');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirmpassword');
let nameRegex = /^[_A-z]*([_A-z])*$/g;
let phoneNumberRegex = /^[-]?[0-9]{10,14}$/i;
let emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(.\w{3,4})+$/;
let passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).(?=.{6,})$/;


function fieldValidation(field, Regex, errorMsg1, errorMsg2, event) {
    if (field.value === "") {
      field.nextElementSibling.innerHTML = errorMsg1;
      event.preventDefault();
      return false;
    }
    if (!field.value.match(Regex)) {
      field.nextElementSibling.innerHTML = errorMsg2;
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
      "Special Characters Not Acceptable",
      event);
    fieldValidation(
      lastName,
      nameRegex,
     "Please enter your Last Name",
     "Special Characters Not Acceptable",
     event);
    fieldValidation(
      phonenumber,
      phoneNumberRegex,
      "Please enter your phonenumber",
      "Please enter a valid phonenumber",
      event);
    fieldValidation(
      email,
      emailRegex,
      "Please enter your mail Address",
      "Please enter a Valid mail",
      event);
    fieldValidation(
      password,
      passwordRegex,
      "Please enter your password",
      "Your password should hav a minimum of 6 characters, 1 capital letter , 1 special character eg @ and 1 number.",
      event);
    fieldValidation(
      confirmpassword,
      password,
      "Please confirm your Password",
      "Your passwords don't match.",
      event);

      return true;
}

submitForm.addEventListener("submit", validateForm);
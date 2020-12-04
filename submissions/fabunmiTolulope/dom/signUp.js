let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let phoneNumber = document.getElementById('phone-number');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
const nameRegex = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g;
const phoneNumberRegex = /^[-]?[0-9]{10,14}$/i;
const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,6})+$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/;


function validation(field, Regex, errorMessage1, errorMessage2, event) {
    if (field.value === "") {
      field.nextElementSibling.innerHTML = errorMessage1;
      event.preventDefault();
      return false;
    }
    if (!field.value.match(Regex)) {
      field.nextElementSibling.innerHTML = errorMessage2;
      event.preventDefault();
      return false;
    } else {
      field.nextElementSibling.innerHTML = "";
      return true;
    }
  }
function validateForm(event) {
    validation(
      firstName,
      nameRegex,
      "Please enter your First Name",
      "Special Characters are not allowed",
      event
    );
    validation(
      lastName,
      nameRegex,
      "Please enter your Last Name",
      "Special Characters are not allowed",
      event
    );
    validation(
      phoneNumber,
      phoneNumberRegex,
      "Please enter your Phone Number",
      "Please enter a valid phone number",
      event
    );
    validation(
      email,
      emailRegex,
      "Please enter your Email Address",
      "Please enter a valid Email",
      event
    );
     validation(
        password,
        passwordRegex,
        "Please enter your password",
        "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number",
        event
	);
    validation(
         confirmPassword,
         passwordRegex,
         "Please confirm your Password",
         "Your passwords don't match",
         event
	);
        return true;
  }

submitForm.addEventListener("submit", validateForm);



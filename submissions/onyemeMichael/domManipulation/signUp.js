let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phone-no');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cpassword = document.getElementById('conPass');

const nameRegex = /^[a-z]+$/i,
      phoneRegex = /^[+0-9]+$/i,
      emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/,
      passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;

function formValidation(field, regEx, errorMsg1, errorMsg2, event){
    if(field.value == ''){
        field.nextElementSibling.nextElementSibling.innerHTML= errorMsg1;
        event.preventDefault();
        return false;
    } else if (!(field.value.match(regEx))){
        field.nextElementSibling.nextElementSibling.innerHTML = errorMsg2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
  formValidation(
    firstName, 
    nameRegex, 
    "Please enter your first name",
    "Please enter a valid name",
    e
  );

  formValidation(
    lastName,
    nameRegex, 
    "Please enter your last name",
    "Please enter a valid name",
    e
    );

  formValidation(
    phoneNumber,
    phoneRegex, 
    "Please enter a phone number",
    "Please enter a valid phone number",
    e
  );

  formValidation(
    email, 
    emailRegex,
    "Please enter your email address",
    "Please enter a valid email address",
    e
  );
  formValidation(
    password, 
    passwordRegex, 
    "Please enter your password",
    "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number", e
  );

  formValidation(
    cpassword, 
    password.value,
  " please confirm your password",
  "You passwords do not match", 
  e
);

  return true;
}

submitForm.addEventListener("submit", validateForm);
let submitForm = document.getElementById('sign-form');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let phoneNumber = document.getElementById('phone');
let emailSignup = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm');


var alphaExp = /^[a-zA-Z ]+$/;
var numericExp = /^[+]*[0-9]+$/;
var emailExp =/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,4})+$/;
var passExp =/^(?=(.*[\d]){1,})(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[\W]){1,}).{6,}$/;


function fieldValidation(field, fieldRegex, error1, error2, event) {

    if(field.value === "") {
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
    } else if (!field.value.match(fieldRegex)) {
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function confirmPasswordValidation(event) {
    if (confirmPassword.value === "")  {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your password";
        event.preventDefault();
    } else if (!(password.value == confirmPassword.value)) {
        confirmPassword.nextElementSibling.innerHTML = "Your passwords don't match";
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validationsubmitForm(event) {
    fieldValidation(firstName, alphaExp, "Please enter your first name", "Please First Name can only contain letters.", event);
    fieldValidation(lastName, alphaExp, "Please enter your last name", "Please Last Name can only contain letters." , event);
    fieldValidation( phoneNumber, numericExp, "Please enter your phone number", "Please enter a valid phone number", event);
    fieldValidation( emailSignup, emailExp, "Please enter your email address", "Please enter a valid email", event);
    fieldValidation( password, passExp, "Please enter your password  ", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.", event);
    confirmPasswordValidation(event);
    return true;
}

submitForm.addEventListener("submit", validationsubmitForm);

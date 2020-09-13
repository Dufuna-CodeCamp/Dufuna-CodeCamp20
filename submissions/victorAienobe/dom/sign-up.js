let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let firstNameMsg = 'Please enter your First name';
let lastNameMsg = 'Please enter your Last name';
let phoneMsg = 'Please enter your Phone Number';
let phoneErrorMsg = 'Please enter a valid phone number';
let emailMsg = 'Please enter your Email Address';
let emailErrorMsg = 'Please enter a valid email';
let pwdMsg =  'Please enter your Password';
let pwdErrorMsg = 'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number';
let confirmPwdMsg = 'Please confirm your Password';
let confirmPwdErrorMsg = 'Your passwords don\'t match';

function validateRegex(field, regex, error1, error2, event) {
    if(field.value === "") {
      field.nextElementSibling.innerHTML = error1;
      event.preventDefault();
      return false;
    } else if (!(field.value.match(regex))) {
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
        }
    else {
      field.nextElementSibling.innerHTML = "";
      return true;
    }
}

function validateForm(e) {
    validateRegex(firstName, /^[a-z]+$/i, firstNameMsg, firstNameMsg, e);
    validateRegex(lastName, /^[a-z]+$/i, lastNameMsg, lastNameMsg, e);
    validateRegex(phoneNumber, /^[+0-9]+$/, phoneMsg, phoneErrorMsg, e);
    validateRegex(email, /[a-z0-9]+@[a-z]+\.com$/i, emailMsg, emailErrorMsg, e);
    validateRegex(password, /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%_^&*-]).{6,}$/, pwdMsg, pwdErrorMsg, e);
    validateRegex(confirmPassword, password.value, confirmPwdMsg, confirmPwdErrorMsg, e);
    return true; 
}

submitForm.addEventListener('submit', validateForm);
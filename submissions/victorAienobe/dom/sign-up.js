let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

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
    validateRegex(firstName, /^[a-z]+$/i, 'Please enter your First name', 'Please enter your First name', e);
    validateRegex(lastName, /^[a-z]+$/i, 'Please enter your Last name', 'Please enter your Last name', e);
    validateRegex(phoneNumber, /^[+0-9]+$/, 'Please enter your Phone Number', "Please enter a valid phone number", e);
    validateRegex(email, /[a-z0-9]+@[a-z]+\.com$/i, 'Please enter your Email Address', 'Please enter a valid email', e);
    validateRegex(password, /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%_^&*-]).{6,}$/, 'Please enter your Password', 'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number', e);
    validateRegex(confirmPassword, password.value, 'Please confirm your Password', 'Your passwords don\'t match', e);
    return true; 
}

submitForm.addEventListener('submit', validateForm);
// //target the form element and all input fields 
let submitForm = document.querySelector('#validateForm'),
    firstName = document.querySelector('#firstName'),
    lastName = document.querySelector('#lastName'),
    phoneNumber = document.querySelector('#phoneNumber'),
    email = document.querySelector('#email'),
    password = document.querySelector('#passWord');
    confirmPassword = document.querySelector('#confirmPassword')

// this function makes sure all required fields are filled
function required(field, event) {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = 'This is a required field!';
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true; 
    }
}

// add EventListener
function validateForm(e) {
    required(firstName, e);
    required(lastName, e);
    required(phoneNumber, e);
    required(email, e);
    required(password, e);
    required(confirmPassword, e);
    firstNameValidation(e)
    lastNameValidation(e)
    emailFieldValidation(e);
    passwordValidation(e);
    confirmPassWordValidation(e);
    phoneNumberValidation(e);
    
    return true;
}

// firstName field validation
function firstNameValidation(event) {
    let firstNameRegex = /^[a-zA-Z]+$/i;
    if (!firstName.value.match(firstNameRegex)) {
        firstName.nextElementSibling.innerHTML = 'Please enter your First Name';
        event.preventDefault();
        return false;
    } else {
        firstName.nextElementSibling.innerHTML = '';
        return true;
    }
}

// lastName field validation
function lastNameValidation(event) {
    let lastNameRegex = /^[a-zA-Z]+$/i;
    if (!lastName.value.match(lastNameRegex)) {
        lastName.nextElementSibling.innerHTML = 'Please enter your Last Name';
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.innerHTML = '';
        return true;
    }
}

// phone number field validation
function phoneNumberValidation(event) {
    let phoneRegEx = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (phoneNumber.value == '') {
        phoneNumber.nextElementSibling.innerHTML = 'Please enter your phone number';
        event.preventDefault();
        return false;
    } else if (!phoneNumber.value.match(phoneRegEx)) {
        phoneNumber.nextElementSibling.innerHTML = 'Please enter a valid phone number';
        event.preventDefault();
        return false;
    } else {
        phoneNumber.nextElementSibling.innerHTML = '';
        return true;
    }
}

// email field validation 
function emailFieldValidation(event) {
    let emailRegex = /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = 'Please enter a valid email';
        event.preventDefault();
        return false;
    } else if (email.value == '') {
        email.nextElementSibling.innerHTML = 'Please enter your email address'
    } else {
        email.nextElementSibling.innerHTML = '';
        return true;
    }
}

// password field validation
function passwordValidation(event) {
    let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.value == '') {
        password.nextElementSibling.innerHTML = 'Please enter your password';
        event.preventDefault();
        return false;
    } else if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = 'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character and 1 number';
        event.preventDefault();
        return false;
    } else if (!password.value.length >= 6) {
        password.nextElementSibling.innerHTML = 'Please enter your password';
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.innerHTML = '';
        return true;
    }
}

function confirmPassWordValidation(event) {
    if (!confirmPassword.value.match(password.value)) {
        confirmPassword.nextElementSibling.innerHTML = 'Your passwords don\'t match';
        event.preventDefault();
        return false;
    } else if (confirmPassword.value == '') {
        confirmPassword.nextElementSibling.innerHTML = 'Please confirm your password';
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = '';
        return true;
    }
}

submitForm.addEventListener('submit', validateForm);


let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

function validateNames(field, event) {
    let regex = /^[a-z]+$/i;
    if(field.value === "") {
      firstName.nextElementSibling.innerHTML = 'Please enter your First name';
      lastName.nextElementSibling.innerHTML = 'Please enter your Last name';
      event.preventDefault();
      return false;
    } else if (!field.value.match(regex)) {
    event.preventDefault();
    return false;
    } else {
      field.nextElementSibling.innerHTML = "";
      return true;
    }
} 

function validatePhoneNumber(event) {
    let phoneRegex = /^[+0-9]+$/;
    if(phoneNumber.value === '') {
        phoneNumber.nextElementSibling.innerHTML = 'Please enter your Phone Number';
        event.preventDefault();
        return false;
    } else if (!phoneNumber.value.match(phoneRegex)) {
        phoneNumber.nextElementSibling.innerHTML = 'Please enter a valid phone number';
        event.preventDefault();
        return false;
    } else {
        phoneNumber.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validateEmail(event) {
    let emailRegex = /[a-z0-9]+@[a-z]+\.com$/i;
    if(email.value === '') {
        email.nextElementSibling.innerHTML = 'Please enter your Email Address';
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = 'Please enter a valid email';
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validatePassword(event) {
    let pwdRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%_^&*-]).{6,}$/;
    if (password.value === '') {
        password.nextElementSibling.innerHTML = 'Please enter your Password';
        event.preventDefault();
        return false;
    } else if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = 'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number';
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.innerHTML = '';
        return true;
    }
} 

function validateConfirmPassword(event) {
    if (confirmPassword.value === '') {
        confirmPassword.nextElementSibling.innerHTML = 'Please confirm your Password';
        event.preventDefault();
        return false;
    } else if (!(confirmPassword.value === password.value)) {
        confirmPassword.nextElementSibling.innerHTML = 'Your passwords don\'t match';
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validateForm(e) {
    validateNames(firstName, e);
    validateNames(lastName, e);
    validatePhoneNumber(e);
    validateEmail(e);
    validatePassword(e);
    validateConfirmPassword(e);
    return true; 
}

submitForm.addEventListener('submit', validateForm);
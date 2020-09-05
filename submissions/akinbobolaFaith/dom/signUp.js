let signupForm = document.querySelector('.information'),
    firstName = document.getElementById('fname'),
    lastName = document.getElementById('lname'),
    phoneNumber = document.getElementById('pnumber'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('cpassword')
;

function important (field, event) {
    if(field.value == '') {
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function firstNameValidation(event) {
    let firstNameRegex = /^[a-z]+$/i;
    if(!firstName.value.match(firstNameRegex)) {
        firstName.nextElementSibling.innerHTML = "Please enter your First Name";
        event.preventDefault();
        return false;
    }  else {
        firstName.nextElementSibling.innerHTML = "";
        return true;
    }
} 

function lastNameValidation(event) {
    let lastNameRegex = /^[a-z]+$/i;
    if(!lastName.value.match(lastNameRegex)) {
        lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
        event.preventDefault();
        return false;
    } else {
        lastName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function phoneNumberValidation(event) {
    let phoneNumberRegex = /^[\+]?[0-9]{10,14}$/i;
    if (phoneNumber.value.length === 0) {
        phoneNumber.nextElementSibling.innerHTML = "Please enter your phone number";
        event.preventDefault();
        
    } else if (!phoneNumber.value.match(phoneNumberRegex)) {
        phoneNumber.nextElementSibling.innerHTML = "Please enter a valid phone number";
        event.preventDefault();
        return false;
    } else {
        phoneNumber.nextElementSibling.innerHTML = "";
        return true;
    }
}
    
function emailValidation(event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    if (email.value.length === 0) {
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    } else if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

function passwordValidation(event) {
    let pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/;
    if (password.value.length === 0) {
        password.nextElementSibling.innerHTML = "Please enter your Password";
        event.preventDefault();
    } else if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}

function confirmPasswordValidation(event) {
    if (confirmPassword.value.length === 0)  {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
    } else if ((password.value && password.value) !== confirmPassword.value) {
        confirmPassword.nextElementSibling.innerHTML = "Your password don't match";
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function information(e) {
    important(firstName, e);
    important(lastName, e);
    important(phoneNumber, e);
    important(email, e);
    important(password, e);
    important(confirmPassword, e);
    firstNameValidation(e);
    lastNameValidation(e);
    phoneNumberValidation(e);
    emailValidation(e);
    passwordValidation(e);
    confirmPasswordValidation(e);
    return true;
}


signupForm.addEventListener("submit", information);
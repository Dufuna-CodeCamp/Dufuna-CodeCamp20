let submitForm = document.getElementById('validateSignUp'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phoneNumber = document.getElementById('phoneNumber'),
    emailAddress = document.getElementById('emailAddress'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword')
;

function required(field, event) {
    if(field.value === '') {
        field.nextElementSibling.innerHTML = "This is a required field";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function fNameValidation(event){
    let fNameRegex = /^[A-Za-z]+$/;
    if(!firstName.value.match(fNameRegex)){
        firstName.nextElementSibling.innerHTML = "Please enter your first name";
        event.preventDefault();
        return false;
    }else{
        firstName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function lNameValidation (event){
    let lNameRegex = /^[A-Za-z]+$/;
    if(!lastName.value.match(lNameRegex)){
        lastName.nextElementSibling.innerHTML = "Please enter your last name";
        event.preventDefault();
        return false;
    }else{
        lastName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function phoneValidation(event){
    let phoneRegex = /^[+]?[0-9]{8,14}$/i;
    if(phoneNumber.value === ""){
        phoneNumber.nextElementSibling.innerHTML = "Please enter the phone number";
        event.preventDefault();
        return false;
    }else if (!phoneNumber.value.match(phoneRegex)){
        phoneNumber.nextElementSibling.innerHTML = "Please enter a valid number";
        event.preventDefault();
    }else{
        phoneNumber.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailValidation(event){
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(emailAddress.value === ""){
        emailAddress.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    }else if (!emailAddress.value.match(emailRegex)){
        emailAddress.nextElementSibling.innerHTML ="Please enter a valid email";
        event.preventDefault();
    }else{
        emailAddress.nextElementSibling.innerHTML = "";
        return true;
    }
}

function passwordValidation(event){
    let passRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");
    if (password.value === ""){
        password.nextElementSibling.innerHTML = "Please enter the password ";
        event.preventDefault();
        return false;
    }else if (!password.value.match(passRegex)){
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters,1 capital letter,1 special character eg @ and number 1";
        event.preventDefault();
        return false;
    }else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}

function passwordConfirmation(event){
    if (confirmPassword.value === ""){
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your password ";
        event.preventDefault();
        return false;
    }else if(confirmPassword.value != password.value){
        confirmPassword.nextElementSibling.innerHTML = "Your password dont match";
        event.preventDefault();
        return false;
    }else{
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateSignUp(e) {
    required(firstName, e);
    required(lastName, e);
    required(emailAddress, e);
    required(password, e);
    required(confirmPassword, e);
    fNameValidation(e);
    lNameValidation(e);
    phoneValidation(e);
    emailValidation(e);
    passwordValidation(e);
    passwordConfirmation(e);
    return true;
}
submitForm.addEventListener("submit",validateSignUp);


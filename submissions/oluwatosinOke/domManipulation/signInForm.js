let form = document.getElementById('validateForm'),
firstName = document.getElementById("firstName"),
lastName = document.getElementById("lastName"),
phoneNumber = document.getElementById("phoneNumber"),
formEmail = document.getElementById("formEmail"),
password = document.getElementById("password"),
confirmPassword = document.getElementById("confirmPassword");
const nameRegex = /^[a-zA-Z]/,
    phoneRegex = /^[+]?[0-9]{8,14}$/,
    formEmailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/,
    passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', formValidation, false);
});

function validation(field, regExp, error, errorMess1, event){
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = errorMess1;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function formValidation(event) {
validation(
    firstName,
    nameRegex,
    "Please enter your First Name",
    "Please enter a valid First Name",
    event
);
validation(
    lastName,
    nameRegex,
    "Please enter your Last Name",
    "Please enter a valid Last Name",
    event
);
validation(
    phoneNumber,
    phoneRegex,
    "Please enter your Phone Number",
    "Please enter a valid Phone Number",
    event
);
validation(
    formEmail,
    formEmailRegex,
    "Please enter your email",
    "Please enter a valid email",
    event
);
validation(
    password,
    passwordRegex,
    "Please enter your password",
    "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.",
    event
);
validation(
    confirmPassword,
    passwordRegex,
    "Please confirm your Password",
    "Your password don't match",
    event
);
return true;
}
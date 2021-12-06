let submitForm = document.getElementById("validateForm"),
    firstName = document.getElementById('fname'),
    lastName = document.getElementById('lname'),
    otherName = document.getElementById('oname'),
    phoneNumber = document.getElementById('phoneno'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('password2');

//error messages
let firstNamefirstError = "Please enter your first name",
    firstNamesecondError = "Field can't contain special characters",
    lastNamefirstError = "Please enter your last name",
    lastNamesecondError = "Field can't contain special characters",
    phoneNumberfirstError = "Please enter your phone number",
    phoneNumbersecondError = "Please enter a valid phone number",
    emailfirstError = "Please enter your email address",
    emailsecondError = "Please enter a valid email address",
    passwordfirstError = "Please enter your password",
    passwordsecondError = "Your password should have a minimum of 6 characcters",
    confirmPasswordfirstError = "Please confirm your password",
    confirmPasswordsecondError = "Your passwords do not match";

//Regex
const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z]/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g;
const passwordRegex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);

//validation of elements
function validateField(field, Regex, firstError, secondError, event) {
    if (field.value == "") {
        field.nextElementSibling.innerHTML = firstError;
        event.preventDefault();
        return false;
    } else if (!field.value.match(Regex)) {
        field.nextElementSibling.innerHTML = secondError;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

//confirm password validation

function confirmPasswordValidation(event){
    if (confirmPassword == "") {
        confirmPassword.nextElementSibling.innerHTML = confirmPasswordfirstError;
        event.preventDefault();
        return false;
    } else if (!(confirmPassword.value === password.value)) {
        confirmPassword.nextElementSibling.innerHTML = confirmPasswordsecondError;
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e) {
    validateField(firstName, nameRegex, firstNamefirstError, firstNamesecondError, e);
    validateField(lastName, nameRegex, lastNamefirstError, lastNamesecondError, e);
    validateField(phoneNumber, phoneRegex, phoneNumberfirstError, phoneNumbersecondError, e);
    validateField(email, emailRegex, emailfirstError, emailsecondError, e);
    validateField(password, passwordRegex, passwordfirstError, passwordsecondError, e);
    confirmPasswordValidation(e);
    return true;
}


submitForm.addEventListener("submit", validateForm);



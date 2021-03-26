let submitForm = document.getElementById('validateForm'),
email = document.getElementById('email'),
firstName = document.getElementById('firstName'),
lastName = document.getElementById('lastName'),
password = document.getElementById('password'),
confirmPassword = document.getElementById('confirmPassword'),
phoneNumber = document.getElementById('phoneNumber');

const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,10})+$/;
const nameRegex = /^[a-zA-Z]/;
const phoneNumberRegex = /^[+]?[0-9]{8,14}$/i;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;


//names,phone number, email input field function declaration
function validation(field, regex, event, result, error1) {
if (field.value === '') {
    field.nextElementSibling.innerHTML = result;
    event.preventDefault();
    return false;
} else if (!field.value.match(regex)) {
    field.nextElementSibling.innerHTML = error1;
    event.preventDefault();
    return false;
} else {
    field.nextElementSibling.innerHTML = "";
    return true;
}
}
//password function declaration
function validatePassword(password, confirmPassword, event) {

  if (password.value !== confirmPassword.value) {
    password.nextElementSibling.innerHTML = "Password do not match!";
    confirmPassword.nextElementSibling.innerHTML = "Password do not match!";
    event.preventDefault();
    return false;
} 

}


//called out the functions for submission
function validateForm(e) {

validation(firstName, nameRegex, e, "please enter your first name", "please enter a valid first name");
validation(lastName, nameRegex, e, "please enter your last name", "please enter a valid last name");
validation(phoneNumber, phoneNumberRegex, e, "please enter your phone number", "please enter a valid phone number");
validation(email, emailRegex, e, "please enter your email address", "please enter a valid email address");
validation(password ,passwordRegex, e, "please enter your password", "Your password should have a minimum of 6 characte, 1 capital letter, 1 special character eg @ and 1 number");
validation(confirmPassword,passwordRegex, e, "please confirm your password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number");
validatePassword(password,confirmPassword,e)
return true;

}
//Added an event listener
submitForm.addEventListener('submit', validateForm);




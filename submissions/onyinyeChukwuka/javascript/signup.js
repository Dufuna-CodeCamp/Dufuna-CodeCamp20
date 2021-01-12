let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let phoneNumber = document.getElementById('phonenumber');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('cpassword');
let signupbutton = document.getElementById('signupbutton');
const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z]/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g;
const passwordRegex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);

// to trigger the required error messages when the user clicks the signup button
signupbutton.addEventListener('submit', () => {
    validateInput(email, "Please enter your Email Address", "Please enter a valid email", emailRegex);
    validateInput(firstName, "Please enter your First Name", "Please enter a valid first name", nameRegex);
    validateInput(lastName, "Please enter your Last Name", "Please enter a valid last name", nameRegex);
    validateInput(phoneNumber, "Please enter your Phone Number", "Please enter a valid phone number", phoneRegex);
    validateInput(password, "Please enter your Password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number", passwordRegex);
    validateConfirmPassword(password, confirmPassword, "Your passwords don't match");
});


// to print out individual error messages according to the specific text fields
validateInput = (element, emptyElementMessage, validationFailedMessage, validationRegex) => {
    if (element.value === "") {
        element.nextElementSibling.innerHTML = emptyElementMessage;
        return false;
    }
    if (!validationRegex.test(element.value)) {
        element.nextElementSibling.innerHTML = validationFailedMessage;
        return false;  
    } else {
        element.nextElementSibling.innerHTML = "";
        return true; 
    }
}

validateConfirmPassword = (password, confirmPassword, validationFailedMessage) => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.nextElementSibling.innerHTML = validationFailedMessage;
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    } 
}
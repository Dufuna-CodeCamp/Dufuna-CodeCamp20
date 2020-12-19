let email = document.getElementById('email');
let submitbutton = document.getElementById('submitbutton');
const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// to trigger the required error message when the user clicks the submit button
submitbutton.addEventListener('click', () => {
    validateInput(email, "Please enter your Email Address", "Please enter a valid email", emailRegex);
});

// to print the error message
validateInput = (email,emptyElementMessage, validationFailedMessage, validationRegex) => {
    if (email.value === "") {
        email.nextElementSibling.innerHTML = emptyElementMessage;
        return false;
    }
    if (!validationRegex.test(email.value)) {
        email.nextElementSibling.innerHTML = validationFailedMessage;
        return false;  
    } else {
        email.nextElementSibling.innerHTML = "";
        return true; 
    }
}
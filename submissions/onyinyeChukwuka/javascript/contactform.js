let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let sendbutton = document.getElementById('sendbutton');
const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z]/;

// to trigger the required error messages when the user clicks the signup button
sendbutton.addEventListener('click', () => {
    validateInput(email, "Please enter your Email Address", "Please enter a valid email", emailRegex);
    validateInput(fullName, "Please enter your Name", "Please enter a valid first name", nameRegex);
    validateInput(subject, "Please enter a message subject");
    validateInput(message, "Please enter your Message");
});


// to print out individual error messages according to the specific text fields
validateInput = (element, email, fullName, emptyElementMessage, validationFailedMessage, validationRegex) => {
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

validateMessage= (element, subject, message, emptyElementMessage) => {
    if (element.value === "") {
        element.nextElementSibling.innerHTML = emptyElementMessage;
        return false;
    } else {
        element.nextElementSibling.innerHTML = "";
        return true;
    } 
}
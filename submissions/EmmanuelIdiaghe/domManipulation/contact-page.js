/*
    Form Validation: This helps to ensure that only the correct input type is entered in the individual fields.
*/
// Declaration of variables
let fullName        = document.getElementById('fullName'),
    emailAddress    = document.getElementById('emailAddress'),
    subject         = document.getElementById('subject'),
    message         = document.getElementById('message'),
    submitBtn       = document.getElementById('submitBtn'),
    fieldName       = "",
    errorMsg        = "",
    nameRegexMatch  = /^[A-Za-z ]*$/,
    emailRegexMatch = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;
    
//Regular Expression to ensure strict compliance with input formats
function regEx(name, regexMatch, event) {
    switch (name) {
        case fullName:
            fieldName = "Please enter your Name";
            errorMsg = "Please enter a valid name";
            break;
        case emailAddress:
            fieldName = "Please enter your Email Address";
            errorMsg = "Please enter a valid email";
            break;
        case subject:
            fieldName = "Please enter a message subject";
            break;
        case message:
            fieldName = "Please enter your Message";
            break;
    }

    if (name.value == "") {
        name.nextElementSibling.innerHTML = fieldName;
        event.preventDefault();
        return false;
    }
    
    if (!(name.value.match(regexMatch))) {
        name.nextElementSibling.innerHTML = errorMsg;
        event.preventDefault();
        return false;
    }

    if ((!(name.value == "")) && (name.value.match(regexMatch))) {
        name.nextElementSibling.innerHTML = "";
        return true;
    }
} 

//Function to validate form
function validateForm(event) {
    regEx(fullName, nameRegexMatch, event);
    regEx(emailAddress, emailRegexMatch, event);
    regEx(subject, "", event);
    regEx(message, "", event);
}

//Listening for action by the submit button
submitBtn.addEventListener("click", validateForm);
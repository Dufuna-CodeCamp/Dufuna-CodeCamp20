/*
    Form Validation: This helps to ensure that only the correct input type is entered in the individual fields.
*/
// Declaration of variables
let firstName       = document.getElementById('firstName'),
    lastName        = document.getElementById('lastName'),
    phone           = document.getElementById('phone'),
    email           = document.getElementById('email'),
    password        = document.getElementById('password'),
    confirmPass     = document.getElementById('confirmPass'),
    submitBtn       = document.getElementById('submitBtn'),
    fieldName       = "",
    errorMsg        = "",
    nameRegexMatch  = /^[A-Za-z]*$/,
    phoneRegexMatch = /[+][0-9]*$/,
    emailRegexMatch = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    passRegexMatch  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-])[0-9a-zA-Z$&+,:;=?@#|'<>.^*()%!-]{8,}$/;

//Regular Expression to ensure strict compliance with input formats
function regEx(name, regexMatch, event) {
    switch (name) {
        case firstName:
            fieldName = "Please enter your First Name";
            errorMsg = "Please enter a valid name";
            break;
    
        case lastName:
            fieldName = "Please enter your Last Name";
            errorMsg = "Please enter a valid name";
            break;
        case phone:
            fieldName = "Please enter your Phone Number";
            errorMsg = "Please enter a valid phone number";
            break;
        case email:
            fieldName = "Please enter your Email Address";
            errorMsg = "Please enter a valid email";
            break;
        case password:
            fieldName = "Please enter your Password";
            errorMsg = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
            break;
        case confirmPass:
            fieldName = "Please Confirm your Password";
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
    regEx(firstName, nameRegexMatch, event);
    regEx(lastName, nameRegexMatch, event);
    regEx(phone, phoneRegexMatch, event);
    regEx(email, emailRegexMatch, event);
    regEx(password, passRegexMatch, event);
    regEx(confirmPass, passRegexMatch, event);

    if(!(confirmPass.value == password.value) && (!(confirmPass.value == ""))) {
        confirmPass.nextElementSibling.innerHTML = "Your passwords don't match";
        event.preventDefault();
   }
}

//Listening for action by the submit button
submitBtn.addEventListener("click", validateForm);
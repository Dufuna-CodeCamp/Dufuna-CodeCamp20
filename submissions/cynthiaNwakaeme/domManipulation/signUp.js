let submitForm = document.getElementById("validateForm"),
    firstName = document.getElementById("firstName"),
    lastName = document.getElementById("lastName"),
    phoneNumber = document.getElementById("phoneNumber"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("confirmPassword");

// 2. Name Field Validation (To ensure input name has only alphabet)
// nameRegex: Any character from upper A to lower z
function validate(field, event, result, output) {
    const nameRegex = /^[a-zA-Z]/;

    if (field.value === "") {
        field.nextElementSibling.innerHTML = result; //When field is empty
        event.preventDefault();
        return false;
    } else if (!field.value.match(nameRegex)) {
        field.nextElementSibling.innerHTML = output; //When name has special characters or numbers
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}
// 2. Phone Field Validation (Ensure only integers and + are allowed)
//phoneRegex: I considered international numbers and office lines( >= 8 digits )
function phoneValidation(field, event) {
    const phoneRegex = /^[\+]?[0-9]{8,14}$/i;

    if (field.value === "") {
        field.nextElementSibling.innerHTML = "Please enter your Phone Number"; //When field is empty
        event.preventDefault();
        return false;
    } else if (!field.value.match(phoneRegex)) {
        field.nextElementSibling.innerHTML = "Please enter a valid Phone Number"; //When field has not a mail format
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

// 3. Email Field Validation (To ensure input type is in an email-address format)
// emailRegex: email format (outlook.com, gmail.com etc)
function emailValidation(field, event) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

    if (field.value === "") {
        field.nextElementSibling.innerHTML = "Please enter your Email";
        event.preventDefault();
        return false;
    } else if (!field.value.match(emailRegex)) {
        field.nextElementSibling.innerHTML = "Please enter a valid Email";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

// 4. Password Validation
function passwordValidation(password1, password2, event) {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;

    if ((password1.value && password2.value) === "") {
        password1.nextElementSibling.innerHTML = "Please enter your password";
        password2.nextElementSibling.innerHTML = "Please confirm your password";
        event.preventDefault();
        return false;
    } else if ((!password1.value.match(passwordRegex)) && (!password2.value.match(passwordRegex))) {
        password1.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        password2.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        event.preventDefault();
        return false;

    } else if (password.value !== password2.value) {
        password1.nextElementSibling.innerHTML = "Password don't match!";
        password2.nextElementSibling.innerHTML = "Password don't match!";
        event.preventDefault();
        return false;
    } else {
        password1.nextElementSibling.innerHTML = "";
        password2.nextElementSibling.innerHTML = "";
        return true;
    }
}

// 5. This function is used to call the validate function in 1-4 to the individual input field
function validateForm(event) {
    validate(firstName, event, "Please enter your First Name", "Please enter a valid First Name");
    validate(lastName, event, "Please enter your Last Name", "Please enter a valid Last Name");
    phoneValidation(phoneNumber, event);
    emailValidation(email, event);
    passwordValidation(password, confirmPassword, event)

    return true;
}
// To validate the form, an Event listener is added to the submit button
submitForm.addEventListener("submit", validateForm)
// sign-up form validation

let submitForm = document.getElementById('form'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phoneNumber = document.getElementById('phoneNumber'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword');
    nameRegex = "/^[A-Za-z]+$/",
    phoneNumberRegex = "/^[]?[0-9]{10,14}$/i/",
    emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",
    passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/,
    passwordError = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number."

function fieldValidation(field, fieldRegex, error_1, error_2, event) {
    
    if(field.value === "") {
        field.nextElementSibling.innerHTML = error_1;
        event.preventDefault();
    } else if (!field.value.match(fieldRegex)) {
        field.nextElementSibling.innerHTML = error_2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function confirmPasswordValidation(event) {
    if (confirmPassword.value === "")  {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
    } else if (!(password.value == confirmPassword.value)) {
        confirmPassword.nextElementSibling.innerHTML = "Your password don't match";
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function form(event) {
    fieldValidation(firstName, nameRegex, "Please enter your First name", "Please First Name can only contain letters.", event);
    fieldValidation(lastName, nameRegex, "Please enter your Last name", "Please Last Name can only contain letters." , event);
    fieldValidation(phoneNumber, phoneNumberRegex, "Please enter your phone number", "Please enter a valid phone number", event);
    fieldValidation(email, emailRegex, "Please enter your Email address", "Please enter a valid email", event);
    fieldValidation(password, passwordRegex, "Please enter your passwod", passwordError, event);
    confirmPasswordValidation(event);
    return true;
}

submitForm.addEventListener("submit", form);




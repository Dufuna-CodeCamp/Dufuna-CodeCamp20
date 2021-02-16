const submitform = document.getElementById("validateForm"),
    firstname = document.getElementById("firstname"),
    lastname = document.getElementById("lastname"),
    phonenumber = document.getElementById("phoneNumber"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    confirmpassword= document.getElementById("confirmpassword");

const nameRegex =  /^[a-zA-Z ]+$/,
    pnumberRegex = /^[+]*[0-9]+$/,
    emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,6})+$/,
    passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/;

function formValidation (field, Regex, error_one, error_two, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error_one;
        event.preventDefault();
        return false;
    } else if (!field.value.match(Regex)) {
        field.nextElementSibling.innerHTML = error_two;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm (e) {
    formValidation(firstname, nameRegex, "Please enter your first name", "No special characters", e);
    formValidation(lastname, nameRegex, "Please enter your last name", "No special characters", e);
    formValidation(phonenumber, pnumberRegex, "Please enter your Phone Number", "Please enter a valid phone number", e);
    formValidation(email, emailRegex, "Please enter your Email Address", "Please enter a valid email", e);
    formValidation(password, passwordRegex, "Please enter your Password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character e.g @ and 1 number.", e);
    formValidation(confirmpassword, passwordRegex, "Please confirm your Password", "Your password don't match", e);
    return true;
}

submitform.addEventListener("submit", validateForm);
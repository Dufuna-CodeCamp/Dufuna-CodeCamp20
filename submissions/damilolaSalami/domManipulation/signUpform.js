const submitform = document.getElementById("validateForm"),
    firstname = document.getElementById("firstname"),
    lastname = document.getElementById("lastname"),
    phonenumber = document.getElementById("phoneNumber"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    confirmpassword= document.getElementById("confirmpassword");

const nameval =  /^[a-zA-Z ]+$/,
    pnumberval = /^[+]*[0-9]+$/,
    emailval = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,6})+$/,
    passwordval = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/;

function formValidation (field, Reg, error_one, error_two, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error_one;
        event.preventDefault();
        return false;
    } else if (!field.value.match(Reg)) {
        field.nextElementSibling.innerHTML = error_two;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function pword(event) {
    pasword = password.value;
    cpasword = confirmpassword.value;
    if(pasword !== cpasword) {
        password.nextElementSibling.innerText = "Your password don't match";
        confirmpassword.nextElementSibling.innerText = "Your password don't match";
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.innerText = "";
        confirmpassword.nextElementSibling.innerText = "";
        return true;
    }
}

function validatedForm (e) {
    formValidation(firstname, nameval, "Please enter your first name", "No special characters", e);
    formValidation(lastname, nameval, "Please enter your last name", "No special characters", e);
    formValidation(phonenumber, pnumberval, "Please enter your Phone Number", "Please enter a valid phone number", e);
    formValidation(email, emailval, "Please enter your Email Address", "Please enter a valid email", e);
    formValidation(password, passwordval, "Please enter your Password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character e.g @ and 1 number.", e);
    formValidation(confirmpassword, passwordval, "Please confirm your Password", "Your password don't match", e);
    pword(e);
    return true;
}

submitform.addEventListener("submit", validatedForm);
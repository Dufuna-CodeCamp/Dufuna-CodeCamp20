// sign-up form validation

let submitForm = document.getElementById('form'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phoneNumber = document.getElementById('phoneNumber'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword');

function required(field, event){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false
    } 
    field.nextElementSibling.innerHTML = "";
    return true; 
}

function firstNameValidation(event){
    if(!(firstName.value = "")){
        firstName.nextElementSibling.innerHTML = "Please enter your First Name";
        event.preventDefault();
        return false
    } 
    firstName.nextElementSibling.innerHTML = "";
    return true;
}

function lastNameValidation(event){
    if(!(lastName.value = "")){
        lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
        event.preventDefault();
        return false
    } 
    lastName.nextElementSibling.innerHTML = "";
    return true;
}

function phoneNumberValidation(event){ 
    if((phoneNumber.value == "")){
        phoneNumber.nextElementSibling.innerHTML = "Please enter your Phone Number";
        event.preventDefault();
        return false
    } else {
        let phoneNumberRegrex = /^[]?[0-9]{10,14}$/i;
        if(!phoneNumber.value.match(phoneNumberRegrex)){
            phoneNumber.nextElementSibling.innerHTML = "Please enter a valid phone number";
            event.preventDefault();
            return false
        } else{
            phoneNumber.nextElementSibling.innerHTML = "";
            return true;
        }
    }
}

function emailValidation(event){
    if (email.value == ""){
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false
    } else{
        let emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.value.match(emailRegrex)){
            email.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault();
            return false
        } else{
            email.nextElementSibling.innerHTML = "";
            return true
        }
    }
}



function passwordValidation(event){
    if((password.value == "")){
        password.nextElementSibling.innerHTML = "Please enter your Password";
        event.preventDefault();
        return false
    } else{
        let passwordRegrex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/;

        if(!password.value.match(passwordRegrex)){
            password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.";
            event.preventDefault();
            return false
        } else{
            password.nextElementSibling.innerHTML = "";
            return true;
        }
    }
}

function confirmPasswordValidation(event){
    if((confirmPassword.value == "")){
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
    } else{
        if (password.value != confirmPassword.value){
            confirmPassword.nextElementSibling.innerHTML = "Your passwords don't match";
            event.preventDefault();
            return false;
        } else{
            confirmPassword.nextElementSibling.innerHTML = "";
            return true;
        }
    }
}


function form(e){
    required(firstName, e);
    required(lastName, e);
    required(phoneNumber, e);
    required(email, e)
    required(password, e);
    required(confirmPassword, e);
    firstNameValidation(e);
    lastNameValidation(e);
    phoneNumberValidation(e);
    emailValidation(e);
    passwordValidation(e);
    confirmPasswordValidation(e);
    return true;
}

submitForm.addEventListener("submit", form);
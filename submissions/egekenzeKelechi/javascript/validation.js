let form_validation = document.querySelector("#formValidation"),
    first_name = document.querySelector('#firstName'),
    last_name = document.querySelector('#lastName'),
    phone = document.querySelector('#phone'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    confirmPass = document.querySelector('#confirmPassword');


function validateNames(field, event){
    let regex = /^[0-9!@#\$%\^\&*\)\(+=._-]*$/g;

    // regex_specialChar_check
    if(field.value == ""){
        if(field.id == "firstName"){
            field.nextElementSibling.innerHTML = "Please enter your First Name";
            event.preventDefault();
            return false;
        }

        if(field.id == "lastName"){
            field.nextElementSibling.innerHTML = "Please enter your Last Name";
            event.preventDefault();
            return false;
        }
        
    }else if(field.value.match(regex)){
        field.nextElementSibling.innerHTML = "Special Characters are not allowed";
        event.preventDefault();
        return false;

    }else{

        
        console.log(field.value);
        field.nextElementSibling.innerHTML = "";
        return true;
    }

}

function validatePhone(field, event){
    if(field.value == ""){
        if(field.id == "phone"){
            field.nextElementSibling.innerHTML = "Please enter your Phone Number";
            event.preventDefault();
            return false;
        }
    }

    let number = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if(!field.value.match(number)){
        field.nextElementSibling.innerHTML = "Please enter a valid phone number";
        event.preventDefault();
        return false;
    }

    field.nextElementSibling.innerHTML = "";
    return true;

}

function validateEmail(field, event){
    if(field.value == ""){
        if(field.id == "email"){
            field.nextElementSibling.innerHTML = "Please enter your Email Address";
            event.preventDefault();
            return false;
        }
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!field.value.match(emailRegex)){
        field.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    }

    field.nextElementSibling.innerHTML = "";
    return true;
}

function validatePassword(field, field2, event){
    if(field.value == ""){
        if(field.id == "password"){
            field.nextElementSibling.innerHTML = "Please enter your Password";
            event.preventDefault();
            return false;
        }

        if(field.id == "confirmPassword"){
            field.nextElementSibling.innerHTML = "Please confirm your Password";
            event.preventDefault();
            return false;
        }        
    }

    if(field.value !== field2.value){
        field.nextElementSibling.innerHTML = "Your passwords don't match";
        event.preventDefault();
        return false;
    }

    let regularExpression = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{6,30}$/;
    if(!field.value.match(regularExpression)){
        field.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        event.preventDefault();
        return false;
    }

    field.nextElementSibling.innerHTML = "";
    return true;
}


function validate(e) {
    validateNames(first_name, e);
    validateNames(last_name, e);
    validatePhone(phone, e);
    validateEmail(email, e);
    validatePassword(password, confirmPass, e);
    validatePassword(confirmPass, password, e);
    
    return true;
}

form_validation.addEventListener('submit', validate);
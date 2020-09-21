let firstName   = document.getElementById('firstName'),
    lastName    = document.getElementById('lastName'),
    phone       = document.getElementById('phone'),
    email       = document.getElementById('email'),
    password    = document.getElementById('password'),
    confirmPass = document.getElementById('confirmPass'),
    submitBtn   = document.getElementById('submitBtn'),
    fieldName   = "",
    errorMsg    = "",
    nameRegexMatch  = /^[A-Za-z]*$/,
    phoneRegexMatch = /[+][0-9]*$/,
    emailRegexMatch = /^([a-zA-Z0-9_.\-]+)@([a-zA-Z0-9_.\-]+)\.([a-zA-Z]{2,5})$/,
    passRegexMatch  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-])[0-9a-zA-Z$&+,:;=?@#|'<>.^*()%!-]{8,}$/;

function required(field, event) {
    switch (field) {
        case firstName:
            fieldName = "Please enter your First Name";
            break;
        case lastName:
            fieldName = "Please enter your Last Name";
            break;
        case phone:
            fieldName = "Please enter your Phone Number";
            break;
        case email:
            fieldName = "Please enter your Email Address";
            break;
        case password:
            fieldName = "Please enter your Password";
            break;
        case confirmPass:
            fieldName = "Please Confirm your Password";
            break;
    }
    
    if (field.value == "") {
        field.nextElementSibling.innerHTML = fieldName;
        event.preventDefault();
        return false;
    }

    else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function Regex(name, RegexMatch, event) {
    switch (name) {
        case firstName:
            errorMsg = "Please enter a valid name";
            break;
    
        case lastName:
            errorMsg = "Please enter a valid name";
            break;
        case phone:
            errorMsg = "Please enter a valid phone number";
            break;
        case email:
            errorMsg = "Please enter a valid email";
            break;
        case password:
            errorMsg = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
            break;
    }
    
    if (!(name.value == "") && (!(name.value.match(RegexMatch)))) {
        name.nextElementSibling.innerHTML = errorMsg;
        event.preventDefault();
        return false;
    }
  
    if (!(name.value == "") && (name.value.match(RegexMatch))) {
        name.nextElementSibling.innerHTML = "";
        return true;
    }
}  

function confirmPassword(event) {
    if(!(confirmPass.value == password.value) && (!(confirmPass.value == ""))) {
         confirmPass.nextElementSibling.innerHTML = "Your passwords don't match";
         event.preventDefault();
    }
}

function validateForm(event) {
    required(firstName, event);
    required(lastName, event);
    required(phone, event);
    required(email, event);
    required(password, event);
    required(confirmPass, event);
    Regex(firstName, nameRegexMatch, event);
    Regex(lastName, nameRegexMatch, event);
    Regex(phone, phoneRegexMatch, event);
    Regex(email, emailRegexMatch, event);
    Regex(password, passRegexMatch, event);
    confirmPassword(event);
}

submitBtn.addEventListener("click", validateForm);
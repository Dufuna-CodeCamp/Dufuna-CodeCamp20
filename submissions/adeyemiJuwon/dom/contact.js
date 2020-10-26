let submitFormContact = document.getElementById('contact-form');
let emailContact = document.getElementById('email-contact');
let fullName = document.getElementById('fullName');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let fullNameRegex = "/^(a-z|A-Z|0-9)*[^#$%^&*()']*$/";
let emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";


function required(field, error, event){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}


function emailNameValidation(field, error1, error2, regex, event ){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
        return false;
    }else if (!field.value.match(regex)){
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateFormContact(event){
    required(subject, "Please enter a message subject", event );
    required(message, "Please enter your Message", event );
    emailNameValidation( fullName, "Please enter your Name","Please name should contain letters only", fullNameRegex, event );
    emailNameValidation( emailContact, "Please enter your Email Address","Please enter a valid email", emailRegex, event );
    return true;
}

submitFormContact.addEventListener('submit', validateFormContact);
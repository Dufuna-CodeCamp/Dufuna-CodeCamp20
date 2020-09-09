let submitFormContact = document.getElementById('contact-form');
let emailContact = document.getElementById('email-contact');
let fullName = document.getElementById('fullName');
let subject = document.getElementById('subject');
let message = document.getElementById('message');


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


function emailNameValidation(field, error, Regex, event ){
    if (!field.value.match(Regex)){
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateFormContact(){
    required(fullName, "Please enter your Name", event );
    required(emailContact, "Please enter your Email Address", event );
    required(subject, "Please enter a message subject", event );
    required(message, "Please enter your Message", event );
    emailNameValidation( fullName,"Please enter your Name", "/^(a-z|A-Z|0-9)*[^#$%^&*()']*$/", event );
    emailNameValidation( emailContact,"Please enter a valid email", "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", event );
    return true;
}

submitFormContact.addEventListener('submit', validateFormContact);
let submitFormContact = document.getElementById('contact-form');
let emailContact = document.getElementById('email-contact');
let fullName = document.getElementById('fullName');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

function emailNameValidation(field, event, error1, error2){
    if (!field.value.match(Regex)){
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
        return false;
    } else if(field.value === ""){
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function fullNameValidation(){
    Regex = /^(a-z|A-Z|0-9)*[^#$%^&*()']*$/;
    emailNameValidation(fullName, event, "Please enter your Name", "Please enter your Name");
    return true
    
}
function emailValidation(){
    Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailNameValidation(emailContact, event, "Please enter a valid email", "Please enter your Email Address");
    return true
}

function subjectMessageValidation(field, event, error, x){
    if(field.value === ""){
       document.querySelectorAll(".error-message")[x].innerHTML = error;
       event.preventDefault();
       return false;
    }else{
       document.querySelectorAll(".error-message")[x].innerHTML = "";
       return true;
    }
}
function subjectValidation(){
    subjectMessageValidation(subject, event, "Please enter a message subject", 0);
    return true
    
}
function messageValidation(){
    subjectMessageValidation(message, event, "Please enter your Message", 1);
    return true
    
}
function validateFormContact(){
    fullNameValidation();
    emailValidation();
    subjectValidation();
    messageValidation();
    return true;
}

submitFormContact.addEventListener('submit', validateFormContact);
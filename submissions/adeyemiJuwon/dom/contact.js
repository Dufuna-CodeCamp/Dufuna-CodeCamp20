let submitFormContact = document.getElementById('contact-form');
let emailContact = document.getElementById('email-contact');
let fullName = document.getElementById('fullName');
let subject = document.getElementById('subject');
let message = document.getElementById('message');



function fullNameValidation(event){
    fullNameRegex = /^(a-z|A-Z|0-9)*[^#$%^&*()']*$/;
    if (!fullName.value.match(fullNameRegex)){
        fullName.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
        return false;
    } else if(fullName.value === ""){
        fullName.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
        return false;
    }else{
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }
}
function emailValidation(event){
    emailContactRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailContact.value.match(emailContactRegex)){
        emailContact.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    }else if(emailContact.value === ""){
        emailContact.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    }else{
        emailContact.nextElementSibling.innerHTML = "";
        return true;
    }
}
function subjectValidation(event){
     if(subject.value === ""){
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
        return false;
     }else{
        subject.nextElementSibling.innerHTML = "";
        return true;
     }
}
function messageValidation(event){
    if(message.value === ""){
        document.querySelector(".error-message").innerHTML = "Please enter your Message";
       event.preventDefault();
       return false;
    }else{
    document.querySelector(".error-message").innerHTML= "";
       return true;
    }
}
function validateFormContact(e){
    fullNameValidation(event);
    emailValidation(event);
    subjectValidation(event);
    messageValidation(event)
    return true;
}

submitFormContact.addEventListener('submit', validateFormContact);
// Validation of contact.

let contactForm = document.getElementById("contact"),
    fullName = document.getElementById("fullName"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message");




function required(field, event){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false
    } 
    field.nextElementSibling.innerHTML = "";
    return true;
}

function fullNameValidation(event){
    let fullNameRegrex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!(fullName.value.match(fullNameRegrex))){
        fullName.nextElementSibling.innerHTML = "Please enter your Name";
        event.preventDefault();
        return false
    } else{
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailValidation(event){
    if (email.value == ""){
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false
    } else{
        let emailRegrex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
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

function subjectValidation(event){
    if((subject.value == "")){
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
        return false;
    } else{
        subject.nextElementSibling.innerHTML = "";
        return true;
    }
}

function messageValidation(event){
    if((message.value == "")){
        message.nextElementSibling.innerHTML = "Please enter your Message";
        event.preventDefault();
        return false;
    } else{
        message.nextElementSibling.innerHTML = "";
        return true;
    }
}

function contact(e){
    required(fullName, e);
    required(email, e);
    required(subject, e);
    required(message, e);
    fullNameValidation(e);
    emailValidation(e);
    subjectValidation(e);
    messageValidation(e);

    return true;
}


contactForm.addEventListener('submit', contact);

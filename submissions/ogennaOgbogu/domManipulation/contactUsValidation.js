let fullName = document.getElementById("full-name"),
    email2 = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message2"),
    submitMessage = document.getElementById("submit-text");

let emailAddressRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    fullNameRegex = /^[a-zA-Z]/;

function fullNameValidation(event){
    if (fullName.value == "") {
        fullName.nextElementSibling.innerHTML = "Please enter your name";
        event.preventDefault();
        return false;
    } else if (!fullName.value.match(fullNameRegex)) {
        fullName.nextElementSibling.innerHTML = "No special characters allowed";
        event.preventDefault();
        return false;
    } else {
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }    
}

function email2Validation(event){
    if (email2.value == "") {
        email2.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();
        return false;
    } else if (!email2.value.match(emailAddressRegex)) {
        email2.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        email2.nextElementSibling.innerHTML = "";
        return true;
    }    
}

function subjectValidation(event){
    if (subject.value == "") {
        subject.nextElementSibling.innerHTML = "Please enter a message subject";
        event.preventDefault();
        return false;
    } else {
        subject.nextElementSibling.innerHTML = "";
        return true;
    }
}


    function messageValidation(event){
        if (message.value == "") {
            message.nextElementSibling.innerHTML = "Please enter your message";
            event.preventDefault();
            return false;
        } else {
            message.nextElementSibling.innerHTML = "";
            return true;
        }
    }

function validateContactForm(e) {
    fullNameValidation(e);
    email2Validation(e);
    subjectValidation(e);
    messageValidation();
    return true;
}

submitMessage.addEventListener("click", validateContactForm);
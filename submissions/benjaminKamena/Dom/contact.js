// contact validation

let contactForm = document.getElementById("contact"),
    fullName = document.getElementById("fullName"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message"),
    nameRegex = "/^(a-z|A-Z|0-9)*[^#$%^&*()']*$/",
    emailRegex = "/^+([]?+)*@+([-]?+)*({2,3})+$/";


function required(field, error, event){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailNameValidation(field, error, regex, event){
    if(!field.value.match(regex)){
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else{
        field.nextElementSibling.innerHTML = "";
        return false;
    }
}

function contactValidation(event){
    required(fullName,"Please enter your Name", event)
    required(email, "Please enter your Email Address", event);
    required(subject, "Please enter a message subject", event);
    required(message, "Please enter your Message", event);
    emailNameValidation(fullName,"Please name should contain letters only", nameRegex, event);
    emailNameValidation(email, "Please enter a valid email", emailRegex, event);

    return true;
}

contactForm.addEventListener("submit", contactValidation);
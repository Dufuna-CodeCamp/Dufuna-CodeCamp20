// contact validation

let contactForm = document.getElementById("contact"),
    fullName = document.getElementById("fullName"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message"),
    nameRegex = "/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/",
    emailRegex = "/^+([]?+)*@+([-]?+)*({2,3})+$/";


function fieldValaidation(field, event, regex, error_1, error_2){
    if(field.value === ""){
        field.nextElementSibling.innerHTML = error_1;
        event.preventDefault();
        return false;
    } else if(!field.value.match(regex)){
        field.nextElementSibling.innerHTML = error_2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return false;
    }
}


function messageSubjectValidation(field, event, error){
    if(field.value === ""){
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }

}

function contactValidation(event){
    fieldValaidation(fullName, event, nameRegex, "Please enter your Name","Please name should contain letters only");
    fieldValaidation(email, event, emailRegex, "Please enter your Email Address", "Please enter a valid email");
    messageSubjectValidation(subject, event, "Please enter a message subject");
    messageSubjectValidation(message, event, "Please enter your Message");

    return true;
}

contactForm.addEventListener("submit", contactValidation);
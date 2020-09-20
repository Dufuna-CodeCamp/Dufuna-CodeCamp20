// contact validation

let contactForm = document.querySelector('#contact'),
    fullName = document.getElementById('fullName'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    nameRegex = "/^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/",
    emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/";
    


function fieldValaidation(event, field, fieldRegex, error_1, error_2){
    if(field.value === ''){
        field.nextElementSibling.innerHTML = error_1;
        event.preventDefault();
        return false;
    } else if(!field.value.match(fieldRegex)){
        field.nextElementSibling.innerHTML = error_2;
        event.preventDefault();
        return false;  
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function messageSubjectValidation(event, field, error){
    if(field.value === ''){
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }

}

function contactValidation(e){
    fieldValaidation(e, fullName, nameRegex, "Please enter your Name", "Please name should contain letters only");
    fieldValaidation(e, email, emailRegex, "Please enter your Email Address", "Please enter a valid email");
    messageSubjectValidation(e, subject,"Please enter a message subject");
    messageSubjectValidation(e, message, "Please enter your Message");
    return true;
}

contactForm.addEventListener("submit", contactValidation);
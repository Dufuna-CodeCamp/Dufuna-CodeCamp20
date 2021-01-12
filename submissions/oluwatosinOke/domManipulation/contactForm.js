let form = document.getElementById('validateForm'),
    formEmail = document.getElementById('formEmail'),
    fullName = document.getElementById('fullName'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');
const formEmailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/,
    nameRegex = /^[a-zA-Z]/,
    textRegex=  /^[a-zA-Z0-9]/;

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', formValidation, false);
});

function validation(field, regExp, error, errorMess1, event){
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    }else if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = errorMess1;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}
function formValidation(event) {
validation(
    fullName,
    nameRegex,
    "Please enter your Name",
    "Please enter a valid name",
    event
);

validation(
    formEmail,
    formEmailRegex,
    "Please enter your email",
    "Please enter a valid email",
    event
);

validation(
    subject, 
    textRegex,
    "Subject is required",
    "Please enter a message subject", 
    event
);

validation(
    message, 
    textRegex,
    "Message is required",
    "Please enter your Message",
     event
);
return true;
}
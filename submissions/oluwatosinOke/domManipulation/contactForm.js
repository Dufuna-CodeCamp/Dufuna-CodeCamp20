let form = document.getElementById('validateForm'),
    formEmail = document.getElementById('formEmail'),
    fullName = document.getElementById('fullName'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');
const formEmailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/,
    nameRegex = /^[a-zA-Z]/; 

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', formValidation, false);
});

function emailValidation(event) {
    if (formEmail.value === "") {
        formEmail.nextElementSibling.innerHTML = "This Field is Required";
        event.preventDefault();
        return false;
    }else if (!(formEmail.value.match(formEmailRegex))) {
        formEmail.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        formEmail.nextElementSibling.innerHTML = "";
        return true;
    }
}
function nameValidation(event) {
    if (fullName.value === "") {
        fullName.nextElementSibling.innerHTML = "This Field is Required";
        event.preventDefault();
        return false;
    }else if (!(fullName.value.match(nameRegex))) {
        fullName.nextElementSibling.innerHTML = "Please enter a valid Name";
        event.preventDefault();
        return false;
    } else {
        fullName.nextElementSibling.innerHTML = "";
        return true;
        }
}  
function subjectValidation( event) {
    if (subject.value === "") {
        subject.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
        }
}
function messageValidation( event) {
    if (message.value === "") {
        message.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
        } else {
        field.nextElementSibling.innerHTML = "";
        return true;
        }
}
function formValidation(e) {
    nameValidation(e);
    emailValidation(e);
    subjectValidation(e);
    messageValidation(e);
    return true;
}
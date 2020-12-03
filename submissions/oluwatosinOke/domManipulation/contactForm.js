let form = document.getElementById('validateForm'),
    formEmail = document.getElementById('formEmail'),
    fullName = document.getElementById('fullName'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', formValidation, false);
});

function required(field, error, event) {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    }
    else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validation(field, regExp, errorMess, event) {
    if (!field.value.match(regExp)) {
        field.nextElementSibling.innerHTML = errorMess;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}
function formValidation(event) {
    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/,
        nameRegex = /^[a-zA-Z]/;

    validation(
        fullName,
        nameRegex,
        "Please enter a valid name",
        event
    );

    validation(
        formEmail,
        emailRegex,
        "Please enter a valid email",
        event
    );

    required(subject, "Please enter a message subject", event);
    required(message, "Please enter your Message", event);
    return true;
}
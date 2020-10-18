let sendForm = document.querySelector('.informate'),
    fullName = document.getElementById('fname'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('input')
;

function inputValidation(event, input, inputRegex, innerHTML, innerHTMLTwo) {
    if (input.value === '') {
        input.nextElementSibling.innerHTML = innerHTML;
        event.preventDefault();
        return false;
    } else if (!input.value.match(inputRegex)) {
        input.nextElementSibling.innerHTML = innerHTMLTwo;
        event.preventDefault();
        return false;
    } else {
        input.nextElementSibling.innerHTML = "";
    }
}

function fieldValidation(event, field, innerHTML) {
    if (field.value === '') {
        field.nextElementSibling.innerHTML = innerHTML;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function informate(e) {
    const fullNameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

    inputValidation(e, fullName, fullNameRegex, "Please enter your name", "Please enter your name");
    inputValidation(e, email, emailRegex, "Please enter your Email Address", "Please enter a valid mail");
    fieldValidation(e, subject, "Please enter a message subject");
    fieldValidation(e, message, "Please enter your Message");
    return true;
}

sendForm.addEventListener("submit", informate);

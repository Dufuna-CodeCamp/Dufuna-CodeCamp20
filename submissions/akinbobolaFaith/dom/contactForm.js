let sendForm = document.querySelector('.informate'),
    fullName = document.getElementById('fname'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('input')
;

function fullNameValidation(event) {
    let fullNameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    if(fullName.value === '') {
        fullName.nextElementSibling.innerHTML = "Please enter your name";
        event.preventDefault();
        return false;
    } else if (!fullName.value.match(fullNameRegex)) {
        fullName.nextElementSibling.innerHTML = "Please enter your name";
        event.preventDefault();
        return false;
    } else {
        fullName.nextElementSibling.innerHTML = "";
        return true;
    }
}

function fieldValidation(event, field, fieldRegex, innerHTML, innerHTMLTwo) {
    if (field.value === '') {
        field.nextElementSibling.innerHTML = innerHTML;
        event.preventDefault();
        return false;
    } else if (!field.value.match(fieldRegex)) {
        field.nextElementSibling.innerHTML = innerHTMLTwo || "";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}

function informate(e) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    const fieldRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-])$/;

    fullNameValidation(e);
    fieldValidation(e, email, emailRegex, "Please enter your Email Address", "Please enter a valid mail");
    fieldValidation(e, subject, fieldRegex, "Please enter a message subject");
    fieldValidation(e, message, fieldRegex, "Please enter your Message");
    return true;
}

sendForm.addEventListener("submit", informate);

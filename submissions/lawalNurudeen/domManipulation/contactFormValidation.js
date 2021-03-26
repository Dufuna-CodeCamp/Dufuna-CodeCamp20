const contactForm = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullname");
const mailAddress = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;


const fieldValidation = (fieldName, fieldRegex, error_1, error_2, e) => {
    if(fieldName.value === ""){
        fieldName.nextElementSibling.textContent = error_1;
        e.preventDefault();
        return false;
    } else if (!fieldName.value.match(fieldRegex)){
        fieldName.nextElementSibling.textContent = error_2;
        e.preventDefault();
        return false;
    } else {
        fieldName.nextElementSibling.textContent = "";
        return true;
    }
}

const messageValidation = (fieldName, error, e) => {
    if(fieldName.value === ""){
        fieldName.nextElementSibling.textContent = error;
        e.preventDefault();
        return false;
    } else {
        fieldName.nextElementSibling.textContent = "";
        return true;
    }
}

const validationRequirements = (e) => {
    fieldValidation(fullName, nameRegex, "Please enter your name", "Name cannot contain special characters", e);
    fieldValidation(mailAddress, emailRegex, "Please enter your email address", "Please enter a valid email", e);
    messageValidation(subject, "Please enter a message subject", e);
    messageValidation(message, "Please enter your message", e)
    return true;
}

contactForm.addEventListener("submit", (e) => {
    validationRequirements(e);
})
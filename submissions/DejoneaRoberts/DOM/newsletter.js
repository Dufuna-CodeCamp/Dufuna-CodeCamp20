let newsForm = document.getElementById('news-form');
let emailNews = document.getElementById('email-sign');
let emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

function newsValidation(field, fieldRegex, error1, error2, event) {

    if(field.value === "") {
        field.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = error1;
        event.preventDefault();
    } else if (!field.value.match(fieldRegex)) {
        field.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validationsubmitForm(event) {
    newsValidation( emailNews, emailRegex, "Please enter your email address", "Please enter a valid email", event);
    return true;
}

newsForm.addEventListener("submit", validationsubmitForm);

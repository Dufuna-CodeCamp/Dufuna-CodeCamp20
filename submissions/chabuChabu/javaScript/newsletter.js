let getForm = document.getElementById("validateNewsletter"),
    error = document.querySelector('span.footer-error-block'),
    newslatter = document.getElementById("newslatter");

 function newsletterValidation(field, regdex, errorOne, errorTwo, event) {
        event.preventDefault();
        if (field.value === "") {
            error.innerHTML = errorOne;
            event.preventDefault();
            return false;
        }
        else if (!field.value.match(regdex)) {
            error.innerHTML = errorTwo;
            event.preventDefault();
            return false;
        }
        else {
            error.innerHTML = "";
        }
    }
function validateNewsletter(event){
    emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,

    newsletterValidation( newsletter, emailRegex,
        "Please enter your email address","Please enter a valid email address",event);
        return true;
}
getForm.addEventListener("submit",validateNewsletter);
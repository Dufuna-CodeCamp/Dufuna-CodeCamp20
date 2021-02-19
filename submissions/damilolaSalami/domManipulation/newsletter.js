const newsLetter = document.getElementById("newsLetter"),
    emailLetter = document.getElementById("emailLetter"),
    emailVal = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,6})+$/,

function emailValidation(event) {
    if (emailLetter.value === "") {
        emailLetter.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!(emailLetter.value.match(emailVal))) {
        emailLetter.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        emailLetter.nextElementSibling.innerHTML = "";
        return true;
    }
}

newsLetter.addEventListener("submit", emailValidation);
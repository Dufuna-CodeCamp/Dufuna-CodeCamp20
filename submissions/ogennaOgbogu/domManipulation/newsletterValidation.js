let newsletterEmail = document.getElementById("news-letter"),
    submitEmail = document.getElementById("submit-button");
    email2Regex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function emailValidation(event) {
    if (newsletterEmail.value == "") {
        newsletterEmail.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();
        return false;
    } else if (!newsletterEmail.value.match(email2Regex)) {
        newsletterEmail.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        newsletterEmail.nextElementSibling.innerHTML = ""
        return true;

    }
}


submitEmail.addEventListener("click", emailValidation);
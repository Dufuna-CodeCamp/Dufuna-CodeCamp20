let newsletterForm = document.getElementById('footer-signup');
let footerEmail = document.getElementById('footer-email');
const footerEmailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,6})+$/;

function footerEmailValidation(event) {
    if (footerEmail.value === "") {
        footerEmail.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    }else if (!(footerEmail.value.match(footerEmailRegex))) {
        footerEmail.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        footerEmail.nextElementSibling.innerHTML = "";
        return true;
    }
}

newsletterForm.addEventListener("submit", footerEmailValidation);

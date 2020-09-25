let sendForm = document.getElementById('send'),
    newsLetter = document.getElementById('letter'),
    errorMsg = document.querySelector(".error-message");

const Regex = /([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i; 

function validateForm(e) {
    if (newsLetter.value === "") {
        errorMsg.innerHTML = "Please enter your Email Address";
        e.preventDefault();
        return false;
    } else if (!(newsLetter.value.match(Regex))) {
        errorMsg.innerHTML = "Please enter a valid email";
        e.preventDefault();
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true
    }
}

sendForm.addEventListener('submit', validateForm)
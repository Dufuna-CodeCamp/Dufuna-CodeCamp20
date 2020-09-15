let sendForm = document.getElementById("requiredField"),
    newsletter = document.getElementById("newsletter"),
    errorMessage = document.querySelector(".errorMessage");

// To validate the Newsletter
let valide = (event) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

    if (newsletter.value === "") {
        errorMessage.innerHTML = "Please enter a your email";
        event.preventDefault();
        return false;
    } else
    if (!newsletter.value.match(emailRegex)) {
        errorMessage.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        errorMessage.innerHTML = "";
        return true;
    }
}

sendForm.addEventListener("submit", valide)
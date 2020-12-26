const newsLetterForm = document.querySelector("#newsletter-form");
const newsLetterEmail = document.querySelector("#newsletter-email");
const emailRegexP = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;

const emailValidation = (e) => {
    if(newsLetterEmail.value === ""){
        newsLetterEmail.nextElementSibling.textContent = "Please enter your email address";
        e.preventDefault();
        return false;
    } else if (!newsLetterEmail.value.match(emailRegexP)){
        newsLetterEmail.nextElementSibling.textContent = "Please enter a valid email address";
        e.preventDefault();
        return false;
    } else {
        newsLetterEmail.nextElementSibling.textContent = "";
        return true;
    }
}

newsLetterForm.addEventListener("submit", (e) => {
    emailValidation(e);
    return true;
})
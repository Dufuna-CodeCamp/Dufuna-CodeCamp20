let newsForm = document.getElementById('news-form');
let emailNews = document.getElementById('email-sign');
var emailRegex =/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,4})+$/;

function newsValidation(event) {

    if(emailNews.value === "") {
        emailNews.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "Please enter your email address";
        event.preventDefault();
    } else if (!emailNews.value.match(emailRegex)) {
        emailNews.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        emailNews.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}

newsForm.addEventListener("submit", newsValidation);

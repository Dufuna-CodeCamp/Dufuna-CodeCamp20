        let sendNews = document.getElementById('newsField');
        let newsLetter = document.getElementById('newsLetter');

function validations(newsLetter, event) {
    let emailRegex = /[a-z0-9]+@[a-z]+\.com$/i;
    if (newsLetter.value === '') {
        newsLetter.nextElementSibling.innerHTML = "Please enter your email Address";
        event.preventDefault();
        return false;
    } else if (!(field.value.match(emailRegex))) {
        newsLetter.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        newsLetter.nextElementSibling.innerHTML = '';
        return true;
    }
}

function newsField(e) {
    validations(newsLetter, e);
    return true;
}

sendNews.addEventListener('submit', newsField);
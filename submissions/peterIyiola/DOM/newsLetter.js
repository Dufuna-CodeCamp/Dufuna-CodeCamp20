
        let sendNews = document.getElementById('newsField');
        let newsLetter = document.getElementById('newsLetter');

function validations(field, event) {
    let emailRegex = /[a-z0-9]+@[a-z]+\.com$/i;
    if (field.value === '') {
        field.nextElementSibling.innerHTML = "Please enter your email Address";
        event.preventDefault();
        return false;
    } else if (!(field.value.match(emailRegex))) {
        field.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

function newsField(e) {
    validations(newsLetter, e);
    return true;
}

sendNews.addEventListener('submit', newsField);
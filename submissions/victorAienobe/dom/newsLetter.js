let submit = document.getElementById('submit');
let newsLetter = document.getElementById('newsLetter');

function valid(field, event) {
    let regex = /[a-z0-9]+@[a-z]+\.com$/i;
    if (field.value === '') {
        field.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if (!(field.value.match(regex))) {
        field.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

function validate(e) {
    valid(newsLetter, e);
    return true;
}

submit.addEventListener('submit', validate);
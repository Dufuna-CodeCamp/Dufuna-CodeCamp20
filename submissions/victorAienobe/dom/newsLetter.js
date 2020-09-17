let submit = document.getElementById('submit1');
let newsLetter = document.getElementById('newsLetter');

function valide(field, event) {
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
    valide(newsLetter, e);
    return true;
}

submit.addEventListener('submit', validate);
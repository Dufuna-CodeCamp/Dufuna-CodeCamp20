/*
    Form Validation: This helps to ensure that only the correct input type is entered in the individual fields.
*/
// Declaration of variables
let newsBtn    = document.getElementById('newsBtn');

//Function to validate form
function validateNews(event) {
    let newsEmail  = document.getElementById('newsEmail'),
        newsError  = document.getElementById('newsError'),
        fieldName  = "Please enter your Email Address",
        errorMsg   = "Please enter a valid email",
        emailRegexMatch = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;

    if (newsEmail.value == "") {
        newsError.innerHTML = fieldName;
        event.preventDefault();
        return false;
    }
    
    if (!(newsEmail.value.match(emailRegexMatch))) {
        newsError.innerHTML = errorMsg;
        event.preventDefault();
        return false;
    }

    if ((!(newsEmail.value == "")) && (newsEmail.value.match(emailRegexMatch))) {
        newsError.innerHTML = "";
        return true;
    }
}

//Listening for action by the submit button
newsBtn.addEventListener("click", validateNews);
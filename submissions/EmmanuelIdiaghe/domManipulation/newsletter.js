/*
    Form Validation: This helps to ensure that only the correct input type is entered in the individual fields.
*/
// Declaration of variables
let newsBtn    = document.getElementById('newsBtn');
    newsEmail  = document.getElementById('newsEmail'),
    newsError  = document.getElementById('newsError'),
    field      = "Please enter your Email Address",
    error      = "Please enter a valid email",
    emailMatch = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;

//Function to validate form
function validateNews(event) {
    if (newsEmail.value == "") {
        newsError.innerHTML = field;
        event.preventDefault();
        return false;
    }
    
    if (!(newsEmail.value.match(emailMatch))) {
        newsError.innerHTML = error;
        event.preventDefault();
        return false;
    }

    if ((!(newsEmail.value == "")) && (newsEmail.value.match(emailMatch))) {
        newsError.innerHTML = "";
        return true;
    }
}

//Listening for action by the submit button
newsBtn.addEventListener("click", validateNews);
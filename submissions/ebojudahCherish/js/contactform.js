// //target the form element and all input fields 
let submitForm = document.querySelector('#validateForm'),
    fullName = document.querySelector('#fullName'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message');



//Regular expressions
let fullNameRegex = /^[a-zA-Z]+$/i,
    emailRegex = /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//Error Messages
let fullNameEmpty = 'Please enter your Name',
    fullNameUnmatched = 'Your name cannot contain special characters',
    emailEmpty = 'Please enter your email address',
    emailUnmatched = 'Please enter a valid email',
    subjectEmpty = 'Please enter a message subject',
    messageEmpty = 'Please enter your message';



// add EventListener
function validateForm(e) {
    formValidation(fullName, fullNameRegex, fullNameEmpty, fullNameUnmatched, e);
    formValidation(email, emailRegex, emailEmpty, emailUnmatched, e);
    fieldCompulsory(subject, subjectEmpty, e);
    fieldCompulsory(message, messageEmpty, e);
    
    return true;
}

//Form Validation
function formValidation(field, regex, empty, unmatched, event){
	if (field.value == ''){
		field.nextElementSibling.innerHTML = empty;
		event.preventDefault();
		return false;
	} else if (!field.value.match(regex)){
		field.nextElementSibling.innerHTML = unmatched;
		event.preventDefault();
		return false;
	}else{
		field.nextElementSibling.innerHTML = '';
		return true;
	}
}

function fieldCompulsory(field, empty, event) {
    if (field.value == '') {
        field.nextElementSibling.innerHTML = empty;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

submitForm.addEventListener('submit', validateForm);
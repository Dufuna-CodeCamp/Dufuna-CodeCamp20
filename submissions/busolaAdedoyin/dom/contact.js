let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let msgInput = document.getElementById('messageInput');
let fullNameMsg = 'Please enter your name';
let fullNameMsg2 = 'Please enter a valid name';
let emailMsg = "Please enter your email address";
let emailMsg2 = "Please enter a valid email address";
let subjectMsg = 'Please enter a message subject';
let msgInputError = "please enter your message";
function contactFormValidation(field, regEx, errorMsg1, errorMsg2, event){

	 if(field.value == ''){
        field.nextElementSibling.nextElementSibling.innerHTML= errorMsg1;
        event.preventDefault();
        return false;
    } else if (!(field.value.match(regEx))){
        field.nextElementSibling.nextElementSibling.innerHTML = errorMsg2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}
function validateForm(e){
	contactFormValidation(fullName, /^[a-z]+$/i, fullNameMsg, fullNameMsg2, e);
	contactFormValidation(email, /[a-z0-9]+@[a-z]+\.com$/i, emailMsg, emailMsg2, e);
	contactFormValidation(subject, /^[a-z]+$/i, subjectMsg, subjectMsg, e);
	contactFormValidation(msgInput, /^[a-z]+$/i, msgInputError, msgInputError, e);
 	 return true;
}

submitForm.addEventListener("submit", validateForm);
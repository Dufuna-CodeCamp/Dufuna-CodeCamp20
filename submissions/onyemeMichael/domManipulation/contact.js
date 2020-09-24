let submitForm = document.getElementById('validateForm'),
    fullName = document.getElementById('fullName'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    fullNameMsg = 'Please enter your name',
    fullNameMsg2 = 'Please enter a valid name',
    emailMsg = "Please enter your email address",
    emailMsg2 = "Please enter a valid email address",
    subjectMsg = 'Please enter a message subject',
    msgInputError = "please enter your message";

const regEx = {
    name: /[A-Za-z]/,
    email: /([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i,
  }
  
function contactFormValidation(field, regEx, err, errMsg, event){
	 if(field.value == ''){
        field.nextElementSibling.nextElementSibling.innerHTML= err;
        event.preventDefault();
        return false;
    } else if (!(field.value.match(regEx))){
        field.nextElementSibling.nextElementSibling.innerHTML = errMsg;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validateForm(e){
	contactFormValidation(fullName, regEx, fullNameMsg, fullNameMsg2, e);
	contactFormValidation(email, regEx, emailMsg, emailMsg2, e);
	contactFormValidation(subject, regEx, subjectMsg, subjectMsg, e);
	contactFormValidation(message, regEx, msgInputError, msgInputError, e);
 	 return true;
}

submitForm.addEventListener("submit", validateForm);

// let submitForm = document.getElementById("validateForm"),
//     email = document.getElementById("email"),
//     fullName = document.getElementById("fullName"),
//     subject = document.getElementById("subject"),
//     message = document.getElementById("message");

// const regexName = /[A-Za-z]/,
//     regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/;

// //FullName Validation
// function nameValidation(event) {
//     if (!fullName.value.match(regexName)) {
//         fullName.nextElementSibling.nextElementSibling.innerHTML = "Please enter your Name";
//         event.preventDefault();
//         return false;
//     } else {
//         fullName.nextElementSibling.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }

// var err = "Please enter your Email Addres",
//     errMsg = "Please enter a valid Email";

// //Email Validation
// function emailValidation(email, event, regexEmail,err, errMsg) {
//     if (email.value === '') {
//         email.nextElementSibling.nextElementSibling.innerHTML = err;
//         event.preventDefault();
//         return false;
//     } else if(!(email.value.match(regexEmail))) {
//         email.nextElementSibling.nextElementSibling.innerHTML = errMsg;
//         event.preventDefault();
//         return false;
//     } else {
//         email.nextElementSibling.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }

// subValidation = (event) => {
//     if (!subject.value.match(regexName)) {
//         subject.nextElementSibling.nextElementSibling.innerHTML = "Please enter a Message Subject";
//         event.preventDefault();
//         return false;
//     } else {
//         subject.nextElementSibling.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }

// msgValidation = (event) => {
//     if (!message.value.match(regexName)) {
//         message.nextElementSibling.nextElementSibling.innerHTML = "Please enter your Message";
//         event.preventDefault();
//         return false;
//     } else {
//         message.nextElementSibling.nextElementSibling.innerHTML = "";
//         return;
//     }
// }

// function validateForm(e) {
//     nameValidation(e);
//     emailValidation(email, e, regexEmail,err, errMsg);
//     subValidation(e);
//     msgValidation(e);
//     return true;
// }

// submitForm.addEventListener("submit", validateForm);
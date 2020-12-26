// //target the form element and all input fields 
let submitForm = document.querySelector('#validateForm'),
    firstName = document.querySelector('#firstName'),
    lastName = document.querySelector('#lastName'),
    phoneNumber = document.querySelector('#phoneNumber'),
    email = document.querySelector('#email'),
    password = document.querySelector('#passWord'),
    confirmPassword = document.querySelector('#confirmPassword');

//Regular expressions
let firstNameRegex = /^[a-zA-Z]+$/i,
      lastNameRegex = /^[a-zA-Z]+$/i,
      emailRegex = /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

//Error Messages
let firstNameEmpty = 'Please input your First Name',
    firstNameUnmatched = 'First Name must not contain speecial characters',
    lastNameEmpty = 'Please input your First Name',
    lastNameUnmatched = 'First Name must not contain speecial characters',
    emailEmpty = 'Please enter your email address',
    emailUnmatched = 'Please enter a valid email address',
    phoneNumberEmpty = 'Please enter your Phone Number',
    phoneNumberUnmatched = 'Please enter a valid Phone Number',
    passwordEmpty = 'Please enter your password',
    passwordUnmatched = 'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character and 1 number',
    confirmPasswordEmpty = 'Please confirm your password',
    confirmPasswordUnmatched = 'Your passwords don\'t match';

// add EventListener
function validateForm(e) {
    formValidation(firstName, firstNameRegex, firstNameEmpty, firstNameUnmatched, e);
    formValidation(lastName, lastNameRegex, lastNameEmpty, lastNameUnmatched, e);
    formValidation(email, emailRegex, emailEmpty, emailUnmatched, e);
    formValidation(password, pwdRegex, passwordEmpty, passwordUnmatched, e);
    formValidation(phoneNumber, phoneRegex, phoneNumberEmpty, phoneNumberUnmatched, e);
    confirmPasswordVal(e);
    
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

function confirmPasswordVal(event){
	if (confirmPassword.value == ''){
		confirmPassword.nextElementSibling.innerHTML = confirmPasswordEmpty;
		event.preventDefault();
		return false;
	} else if (!(confirmPassword.value == password.value)){
		confirmPassword.nextElementSibling.innerHTML = confirmPasswordUnmatched;
		event.preventDefault();
		return false;
	}else{
		confirmPassword.nextElementSibling.innerHTML = '';
		return true;
	}
}

submitForm.addEventListener('submit', validateForm);


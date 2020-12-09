let submitForm = document.getElementById('validateForm');
	fullName = document.getElementById('fullName'),
	email = document.getElementById('email'),
	subject = document.getElementById('subject'),
	message = document.getElementById('message');

let fullNameError1 = "Please enter your Name",
	fullNameError2 = "It can't contain special characters",
	emailAddressError1 = "Please enter your Email Address",
	emailAddressError2 = "Please enter a valid Email Address",
	subjectError = "Please enter a message subject",
	messageError = "Please enter your Message";

let nameRegex = /^[A-Za-z0-9 ]+$/,
	emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

	/*FORM VALIDATION*/
	
function fieldValidation(field,Regex, Error1, Error2,event){
	if (field.value == ""){
		field.nextElementSibling.innerHTML = Error1;
		event.preventDefault();
		return false;
	} else if (!field.value.match(Regex)){
		field.nextElementSibling.innerHTML = Error2;
		event.preventDefault();
		return false;

	}else{
		field.nextElementSibling.innerHTML = "";
		return true;
	}
}

function messageValidation(field,error,event){
	if (field.value == "") {
		field.nextElementSibling.innerHTML = error;
		event.preventDefault();
		return false;
	}else{
		field.nextElementSibling.innerHTML = "";
		return true;
	}
}

function validateForm(e){
	fieldValidation(fullName,nameRegex, fullNameError1,fullNameError2,e);
	fieldValidation(email,emailRegex, emailAddressError1,emailAddressError2,e);
	messageValidation(message,messageError,e);
	messageValidation(subject,subjectError,e);
	return true;
}

submitForm.addEventListener("submit",validateForm);
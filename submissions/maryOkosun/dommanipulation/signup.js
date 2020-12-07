let submitForm = document.getElementById('validateForm');
	firstName = document.getElementById('firstName'),
 	lastName = document.getElementById('lastName'),
    otherNames = document.getElementById('otherNames'),
	phoneNumber = document.getElementById('phoneNumber'),
	email = document.getElementById('email'),
	password = document.getElementById('password'),
	confirmPassword = document.getElementById('confirmPassword');

let firstNameError1 = "Please enter your First Name",
	firstNameError2 = "It can't contain special characters",
	lastNameError1 = "Please enter your Last Name",
	lastNameError2 = "It can't contain special characters",
	phoneNumberError1 = "Please enter your Phone Number",
	phoneNumberError2 = "Please enter a valid Phone Number",
	emailAddressError1 = "Please enter your Email Address",
	emailAddressError2 = "Please enter a valid Email Address",
	passwordError1 = "Please enter your Password",
	passwordError2 = "Your password should have a mininum of 6 characters, 1 capital letter,1 special character eg @ and 1 number",
	confirmPasswordError1 = "Please confirm your Password",
	confirmPasswordError2 = "Your Password don't match";

let nameRegex = /^[A-Za-z0-9 ]+$/,
	emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
	phoneRegex = /^[\+0-9]{8,15}$/, //eslint-disable-line
	pwdRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;

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

function confirmPasswordVal(event){
	if (confirmPassword.value == ""){
		confirmPassword.nextElementSibling.innerHTML =confirmPasswordError1;
		event.preventDefault();
		return false;
	} else if (!(confirmPassword.value == password.value)){
		confirmPassword.nextElementSibling.innerHTML = confirmPasswordError2;
		event.preventDefault();
		return false;
	}else{
		confirmPassword.nextElementSibling.innerHTML = "";
		return true;
	}
}

function validateForm(e){
	fieldValidation(firstName,nameRegex, firstNameError1,firstNameError2,e);
	fieldValidation(lastName,nameRegex, lastNameError1,lastNameError2,e);
	fieldValidation(phoneNumber,phoneRegex, phoneNumberError1,phoneNumberError2,e);
	fieldValidation(email,emailRegex, emailAddressError1,emailAddressError2,e);
	fieldValidation(password,pwdRegex, passwordError1,passwordError2,e);
	confirmPasswordVal(e);
	return true;
}

submitForm.addEventListener("submit",validateForm);
let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phone-no');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');
let firstNameMsg = 'Please enter your first name';
let firstNameMsg2 = 'Please enter a valid name';
let lastNameMsg = "Please enter your last name";
let lastNameMsg2 = 'Please enter a valid name';
let phoneNumberMsg = "Please enter a phone number"
let phoneNumberMsg2 = "Please enter a valid phone number";
let emailMsg = "Please enter your email address";
let emailMsg2 = "Please enter a valid email address";
let passwordMsg = "Please enter your password";
let passwordMsg2 = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
let cpasswordMsg = " please confirm your password";
let cpasswordMsg2 = "You passwords do not match";

function signUpValidationForm(field, regEx, errorMsg1, errorMsg2, event){
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
    signUpValidationForm(firstName, /^[a-z]+$/i, firstNameMsg, firstNameMsg2, e);
    signUpValidationForm(lastName, /^[a-z]+$/i, lastNameMsg, lastNameMsg2, e);
    signUpValidationForm(phoneNumber,  /^[+0-9]+$/i, phoneNumberMsg, phoneNumberMsg2, e);
    signUpValidationForm(email,  /[a-z0-9]+@[a-z]+\.com$/i, emailMsg, emailMsg2, e);
    signUpValidationForm(password,/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%_^&*-]).{6,}$/, passwordMsg, passwordMsg2, e);
    signUpValidationForm(cpassword, password.value, cpasswordMsg, cpasswordMsg2, e);
    return true;
}
submitForm.addEventListener("submit", validateForm);

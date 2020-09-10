let signupForm = document.getElementById('signup');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phoneNumber');
let emailSignup = document.getElementById('emailSignup');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let nameRegex = /^[A-Za-z]+$/;
let phoneNumberRegex = /^[\+]?[0-9]{10,14}$/i;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[._$,/;:+=~`'"<>^#?!@$%^&*-]).{6,}$/;
let passwordError = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number."

    function nameValidation(name, error1, error2, event,) {
    if(name.value == "") {
        name.nextElementSibling.innerHTML = error1;
        event.preventDefault();
        return false;
    } else if(!name.value.match(nameRegex)) {
        name.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    } else {
        name.nextElementSibling.innerHTML = "";
        return true;
    }
} 

function fieldValidation(field, fieldRegex, error1, error2, event) {
    
    if(field.value === "") {
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
    } else if (!field.value.match(fieldRegex)) {
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function confirmPasswordValidation(event) {
    if (confirmPassword.value === "")  {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        event.preventDefault();
    } else if (!(password.value == confirmPassword.value)) {
        confirmPassword.nextElementSibling.innerHTML = "Your password don't match";
        event.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validationSignupForm(event) {
    

    nameValidation(firstName, "Please enter your First name", "Please First Name can only contain letters.", event);
    nameValidation(lastName, "Please enter your Last name", "Please Last Name can only contain letters." , event);
    fieldValidation( phoneNumber, phoneNumberRegex, "Please enter your phone number", "Please enter a valid phone number", event);
    fieldValidation( emailSignup, emailRegex, "Please enter your Email address", "Please enter a valid email", event);
    fieldValidation( password, passwordRegex, "Please enter your passwod", passwordError, event);
    confirmPasswordValidation(event);
    return true;
}

signupForm.addEventListener("submit", validationSignupForm);


    //Another method to validate the form
    
// function required(field, error, event){
//     if(field.value == ""){
//         field.nextElementSibling.innerHTML = error;
//         event.preventDefault();
//         return false;
//     }else{
//         field.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }
// function validation(field, error, regex, event ){
//     if (!field.value.match(regex)){
//         field.nextElementSibling.innerHTML = error;
//         event.preventDefault();
//         return false;
//     }else{
//         field.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }

// function confirmPasswordValidation(event) {
//      if (!(password.value == confirmPassword.value)) {
//         confirmPassword.nextElementSibling.innerHTML = "Your password don't match";
//         event.preventDefault();
//         return false;
//     } else {
//         confirmPassword.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }
// function validateSignupForm(event){
//     required(firstName, "Please enter your First Name", event );
//     required(lastName, "Please enter your Last Name", event );
//     required(phoneNumber, "Please enter your Phone Number", event );
//     required(emailSignup, "Please enter your Email Address", event );
//     required(password, "Please enter your Password", event );
//     required(confirmPassword, "Please confirm your Password", event );
//     validation(firstName, "Please First Name can only contian letters", nameRegex, event );
//     validation(lastName, "Please First Name can only contian letters", nameRegex, event );
//     validation(phoneNumber, "Please enter a valid phone number",phoneNumberRegex, event );
//     validation(emailSignup, "Please enter a valid Email", emailRegex, event );
//     validation(password, passwordError, passwordRegex, event );
//     confirmPasswordValidation(event)
    
//     return true;
// }

// signupForm.addEventListener('submit', validateSignupForm);
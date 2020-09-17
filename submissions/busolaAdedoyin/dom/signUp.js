let submitForm = document.getElementById('validateForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phone-no');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');



function required(field, event){
    if(field.value == ''){
        field.nextElementSibling.nextElementSibling.innerHTML= "This field is required";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}
 function fnameValidate(event) {
     let nameChar = /^[a-z]+$/i;
     if(firstName.value == ''){
        firstName.nextElementSibling.nextElementSibling.innerHTML= "please enter your first name";
        event.preventDefault();
        return false;
     } else if(!(firstName.value.match(nameChar))) {
        firstName.nextElementSibling.nextElementSibling.innerHTML= "please enter a valid name";
        event.preventDefault();
        return false;
    } else {
        firstName.nextElementSibling.nextElementSibling.innerHTML = "";
        return true;
    }
}
function lnameValidate(event) {
    let nameChar = /^[a-z]+$/i;
    if(lastName.value == ''){
       lastName.nextElementSibling.nextElementSibling.innerHTML= "please enter your last name";
       event.preventDefault();
       return false;
    } else if(!(lastName.value.match(nameChar))) {
       lastName.nextElementSibling.nextElementSibling.innerHTML= "please enter a valid name";
       event.preventDefault();
       return false;
   } else {
       lastName.nextElementSibling.nextElementSibling.innerHTML = "";
       return true;
   }
}
function phoneValidate(event) {
    let phnchar = /^[+0-9]+$/i;
    if(phoneNumber.value == '') {
        phoneNumber.nextElementSibling.nextElementSibling.innerHTML= " please enter your phone number";
        event.preventDefault();
        return false;
    } else if ((!phoneNumber.value.match(phnchar))){
        phoneNumber.nextElementSibling.nextElementSibling.innerHTML= " please enter a valid phone number";
        event.preventDefault();
        return false;
    }
    else {
        phoneNumber.nextElementSibling.nextElementSibling.innerHTML= " ";
        return true;
    }
}

function emailFieldvalidation(event){
    let emailRegex = /[a-z0-9]+@[a-z]+\.com$/i
    
    if(email.value == '') {
        email.nextElementSibling.nextElementSibling.innerHTML= " please enter your email address";
        event.preventDefault();
        return false;
    } else if (!(email.value.match(emailRegex))) {
        email.nextElementSibling.nextElementSibling.innerHTML ="please enter a valid email address";
        event.preventDefault();
        return false;   
    } else {
        email.nextElementSibling.nextElementSibling.innerHTML =" ";
        return true;
    }
}

function passwordValidation(event){
    let pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%_^&*-]).{6,}$/;
    if(password.value == '') {
        password.nextElementSibling.nextElementSibling.innerHTML= " please enter your password";
        event.preventDefault();
        return false;
    } else if(!password.value.match(pwdRegex)){
        password.nextElementSibling.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.nextElementSibling.innerHTML = " ";
        return true;
    }
}

function cpasswordValidation(event){
    if(cpassword.value == '') {
        cpassword.nextElementSibling.nextElementSibling.innerHTML= " please confirm your password";
        event.preventDefault();
        return false; 
    } else if( cpassword.value !== password.value){
        cpassword.nextElementSibling.nextElementSibling.innerHTML= " your passwords don't match";
        event.preventDefault();
        return false;
    } else {
        cpassword.nextElementSibling.nextElementSibling.innerHTML = " ";
        return true;
    }
}
function validateForm(e){
        required(firstName, e);
        required(lastName, e);
        required(phoneNumber, e);
        required(email, e);
        required(password, e);
        required(cpassword, e);
        fnameValidate(e);
        lnameValidate(e);
        phoneValidate(e);
        emailFieldvalidation(e);
        passwordValidation(e);
        cpasswordValidation(e);
        return true;
    }
    submitForm.addEventListener("submit", validateForm);
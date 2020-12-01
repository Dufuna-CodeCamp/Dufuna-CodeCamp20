// selecting the elements
let submitForm = document.getElementById('submit-btn');
let firstName = document.getElementById('firstname1');
let lastName = document.getElementById('lastname');
let otherNames = document.getElementById('othername');
let phoneNumber = document.getElementById('phoneNumber');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
// regex
var alphaExp = /^[a-zA-Z ]+$/;
var numericExp = /^[+]*[0-9]+$/;
var emailExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passExp =/^(?=(.*[\d]){1,})(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[\W]){1,}).{6,}$/;
// eventListeners
submitForm.addEventListener("click", validateForm);
//functions
function validateForm(e){
    e.preventDefault();
    firstNameVal(e);
    lastNameVal(e);
    otherNameVal(e);
    phoneVal(e);
    emailVal(e);
    passVal(e);
    confPass(e);
    return true;
}
function firstNameVal(event){
    var name = firstName.value;
    
    if(name.length == 0)
    {
        firstName.nextElementSibling.innerText ="Please enter your first name";
        event.preventDefault();
        return false;
    }
    else
    {
        if(!alphaExp.test(name)) {
            firstName.nextElementSibling.innerText ="No Numbers or Special Characters are allowed";
            event.preventDefault();
            return false;
        }
        else {
            firstName.nextElementSibling.innerText = "";
            return true;
        }
    }

}
function lastNameVal(event){
    var lastname = lastName.value;
    
    if(lastname.length == 0)
    {
        lastName.nextElementSibling.innerText ="Please enter your last name";
        event.preventDefault();
        return false;
    }
    else
    {
        if(!alphaExp.test(lastname)) {
            lastName.nextElementSibling.innerText ="No special characters are allowed";
            event.preventDefault();
            return false;
        }
        else {
            lastName.nextElementSibling.innerText = "";
            return true;
        }
    }
}
function otherNameVal(event){
    var othername = otherNames.value;
    if(!othername.length == 0){
        if(!alphaExp.test(othername)) {
            otherNames.nextElementSibling.innerText ="No special characters are allowed";
            event.preventDefault();
            return false;
        }
        else {
            otherNames.nextElementSibling.innerText = "";
            return true;
        }
    }
}
function phoneVal(event) {
    var phone = phoneNumber.value;
    if(phone.length == 0) {
        phoneNumber.nextElementSibling.innerText = "Please enter your phone number";
        event.preventDefault();
        return false;
    }
    else {
        if(!numericExp.test(phone)) {
            phoneNumber.nextElementSibling.innerText = "Please enter a valid phone number";
            event.preventDefault();
            return false;
        }
        else {
            phoneNumber.nextElementSibling.innerText = "";
            return true;
        }
    }
}
function emailVal(event) {
    var emailInput = email.value;
    if(emailInput.length == 0) {
        email.nextElementSibling.innerText ="Please enter your email address";
        event.preventDefault();
        return false;
    }
    else {
        if(!emailExp.test(emailInput)) {
            email.nextElementSibling.innerText ="Please Enter a Valid Email Address";
            event.preventDefault();
            return false;
        }
    }
}
function passVal(event) {
    var passInput = password.value;
    if(passInput.length == 0) {
        password.nextElementSibling.innerText ="Please enter your password";
        event.preventDefault();
        return false;
    }
    else {
        if(!passExp.test(passInput)) {
            password.nextElementSibling.innerText ="Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg. @ and 1 number.";
            event.preventDefault();
            return false;
        } else {
        password.nextElementSibling.innerText = "";
        return true;
    }
}
}

function confPass(event) {
    pass=password.value;
    pass2 =confirmPassword.value;
    if(pass2.length == 0) {
        confirmPassword.nextElementSibling.innerText ="Please confirm your password";
        event.preventDefault();
        return false;
    }else{
        if(pass!==pass2)
        {
            confirmPassword.nextElementSibling.innerText = "Your passwords don't Match";
            event.preventDefault();
            return false;
        }
        else
        {
            confirmPassword.nextElementSibling.innerText = "";
            return true;
        }
    }
}
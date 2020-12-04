// selecting the elements
let submitForm = document.getElementById('signupform');
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
var emailExp =/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,4})+$/;
var passExp =/^(?=(.*[\d]){1,})(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[\W]){1,}).{6,}$/;
// eventListeners
submitForm.addEventListener("submit", validateForm);
//functions
function validateForm(e){
    regValidation(e, firstName,alphaExp,"Please enter your first name", "No Numbers or Special Characters are allowed");
    regValidation(e, lastName,alphaExp,"Please enter your last name", "No Numbers or Special Characters are allowed");
    regValidation(e, phoneNumber,numericExp,"Please enter your phone number","Please enter a valid phone number");
    regValidation(e, email ,emailExp,"Please enter your email address", "Please enter a valid email address");
    regValidation(e, password,passExp,"Please enter your password","Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg. @ and 1 number.");
    otherNameVal(e);
    confPass(e);
    return true;
}
function regValidation(event, field,regex,error1,error2){
    var fieldValue = field.value;
    
    if(fieldValue.length == 0)
    {
        field.nextElementSibling.innerText = error1;
        event.preventDefault();
        return false;
    } else if(!regex.test(fieldValue)) {
            field.nextElementSibling.innerText = error2;
            event.preventDefault();
            return false;
    } else {
            field.nextElementSibling.innerText = "";
            return true;
        }
    } 
function otherNameVal(event){
    var othername = otherNames.value;
    if((!othername.length == 0)&&(!alphaExp.test(othername))){
            otherNames.nextElementSibling.innerText ="No special characters are allowed";
            event.preventDefault();
            return false;
        } else {
            otherNames.nextElementSibling.innerText = "";
            return true;
        }
    }
function confPass(event) {
    pass=password.value;
    pass2 =confirmPassword.value;
    if(pass2.length == 0) {
        confirmPassword.nextElementSibling.innerText ="Please confirm your password";
        event.preventDefault();
        return false;
    }else if(pass!==pass2){
            confirmPassword.nextElementSibling.innerText = "Your passwords don't Match";
            event.preventDefault();
            return false;
    }else{
            confirmPassword.nextElementSibling.innerText = "";
            return true;
        }
    }

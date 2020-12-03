// selecting the elements
let contactForm = document.getElementById('contactform');
let fullName = document.getElementById('fullname');
let subject = document.getElementById("subject");
let message = document.getElementById("msg");
let email = document.getElementById('email');
//regex
var alphaExp = /^[a-zA-Z ]+$/;
var emailExp =/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,4})+$/;
// eventListeners
contactForm.addEventListener("submit", validateForm);
// functions
function validateForm(e){
    contactValidation(e, fullName,alphaExp,"Please enter your full name", "No Numbers or Special Characters are allowed");
    contactValidation(e, email ,emailExp,"Please enter your email address", "Please enter a valid email address");
    messageValidation(e, subject, "Please enter a message subject");
    messageValidation(e, message, "Please enter your message");
}

function contactValidation(event,field,regex,error1,error2){
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
function messageValidation(event,field,error){
    var fieldValue = field.value;
    
    if(fieldValue.length == 0)
    {
        field.nextElementSibling.innerText = error;
        event.preventDefault();
        return false;
    }else {
            field.nextElementSibling.innerText = "";
            return true;
        }
    } 
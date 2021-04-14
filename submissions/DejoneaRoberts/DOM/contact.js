let submitForm = document.getElementById('contact-form');
let fullName = document.getElementById('fullname');
let emailContact = document.getElementById('mail-add');
let subContact = document.getElementById('subject');
let message = document.getElementById('message');

var alphaExp = /^[a-zA-Z ]+$/;
var emailExp =/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,4})+$/;

function requiredField(field,error,event){
  if(field.value === "") {
      field.nextElementSibling.innerHTML = error;
      event.preventDefault();
    } else {
      field.nextElementSibling.innerHTML = "";
      return true; }
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

function validationsubmitForm(event) {
    fieldValidation(fullName, alphaExp, "Please enter your Name", "Your Name can only contain letters.", event);
    fieldValidation( emailContact, emailExp, "Please enter your email address", "Please enter a valid email", event);
    requiredField(subContact, "Please enter a message subject",event);
    requiredField(message, "Please enter your Message",event);
    return true;
}

submitForm.addEventListener("submit", validationsubmitForm);

let submitForm = document.getElementById('submit');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let textArea = document.getElementById('textArea');
let fullNameMsg = 'Please enter your Name';
let emailMsg = "Please enter your Email Address";
let emailErrorMsg = "Please enter a valid email";
let subjectMsg = "Please enter a message subject";
let textAreaMsg = "Please enter your Message";

function valid(regex, field, error1, error2, event) {
    if(field.value === "") {
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
        return false;
      } else if (!(field.value.match(regex))) {
          field.nextElementSibling.innerHTML = error2;
          event.preventDefault();
          return false;
          }
      else {
        field.nextElementSibling.innerHTML = "";
        return true;
      }
}

function validation(e) {
    valid(/^[a-z]+$/i, fullName, fullNameMsg1, fullNameMsg2, e);
    valid(/[a-z0-9]+@[a-z]+\.com$/i, email, emailMsg, emailErrorMsg, e);
    valid(/^[a-z]+$/i, subject, subjectMsg, subjectMsg, e);
    valid(/^[a-z0-9]+$/i, textArea, textAreaMsg, textAreaMsg, e);
    return true;
}

submitForm.addEventListener('submit', validation);
let contactForm = document.getElementById('contact');
let fullName = document.getElementById('full-name');
let email = document.getElementById('email');
let Subject = document.getElementById('subject');
let Message = document.getElementById('textarea');
const nameRegex = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g;
const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,6})+$/;
const textareaRegex = /^[a-zA-Z]/; 


function validation(field, Regex, errorMessage1, errorMessage2, event) {
    if (field.value === "") {
      field.nextElementSibling.innerHTML = errorMessage1;
      event.preventDefault();
      return false;
    }
    if (!field.value.match(Regex)) {
      field.nextElementSibling.innerHTML = errorMessage2;
      event.preventDefault();
      return false;
    } else {
      field.nextElementSibling.innerHTML = "";
      return true;
    }
  }

function contactValidation(event) {
	validation(
      fullName,
      nameRegex,
      "This field is required",
      "Please enter your Full Name",
      event
    );
    validation(
      email,
      emailRegex,
      "Please enter your Email Address",
      "Please enter a valid Email",
      event
    );
    validation(
      Subject,
      textareaRegex,
      "This field is required",
      "Please enter your Message Subject",
      event
    );
    validation(
      Message,
      textareaRegex,
      "This field is required",
      "Please enter your Message",
      event
    );
        return true;
  }

contactForm.addEventListener("submit", contactValidation);



// // document.addEventListener('DOMContentLoaded', function () {
// //     form.addEventListener('submit', formValidation, false);
// // });

// function nameValidation(fullName, event) {
//     if (fullName.value === "") {
//         fullName.nextElementSibling.innerHTML = "This Field is Required";
//         event.preventDefault();
//         return false;
//     }else if (!(fullName.value.match(nameRegex))) {
//         fullName.nextElementSibling.innerHTML = "Please enter a valid Name";
//         event.preventDefault();
//         return false;
//     } else {
//         fullName.nextElementSibling.innerHTML = "";
//         return true;
//         }
// }  
// function emailValidation(event) {
//     if (email.value === "") {
//         email.nextElementSibling.innerHTML = "This Field is Required";
//         event.preventDefault();
//         return false;
//     }else if (!(email.value.match(formEmailRegex))) {
//         email.nextElementSibling.innerHTML = "Please enter a valid email";
//         event.preventDefault();
//         return false;
//     } else {
//         email.nextElementSibling.innerHTML = "";
//         return true;
//     }
// }
// function subjectValidation( event) {
//     if (Subject.value === "") {
//         Subject.nextElementSibling.innerHTML = "This field is required";
//         event.preventDefault();
//         return false;
//     } else {
//         Subject.nextElementSibling.innerHTML = "";
//         return true;
//         }
// }
// function messageValidation( event) {
//     if (Message.value === "") {
//         Message.nextElementSibling.innerHTML = "This field is required";
//         event.preventDefault();
//         return false;
//         } else {
//         Message.nextElementSibling.innerHTML = "";
//         return true;
//         }
// }
// function formValidation(event) {
//     nameValidation(event);
//     emailValidation(event);
//     subjectValidation(event);
//     messageValidation(event);
//     return true;
// } 
let formContact = document.getElementById("contact-page");
let fullName = document.getElementById("FullName");
let email = document.getElementById("email");
let contactSubject = document.getElementById("subject");
let contactMessage = document.getElementById("message");
let validName = /^[A-Za-z]/;
let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
let nameError = "Please enter Your Name";
let emailField = "Please enter your email address";
let emailError = "Please enter a valid email address";
let subjectError = "Please enter a subject";
let messageError = "Please enter a message";

const fieldContact = (field, fieldregex,result, error, e) => {
      if (field.value === "") {
          field.nextElementSibling.innerHTML = result;
            e.preventDefault();
              return false;
      } else if (!field.value.match(fieldregex)){
            field.nextElementSibling.innerHTML = error;
              e.preventDefault();
                return false;

      }else {
          field.nextElementSibling.innerHTML = "";
            return true;
      }
}

const validate = (e) => {
    fieldContact(fullName,validName,nameError,e);
    fieldContact(email, validEmail, emailField, emailError, e);
    fieldContact(contactSubject, subjectError, e);
    fieldContact(contactMessage, messageError, e);
      return true;
}

formContact.addEventListener("submit", validate);
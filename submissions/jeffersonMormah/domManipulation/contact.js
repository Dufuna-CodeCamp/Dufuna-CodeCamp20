let formContact = document.getElementById("contact-page");
let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let contactSubject = document.getElementById("subject");
let contactMessage = document.getElementById("message");
let validName = /^[A-Za-z]/;
let validEmail = /^+([]?+)*@+([-]?+)*({2,6})+$/;;
let nameField = "Please enter Your Name";
let nameError = "It must contain only letters";
let emailField = "Please enter your email address";
let emailError = "Please enter a valid email address";
let subjectError = "Please Enter a subject";
let messageError = "Please enter a Message";


const fieldContact = (field, fieldRegex,result, error, e) => {
      if (field.value === "") {
          field.nextElementSibling.innerHTML = result;
            e.preventDefault();
              return false;
      } else if (!field.value.match(fieldRegex)){
            field.nextElementSibling.innerHTML = error;
              e.preventDefault();
                return false;

      }else {
          field.nextElementSibling.innerHTML = "";
            return true;
      }
}

const validate = (e) => {
    fieldContact(fullName,validName,nameField,nameError,e);
    fieldContact(email, validEmail, emailField, emailError, e);
    fieldContact(contactSubject, subjectError, e);
    fieldContact(contactMessage, messageError, e);
      return true;
}

formContact.addEventListener("submit", validate);


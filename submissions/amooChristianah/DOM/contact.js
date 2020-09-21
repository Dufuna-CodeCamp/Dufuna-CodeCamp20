let form = document.getElementById("contact_form"),
  fullName = document.getElementById("full_name"),
  formEmail = document.getElementById("form_email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("description"),
  nameRegex = /^[a-zA-Z]/,
  emailRegexp = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

  
function validation(field, regExp, errorMess1, errorMess2, event) {
   
    if (field.value === "") {
      field.nextElementSibling.innerHTML = errorMess1;
      event.preventDefault();
      return false;
    }
    if (!field.value.match(regExp)) {
      field.nextElementSibling.innerHTML = errorMess2;
      event.preventDefault();
      return false;
    } else {
      field.nextElementSibling.innerHTML = "";
      return true;
    }
  }

  // form field validation
function formValidation(event) {
   

     
    validation(
      fullName,
      nameRegex,
      "Please enter your Name",
      "Please name should contain letters only",
      event
    );

    validation(
        formEmail,
        emailRegexp,
        "Please enter your Email Address",
        "Please enter a valid Email",
       event
    );

    validation(
        subject,
        "Please enter a message subject",
        " ",
        event
      );

      validation(
        message,
        "Please enter your message",
        " ",
        event
      );

    
    return true;
  }
  
  form.addEventListener("submit", formValidation);
  
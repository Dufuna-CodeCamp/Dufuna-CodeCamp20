let form = document.getElementById("contact_form"),
  fullName = document.getElementById("full_name"),
  formEmail = document.getElementById("form_email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("description");
  

  function required(field, error, event){
    if (field.value === "") {
      field.nextElementSibling.innerHTML = error;
      event.preventDefault();
      return false;
    }
     else {
      field.nextElementSibling.innerHTML = "";
      return true;
    }
  }

  
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
  const nameRegex = /^[a-zA-Z]/,
        emailRegexp = /^\w+[\w-]*\@\w+((-\w+)|(\w*))[a-z]{2,3}$/;
        required(subject , "Please enter a message subject" , event);
        required(message, "Please enter your Message", event);

validation(
      fullName,
      nameRegex,
      "Please enter your Name",
      "Please a valid name",
      event
    );

    validation(
        formEmail,
        emailRegexp,
        "Please enter your Email Address",
        "Please enter a valid Email",
       event
    );
    return true;
  }
  
  form.addEventListener("submit", formValidation);
let form= document.getElementById("details"),
 fullName= document.getElementById("full-name"),
 Email = document.getElementById("email-address"),
 subject = document.getElementById("subject"),
 message =document.getElementById("message");
 
 function required(field , error, event){
  if (field.value === "") {
    field.nextElementSibling.innerHTML = error;
    event.preventDefault();
    return false;
  }
  else{
        field.nextElementSibling.innerHTML="";
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
}""
function formValidation(event) {
  const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/,
        nameRegex = /^[a-zA-Z]/;
        required(subject, "Please enter a message subject", event);
       required(message, "Please enter your Message", event);

  validation(
    fullName,
    nameRegex,
    "Please enter your Name",
    "Please enter a valid name",
    event
  );
  
  validation(
    Email,
    emailRegex,
    "Please enter your email",
    "Please enter a valid email",
    event
  );
  return true;
}
form.addEventListener("submit", formValidation); 
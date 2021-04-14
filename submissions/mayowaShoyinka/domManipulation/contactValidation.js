

let contactForm = document.getElementById('contactValidation'),
    fullName = document.getElementById('fullName'),
    emailAddress = document.getElementById('emailAddress'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');

function validateContact(field,regex,errorOne,errorTwo, event) {
  if(field.value === ""){
        field.nextElementSibling.innerHTML = errorOne;
        event.preventDefault();
        return false;
  } else if(!field.value.match(regex)){
        field.nextElementSibling.innerHTML = errorTwo;
        event.preventDefault();
        return false;
   } else{
         field.nextElementSibling.innerHTML = "";
         return true;
  }
}

function validateMessage(field, errorOne, event){
   if(field.value === ""){
        field.nextElementSibling.innerHTML = errorOne;
        event.preventDefault();
    return false;
  } else {
        field.nextElementSibling.innerHTML ="";
        return true;
  }
}


let nameRegex =  /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/, 
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

 function contactValidate(event) {
         validateContact(fullName, nameRegex, "Please enter your Name","Please enter a valid Name",event);
         validateContact(emailAddress, emailRegex, "Please enter your Email Address","Please enter a valid email",event);
         validateMessage(subject, "Please enter a message subject", event);
         validateMessage(message, "Please enter a message subject", event);
        
         return true;
}

contactForm.addEventListener("submit", contactValidate);
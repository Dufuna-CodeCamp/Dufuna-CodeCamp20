let submitForm = document.getElementById("contactForm"),
    fullName = document.getElementById("fullName"),
    email = document.getElementById("emailaddress"),
    subject = document.getElementById("subject"),
    textarea = document.getElementById("textarea")
;

function contactValidation(field,regex,errorOne,errorTwo){
    event.preventDefault();
    if(field.value === ""){
        field.nextElementSibling.innerHTML = errorOne;
        event.preventDefault();
        return false;
    }else if(!field.value.match(regex)){
        field.nextElementSibling.innerHTML = errorTwo;
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = "";
    }
}

function validateContact(event) {
  let fullNameRegex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
      emailRegex =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      subjectRegex = /^[A-Za-z]+$/,
      messageRegex = /^[A-Za-z]+$/;
      
      contactValidation(fullName,fullNameRegex,
        "Please enter your Name","Please enter a valid Name",event);
      contactValidation(email,emailRegex,
        "Please enter your email","Please enter a valid email",event);
      contactValidation(subject,subjectRegex,
        "Please enter your subject",null,event);
      contactValidation(textarea,messageRegex,
        "Please enter your message in the text area above",null,event);
}
submitForm.addEventListener("submit",validateContact);

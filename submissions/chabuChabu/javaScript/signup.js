let submitForm = document.getElementById('validateSignUp'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phoneNumber = document.getElementById('phoneNumber'),
    emailAddress = document.getElementById('emailAddress'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword')
;

function signUpValidation(field,regdex,errorOne,errorTwo, event) {
 event.preventDefault();
  if(field.value === ""){
    field.nextElementSibling.innerHTML = errorOne;
    event.preventDefault();
    return false;
  }else if(!field.value.match(regdex)){
     field.nextElementSibling.innerHTML = errorTwo;
     event.preventDefault();
     return false;
   }else{
     field.nextElementSibling.innerHTML = "";
  }
}

function validateSignUp(event) {
    let nameRegex =  /^[A-Za-z]+$/,
        phoneRegex = /^[+]?[0-9]{8,14}$/i,
        emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        passwordRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

     signUpValidation(firstName,nameRegex,
        "Please enter your first name","Please enter a valid First Name",event);

     signUpValidation(lastName,nameRegex,
        "Please enter your last name","Please enter a valid last name",event);

     signUpValidation( phoneNumber, phoneRegex,
        "Please enter your phone number","Please enter a valid Phone Number",event);

     signUpValidation( emailAddress, emailRegex,
        "Please enter your email address","Please enter a valid email address",event);

     signUpValidation( password,passwordRegex,
        "Please enter the password ","Your password should have a minimum of 6 characters,1 capital letter,1 special character eg @ and number 1",event);
     
     signUpValidation( confirmPassword ,passwordRegex,
        "Please confirm your password","Your password do not match",event);
    return true;
}
submitForm.addEventListener("submit",validateSignUp);


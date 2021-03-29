




let signupForm = document.getElementById('signupValidation'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phoneNumber = document.getElementById('phoneNumber'),
    emailAddress = document.getElementById('emailAddress'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword')

;

  function validateSignup(field,regdex,errorOne,errorTwo, event) {
  if(field.value === ""){
    field.nextElementSibling.innerHTML = errorOne;
    event.preventDefault();
    return false;
  } else if(!field.value.match(regdex)){
     field.nextElementSibling.innerHTML = errorTwo;
     event.preventDefault();
     return false;
   } else{
     field.nextElementSibling.innerHTML = "";
     return true;
  }
}

 function signupValidate(event) {
    let nameRegex =  /^[A-Za-z]+$/,
        phoneRegex = /^[+]?[0-9]{8,14}$/i,
        emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        passwordRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

     validateSignup(firstName,nameRegex,
        "Please enter your first name","Please enter a valid First Name",event);

     validateSignup(lastName,nameRegex,
        "Please enter your last name","Please enter a valid last name",event);

     validateSignup( phoneNumber, phoneRegex,
        "Please enter your phone number","Please enter a valid Phone Number",event);

     validateSignup( emailAddress, emailRegex,
        "Please enter your email address","Please enter a valid email address",event);

    validateSignup( password,passwordRegex,
        "Please enter the password ","Your password should have a minimum of 6 characters,1 capital letter,1 special character eg @ and number 1",event);
     
     validateSignup( confirmPassword ,passwordRegex,
        "Please confirm your password","Your password do not match",event);
    return true;
}


signupForm.addEventListener("submit", signupValidate);


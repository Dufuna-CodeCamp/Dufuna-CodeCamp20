let signupForm = document.getElementById('signupValidation'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    phoneNumber = document.getElementById('phoneNumber'),
    emailAddress = document.getElementById('emailAddress'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword');

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

 let passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
function passwordValidation(password1, password2, event) {

    if ((password1.value && password2.value) === "") {
        password1.nextElementSibling.innerHTML = "Please enter your password";
        password2.nextElementSibling.innerHTML = "Please confirm your password";
        event.preventDefault();
        return false;
    } else if ((!password1.value.match(passwordRegex)) && (!password2.value.match(passwordRegex))) {
        password1.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        password2.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        event.preventDefault();
        return false;

    } else if (password.value !== password2.value) {
        password1.nextElementSibling.innerHTML = "Password don't match!";
        password2.nextElementSibling.innerHTML = "Password don't match!";
        event.preventDefault();
        return false;
    } else {
        password1.nextElementSibling.innerHTML = "";
        password2.nextElementSibling.innerHTML = "";
        return true;
    }
}

let nameRegex =  /^[A-Za-z]+$/,
    phoneRegex = /^[+]?[0-9]{8,14}$/i,
    emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

 function signupValidate(event) {
     validateSignup(firstName,nameRegex, "Please enter your first name","Please enter a valid First Name",event);
     validateSignup(lastName,nameRegex, "Please enter your last name","Please enter a valid last name",event);
     validateSignup(phoneNumber, phoneRegex, "Please enter your phone number","Please enter a valid Phone Number",event);
     validateSignup(emailAddress, emailRegex,"Please enter your email address","Please enter a valid email address",event);
     passwordValidation(password, confirmPassword, event);
        
      return true;
}

signupForm.addEventListener("submit", signupValidate);



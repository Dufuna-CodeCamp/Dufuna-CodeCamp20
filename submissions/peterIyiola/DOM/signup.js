let submitForm = document.getElementById('validateForm'),
    email = document.getElementById('email'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword'),
    phoneNumber = document.getElementById('phoneNumber');


    function required(field,event)  {
        if (field.value ==='')  {
            field.nextElementSibling.innerHTML = "this field is required";
            event.preventDefault();
            return false;
        }
        else {
            field.nextElementSibling.innerHTML= "";
            return true;
        }  
        }
    function emailValidation(event) {
        let emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/;
        if(email == '')  {
        email.nextElementSibling.innerHTML = "This field cannot be empty";
        email.preventDefault();
        return false;

        }
        else if (!email.value.match(emailRegex)) {
            email.nextElementSibling.innerHTML = "Please enter a Valid email";
            event.preventDefault();
            return false;
        }
        else{
            email.nextElementSibling.innerHTML="";
            return true;
        }
    
    } 
   
    function firstValidation(event) {
        let firstNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        if(firstName == '')  {
        firstName.nextElementSibling.innerHTML = "This field cannot be empty";
        event.preventDefault();
        return false;

        }
        else if (!firstName.value.match(firstNameRegex)) {
            firstName.nextElementSibling.innerHTML = "Please enter your first name";
            event.preventDefault();
            return false;
        }
        else{
            firstName.nextElementSibling.innerHTML="";
            return true;
        }
    }
    
    
    function phoneValidation(event) {
        let phoneNumberRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        if(firstName == '')  {
        phoneNumber.nextElementSibling.innerHTML = "This field cannot be empty";
        event.preventDefault();
        return false;

        }
        else if (!phoneNumber.value.match(phoneNumberRegex)) {
            phoneNumber.nextElementSibling.innerHTML = "Please enter your first Phone Number";
            event.preventDefault();
            return false;
        }
        else{
            phoneNumber.nextElementSibling.innerHTML="";
            return true;
        }
    }
    function validatePassword (event) {
        let passwordRegex = /^[a-z0-9]+$/i;
        if (!password.value.match(passwordRegex)) {
            password.nextElementSibling.innerHTML = "password must contain at least one letter,number and special character";
            event.preventDefault();
            return false;
        }
        else if (!(password.value.length >= 6))   {
            password.nextElementSibling.innerHTML = "password length must be equal to or greater than Six";
            password.preventDefault();
            return false;
  
        }
        else{
            password.nextElementSibling.innerHTML = "";
            return true;
        }
    } 
    function lastValidation(event) {
        let lastNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        if(lastName == '')  {
        lastName.nextElementSibling.innerHTML = "This field cannot be empty";
        event.preventDefault();
        return false;

        }
        else if (!lastName.value.match(lastNameRegex)) {
            lastName.nextElementSibling.innerHTML = "Please enter your last name";
            event.preventDefault();
            return false;
        }
        else{
            lastName.nextElementSibling.innerHTML="";
            return true;
        }
    
    } 
    function confValidation(event)  {
        if (!confirmPassword === password){
            confirmPassword.nextElementSibling.innerHTML = "Password confirm your password";
            return false;
    }
    else if (confirmPassword=='')   {
        confirmPassword.nextElementSibling.innerHTML= "Please enter your password";
        event.preventDefault();
        return false;
    }
    else    {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
    }

    
    function validateForm(e){
        required(firstName, e);
        required(lastName, e);
        required(password, e);
        required(confirmPassword, e);
        required(phoneNumber, e);
        required(email, e);
        emailValidation(e);
        validatePassword(e);
        firstValidation(e);
        lastValidation(e);
        return true;
    }
        
    submitForm.addEventListener("submit", validateForm);
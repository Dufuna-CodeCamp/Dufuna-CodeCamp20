let submitForm = document.getElementById("formvalidation");
    firstName = document.getElementById('firstname');
    lastName = document.getElementById("lastname");
    email = document.getElementById('email');
    password = document.getElementById('password');
    confirm_password = document.getElementById("password2");
    mobile = document.getElementById('phone-no');

function required(field, event){
    if(field.value == ''){
        field.nextElementSibling.innerHTML ='This field is required';
        event.preventDefault();
        return false;
    } else{
        field.nextElementSibling.innerHTML="";
        return true;
    }
}
function firstNameValidation(event){
    let nameReg =/^[a-zA-Z]+$/i;
    if(!firstName.value.match(nameReg)){
        firstName.nextElementSibling.innerHTML ='Enter only letters';
        event.preventDefault();
        return false;
    }else{
        firstName.nextElementSibling.innerHTML ='';
        return true;
    }
}
function secondNameValidation(event){
    let nameReg =/^[a-zA-Z]+$/i;
    if(!lastName.value.match(nameReg)){
        lastName.nextElementSibling.innerHTML ='Enter only letters';
        event.preventDefault();
        return false;
    }else{
        lastName.nextElementSibling.innerHTML ='';
        return true;
    }
}
function emailValidation(event){
    let emailReg=/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/i;
        if(!email.value.match(emailReg)){
        email.nextElementSibling.innerHTML ='Enter a valid email'
        event.preventDefault();
        return false;
    }
    else{
        email.nextElementSibling.innerHTML ="";
        return true;
    }
}
function passwordValidation(event){
    let passwordReg =/^[a-zA-Z0-9]+$/i;
    if(!password.value.match(passwordReg)){
        password.nextElementSibling.innerHTML ='Password Must Contain Letters and Numbers Only';
        event.preventDefault();
        return false;
    }
    else if(!(password.value.length >=6)){
        password.nextElementSibling.innerHTML ='Password length must not be less than 6';
        event.preventDefault();
        return false;
    }
    else{
        password.nextElementSibling.innerHTML="";
        return true;
    }
}
function confirmPassword_Validation(event){
    let passwordReg =/^[a-zA-Z0-9]+$/i;
    if(!confirm_password.value.match(passwordReg)){
        confirm_password.nextElementSibling.innerHTML ='Password Must Contain Letters and Numbers Only';
        event.preventDefault();
        return false;
    }
    else if((password.value && password.value) != confirm_password.value){
        confirm_password.nextElementSibling.innerHTML ='Password do not match';
        event.preventDefault();
        return false;
    }
    else{
      confirm_password.nextElementSibling.innerHTML='';
      return true;
    }
}

function mobilevalidation(event){
    let mobileReg =/^\(?\d{5}\)?-?\s*-?\d{6}$/;
    if(!mobile.value.match(mobileReg)){
        mobile.nextElementSibling.innerHTML ="Enter a Valid Phone Number";
        event.preventDefault();
        return false;
    }
    else{
        mobile.nextElementSibling.innerHTML ='';
        return true;
    }
}

function validateForm(e){
    required(firstName, e);
    required(lastName, e);
    required(email, e);
    required(password, e);
    required(confirm_password, e);
    firstNameValidation(e);
    secondNameValidation(e);
    emailValidation(e);
    passwordValidation(e);
    confirmPassword_Validation(e);
    mobilevalidation(e);
    return true;
}
submitForm.addEventListener('submit' ,validateForm);
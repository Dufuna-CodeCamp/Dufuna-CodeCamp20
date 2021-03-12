let submitForm = document.getElementById('formvalidation');
firstName = document.getElementById('firstName');
lName = document.getElementById('lastName');
otherName = document.getElementById('otherName');
mobile = document.getElementById('phone');
email = document.getElementById('email');
password = document.getElementById('password');
confirm_password = document.getElementById('password2');


function required(field, event) {
    if (field.value == '') {
    field.nextElementSibling.innerHTML ='This field is required';
    event.preventDefault();
    return false;
    }
    else {
        field.nextElementSibling.innerHTML ="";
        return true;
    }
}

function emailValidation(event){
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.value.match(emailRegex)) {
            email.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault();
            return false;
        }
        else{
            email.nextElementSibling.innerHTML ='';
            return true;
        }
    }

    function passwordValidation(event){
        let pwdRegex = /^[a-z0-9]+$/i;
        if(!password.value.match(pwdRegex)) {
            password.nextElementSibling.innerHTML ="Password must contain letters or numbers only";
            event.preventDefault();
            return false;
        } else if(!(password.value.length >= 6)) {
            password.nextElementSibling.innerHTML ='Password length should be equal to or greater than 6';
            event.preventDefault();
            return false;
        }
        else{
            password.nextElementSibling.innerHTML = '';
            return true;
        
        }
    }
    function passwordConfirmation(event){
        if((password.value && password.value) != confirm_password.value){
            confirm_password.nextElementSibling.innerHTML = "Passwords do not match";
            event.preventDefault();
            return false;
        }
        else{
            confirm_password.nextElementSibling.innerHTML ="";
            return true;
        }
    }


    function mobilevalidation(event){
        if(!mobile.value.length < 11){
            mobile.nextElementSibling.innerHTML = "Phone number must be 11 digits only";
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
     required(otherName, e);
     required(mobile, e);
     required(email , e);
     required(password, e);
     required(confirm_password, e);
     required(lName, e);
     emailValidation(e);
     passwordValidation(e);
     passwordConfirmation(e);
     mobilevalidation(e);
     return true;
 }



 submitForm.addEventListener('submit' ,validateForm);


 

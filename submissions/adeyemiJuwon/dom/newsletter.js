let submitForm = document.getElementById('newsletter');
let email = document.getElementById('email');



function required(field, event){
    if(field.value == ""){
        document.querySelector(".error").innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    }else{
        document.querySelector(".error").innerHTML = "";
        return true;
    }
    }
    
    function emailFieldValidation(event){
        emailRegex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
        if (!email.value.match(emailRegex)){
            document.querySelector(".error").innerHTML = "Please enter a valid email";
            event.preventDefault();
            return false;
        } else{
            document.querySelector(".error").innerHTML =  "";
            return true;
        }
    }

    function validateForm(e){
        required(email, e); 
        emailFieldValidation(e);
       
        return true;
    }
    submitForm.addEventListener('submit', validateForm);
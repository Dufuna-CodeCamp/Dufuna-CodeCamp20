let submitForm = document.getElementById('newsletter');
let email = document.getElementById('email');
let emailRegex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;


    function validateForm(e){
        
        if(email.value === ""){
            document.querySelector(".error-newsletter").innerHTML = "Please enter your Email Address";
            e.preventDefault();
            return false;
        }else if(!email.value.match(emailRegex)){
            document.querySelector(".error-newsletter").innerHTML = "Please enter a valid email";
            e.preventDefault();
            return false;
        }else{
            document.querySelector(".error").innerHTML = "";
            return true;
        }
       
    }
    submitForm.addEventListener('submit', validateForm);
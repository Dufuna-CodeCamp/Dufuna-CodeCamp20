// Newsletter task
// add the html 

const submitForm = document.getElementById('newsletter');
const email = document.getElementById('email');
const emailRegex = "/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/";


    function validateForm(e){
        if(email.value === ""){
            document.querySelector(".err").innerHTML = "Please enter your Email Address";
            e.preventDefault();
            return false;
        }
        
         if(!email.value.match(emailRegex)){
            document.querySelector(".err").innerHTML = "Please enter a valid email";
            e.preventDefault();
            return false;
        }
         else{
            document.querySelector(".err").innerHTML = "";
            return true;
        }
       
    }
    submitForm.addEventListener('submit', validateForm);
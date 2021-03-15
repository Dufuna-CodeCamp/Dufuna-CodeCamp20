let submitForm = document.getElementById("formvalidation");
    firstName = document.getElementById('firstname');
    lastName = document.getElementById("lastname");
    email = document.getElementById('email');
    password = document.getElementById('password');
    confirm_password = document.getElementById("password2");
    mobile = document.getElementById('phone-no');
    nameReg =/^[a-zA-Z]+$/i;
    mobileReg =/^\(?\d{5}\)?-?\s*-?\d{6}$/;
    emailReg=/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/;
    passwordReg =/(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
    passWordMessage ='Password is invalid';

    function required(field,RegExp, error, message, event){
        if(field.value == ''){
            field.nextElementSibling.innerHTML = "This field is required";
            event.preventDefault();
            return false;
        }
        else if(!field.value.match(RegExp)){
            field.nextElementSibling.innerHTML = message;
            event.preventDefault();
            return false;
        }
        else{
            field.nextElementSibling.innerHTML="";
            return true;
        }
    
}
function emailValidation(event){
    if(!(confirm_password.value == password.value)){
        confirm_password.nextElementSibling.innerHTML ="Password do not match";
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
}
    function formValidation(event){
        required(
            firstName,
            nameReg,
            "Please Enter Your First Name",
            "Enter a Valid User Name",
            event
        );
        required(
            lastName,
            nameReg,
            "Please Enter Your Last Name",
            "Enter a Valid User Name",
            event
        );
        required(
            email,
            emailReg,
            "Please Enter Your Email Address",
            "Enter a Valid Email Address",
            event
        );
        required(
            mobile,
            mobileReg,
            "Please Enter Your Email Address",
            "Enter a Valid Phone Number",
            event
        );
        required(
            password,
            passwordReg,
            "Please Enter Your Password",
            passWordMessage,
            event
        );
          required(confirm_password, event);           
          emailValidation(event);
        );
        return true;
    }
    submitForm.addEventListener('submit', formValidation);

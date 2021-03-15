let submitForm = document.getElementById("formvalidation");
    firstName = document.getElementById('firstname');
    lastName = document.getElementById("lastname");
    email = document.getElementById('email');
    password = document.getElementById('password');
    confirm_password = document.getElementById("password2");
    mobile = document.getElementById('phone-no');
    nameReg =/^[a-zA-Z]+$/i;
    mobileReg =/^\(?\d{5}\)?-?\s*-?\d{6}$/;
    emailReg=/^(([a-zA-Z0-9_\-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-]+)@{[a-zA-Z0-9_\-]+0\.([a-zA-Z]{2,5}){1,25})+)*$/i;
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
        required(
            confirm_password,
            passwordReg,
            "Please Confirm Your Password",
            'Password do not match',
            event
        );
        passwordValidation(password, confirm_password, event);
return true;
    }
    submitForm.addEventListener('submit', formValidation);
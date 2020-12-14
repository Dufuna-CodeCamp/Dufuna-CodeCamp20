let submitForm = document.getElementById('validateForm'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    email = document.getElementById('email'),
    number = document.getElementById('number'),
    passWord = document.getElementById('password'),
    confirmPassword = document.getElementById('confirmPassword'),
    terms = document.getElementById('terms')
    ;

    //required fields function
     function required(field, event) {
        if (field.value === '') {
            field.nextElementSibling.innerHTML = "This field is required";
            event.preventDefault();
            return false;
        }   else {
            field.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    //name fields validation regex
    function lettersOnly(firstName, lastName, otherName) {
        //validate name fields to accepted only letters/cass sensitive
        var regex = /[^a-z]/gi;
        firstName.value = firstName.value.replace(regex, "");
        lastName.value = lastName.value.replace(regex, "");
        otherName.value = lastName.value.replace(regex, "");
    }
    //firstName field validation conditions
    function firstNameFieldValidation(event) {
        //prevent empty name field submission
        if(firstName.value === '') {
            firstName.nextElementSibling.innerHTML = "Please enter your First name"
            event.preventDefault();
            return false;
        }else if(!lettersOnly(firstName.value)) {
            event.preventDefaulty();
        } else {
            firstName.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    //lastNmae field validation conditions
    function lastNameFieldValidation(event) {
        //prevent empty name field submission
        if(lastName.value === '') {
            lastName.nextElementSibling.innerHTML = "Please enter your Last name"
            event.preventDefault();
            return false;
        } else if(!lettersOnly(lastName.value)) {
            event.preventDefaulty();
        } else {
            lastName.nextElementSibling.innerHTML = "";
            return true;
        }
    }    

    //phone number field validation regex
    function numbersOnly(input) {
        //validate number field to accept only number and "+" sign
        var regex = /[^0-9+]/g;
        input.value = input.value.replace(regex, "");
    }
    //phone number field validation conditions
    function numberFieldValidation(event) {
        //prevent empty phone number field submission
        if(number.value === '') {
            number.nextElementSibling.innerHTML = "Please enter your Phone number"
            event.preventDefault();
            return false;
        } else if(!numbersOnly(number.value)) {
            event.preventDefaulty();
        } else {
            number.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    //email field validation regex
    function isEmail(email) {
        //validate email field using regex to accept only valid email format
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
   }
    //email field validation conditions
    function emailFieldValidation(event) {
        //prevent empty email field submission 
        if(email.value === '') {
            email.nextElementSibling.innerHTML = "Please enter your Email Address"
            event.preventDefault();
            return false;
            //prevent invalid email format submission
        } else if(!isEmail(email.value)) {
            email.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault();
            return false;
        } else {
            email.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    //password fields validation regex
        function validatePassword(password) {
            //validate password field to accept 1 capital letter, 1 special character eg @ and 1 number
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);
        }
    //password field validation conditions
    function passwordFieldValidation(event) {
        //prevent empty password field submission 
        if(password.value === '') {
            password.nextElementSibling.innerHTML = "Please enter your Password"
            event.preventDefault();
            return false;
            //validate password field input with specified regex format
        } else if(!validatePassword(password.value)) {
            password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
            //validate password field to accept a minimum of 6 characters 
        } else if(!password.value.length >= 6) {
            password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
            event.preventDefault();
        }
    }

    //confirmPassword field validation conditions
    function confirmPasswordFieldValidation(event) {
        //prevent empty confirmPassword field submission
        if(confirmPassword.value === '') {
            confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
            event.preventDefault();
            return false;
            //validate confirmPassword field input matches password field input
        } else if(confirmPassword.value != password.value) {
            confirmPassword.nextElementSibling.innerHTML = "Your passwords don't match";
            event.preventDefault();
            return false;
        } else {
            confirmPassword.nextElementSibling.innerHTML = "";
            return true;
        }
    }

    //Validate terms and condition is accepted before form submission
    function termsValidation(event) {
        if(terms.checked == false) {
            terms.nextElementSibling.innerHTML = "Please accept terms and conditions";
            event.preventDefault();
            return false;
        } else {
            terms.nextElementSibling.innerHTML = "I agree to the terms and conditions";
            return true;
        }
    }

    //form validation
    function validateForm(e){
        required(firstName, e);
        required(lastName, e);
        required(email, e);
        required(number, e);
        required(passWord, e);
        required(confirmPassword, e);
        required(terms, e)
        emailFieldValidation(e);
        firstNameFieldValidation(e);
        lastNameFieldValidation(e);
        numberFieldValidation(e);
        passwordFieldValidation(e);
        confirmPasswordFieldValidation(e);
        termsValidation(e);
        
        return true;
    }

    submitForm.addEventListener("submit", validateForm);

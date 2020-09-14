let signupForm = document.getElementById("form-signup");
let firstName = document.getElementById("FirstName");
let lastName = document.getElementById("LastName");
let phoneNum = document.getElementById("Phone");
let emailAddress = document.getElementById("email");
let passWord = document.getElementById("Password");
let confPassword = document.getElementById("conf-password");
let nameCheck = /^[A-za-z]/;
let checkNum =  /^[\+0-9]{8,15}$/;
let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
let pwdVal = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
let firstNameInput = "Please Enter Your First Name";
let firstNameError = "It can contain only letters";
let lastNameInput = "Please Enter Your Last Name";
let LastNameError = "Letters Only";
let phoneInput = "Please Enter Your Phone Number";
let phoneError = "Please enter a  valid phone number";
let emailInput = "Please enter your phone number";
let emailError = "Please enter a valid email address";
let passWordInput = "Please Enter your password";
let passwordError = "Your Password should have a minimum of 6 characters, 1 capiyal letter, 1 special character and 1 number";

const fieldVal = (field, allRegex, output, result, e) => {
    if (field.value === "") {
        field.nextElementSibling.innerHTML = output;
        e.preventDefault();
        return false;
    } else if (!field.value.match(allRegex)) {
       field.nextElementSibling.innerHTML = result;
       e.preventDefault();
       return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
    }
const confPwdVal = (e) => {
    if (confPassword.value === "") {
        confPassword.nextElementSibling.innerHTML = "Please Confirm Your Password";
        e.preventDefault();
            return false;
    } else if (!(passWord.value == confPassword.value)){
            confPassword.nextElementSibling.innerHTML = "Password Mismatch";
            e.preventDefault();
            return false;
        }else {
    confPassword.nextElementSibling.innerHTML = "";
    return true;
        }
    }

const signupVal = (e) => {
fieldVal(firstName, nameCheck, firstNameInput, firstNameError, e);
fieldVal(lastName,nameCheck, lastNameInput, LastNameError, e);
fieldVal(phoneNum,checkNum, phoneInput, phoneError, e);
fieldVal(emailAddress, validEmail, emailInput, emailError, e);
fieldVal(passWord, pwdVal, passWordInput, passwordError, e);
confPwdVal(e);
return true;
}

signupForm.addEventListener("submit", signupVal);




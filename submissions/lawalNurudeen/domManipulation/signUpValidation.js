const signUpForm = document.querySelector("#signup-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const phoneNumber = document.querySelector("#phonenumber");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");
const nameRegex = /^[A-Za-z]+$/;
const phoneNumberRegex = /[+][0-9]*$/;
const emailRegex = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;
const passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;


const fieldValidation = (fieldName, fieldRegex, error_1, error_2, e) => {
    if(fieldName.value === ""){
        fieldName.nextElementSibling.textContent = error_1;
        e.preventDefault();
        return false;
    } else if (!fieldName.value.match(fieldRegex)){
        fieldName.nextElementSibling.textContent = error_2;
        e.preventDefault();
        return false;
    } else {
        fieldName.nextElementSibling.textContent = "";
        return true;
    }
}

const matchPasswords = (e) => {
    if(confirmPassword.value === ""){
        confirmPassword.nextElementSibling.textContent = "Please confirm your password";
        e.preventDefault();
        return false;
    } else if (confirmPassword.value !== password.value){
        confirmPassword.nextElementSibling.textContent = "Your passwords do not match";
        e.preventDefault();
        return false;
    } else {
        confirmPassword.nextElementSibling.textContent = "";
        return true;
    }
}

const validationRequirements = (e) => {
    fieldValidation(firstName, nameRegex, "Please enter your first name", "Name cannot contain special characters", e);
    fieldValidation(lastName, nameRegex, "Please enter your last name", "Name cannot contain special characters", e);
    fieldValidation(phoneNumber, phoneNumberRegex, "Please enter your phone number", "Please enter a valid phone number", e);
    fieldValidation(email, emailRegex, "This field is required", "Please enter a valid email", e);
    fieldValidation(password, passwordRegex, "Please enter your password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number", e);
    matchPasswords(e);
    return true;
}

signUpForm.addEventListener("submit", (e) => {
    validationRequirements(e);
})
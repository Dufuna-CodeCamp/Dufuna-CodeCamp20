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


const fieldValidation = (fieldName, fieldRegex, error_1, error_2) => {
    if(fieldName.value === ""){
        fieldName.nextElementSibling.textContent = error_1;
    } else if (!fieldName.value.match(fieldRegex)){
        fieldName.nextElementSibling.textContent = error_2;
    } else {
        fieldName.nextElementSibling.textContent = "";
    }
}

const matchPasswords = () => {
    if(confirmPassword.value === ""){
        confirmPassword.nextElementSibling.textContent = "Please confirm your password";
    } else if(confirmPassword.value !== password.value){
        confirmPassword.nextElementSibling.textContent = "Your passwords do not match";
    } else {
        confirmPassword.nextElementSibling.textContent = "";
    }
}

const validationRequirements = () => {
    fieldValidation(firstName, nameRegex, "Please enter your first name", "Name cannot contain special characters");
    fieldValidation(lastName, nameRegex, "Please enter your last name", "Name cannot contain special characters");
    fieldValidation(phoneNumber, phoneNumberRegex, "Please enter your phone number", "Please enter a valid phone number");
    fieldValidation(email, emailRegex, "This field is required", "Please enter a valid email");
    fieldValidation(password, passwordRegex, "Please enter your password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number");
    matchPasswords();
}

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validationRequirements();
})
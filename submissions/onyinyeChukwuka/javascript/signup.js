let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let phoneNumber = document.getElementById('phonenumber');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('cpassword');
let signupbutton = document.getElementById('signupbutton');

// to trigger the required error messages when the user clicks the signup button
signupbutton.addEventListener('click', () => {
    let emailValid = validateEmail(email);
    let numberValid = validateNumber(phoneNumber);
    let passwordValid =  validatePassword(password);
    let confirmPasswordValid = validateConfirmPassword(confirmPassword, password);
    let firstNameValid = validateFirstName(firstName);
    let lastNameValid = validateLastName(lastName);
    if (emailValid && numberValid && passwordValid && confirmPasswordValid && firstNameValid && lastNameValid) {
        console.log("Validation successful");
    } else {
        console.log("Validation failed");
    }
});


// to print out individual error messages according to the specific text fields
validateFirstName = (firstName) => {
    const firstNameRegex = /[^a-zA-Z]/;
    if (firstName.value === "") {
        firstName.nextElementSibling.innerHTML = "Please enter your First Name";
        return false;
    }
    if (firstNameRegex.test(firstName.value)) {
        firstName.nextElementSibling.innerHTML = "Please enter a valid first name";
        return false;
    } else {
        firstName.nextElementSibling.innerHTML = "";
        return true;
    }
}

validateLastName = (lastName) => {
    const lastNameRegex = /[^a-zA-Z]/;
    if (lastName.value === "") {
        lastName.nextElementSibling.innerHTML = "Please enter your Last Name";
        return false;
    }
    if (lastNameRegex.test(lastName.value)) {
        lastName.nextElementSibling.innerHTML = "Please enter a valid last name";
        return false;
    } else {
        lastName.nextElementSibling.innerHTML = "";
        return true;
    }
}

validateNumber = (phoneNumber) => {
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g;
    if (phoneNumber.value === "") {
        phoneNumber.nextElementSibling.innerHTML = "Please enter your Phone Number";
        return false;
    }
    if (!phoneRegex.test(phoneNumber.value)) {
        phoneNumber.nextElementSibling.innerHTML = "Please enter a valid phone number";
        return false;
    } else {
        phoneNumber.nextElementSibling.innerHTML = "";
        return true;
    }
}

validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === "") {
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        return false;
    }
    if (!emailRegex.test(email.value)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

validatePassword = (password) => {
    const passwordRegex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);
    if (password.value === "") {
        password.nextElementSibling.innerHTML = "Please enter your Password";
        return false;
    }
    if (!passwordRegex.test(password.value)) {
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
        return false;
    } else {
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}

validateConfirmPassword = (confirmPassword, password) => {
    if (confirmPassword.value === "") {
        confirmPassword.nextElementSibling.innerHTML = "Please confirm your Password";
        return false;
    }
    if (confirmPassword.value !== password.value) {
        confirmPassword.nextElementSibling.innerHTML = "Your passwords don't match";
        return false;
    } else {
        confirmPassword.nextElementSibling.innerHTML = "";
        return true;
    }
}
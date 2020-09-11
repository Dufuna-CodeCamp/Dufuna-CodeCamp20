const submitBtn = document.getElementById("submit");

const validation = (e) => {
    
    const firstName = document.getElementById("FirstName");
    const lastName = document.getElementById("LastName");
    const phoneNum = document.getElementById("Phone");
    const emailAddress = document.getElementById("email");
    const passWord = document.getElementById("Password");
    const confPassword = document.getElementById("conf-password");

 

    if (firstName.value === "") {
        firstName.nextElementSibling.innerHTML = "Please Enter Your First Name";
        e.preventDefault();
        return false;
    } 

    if (lastName.value === "") {
        lastName.nextElementSibling.innerHTML = "Please Enter Your Last Name";
        e.preventDefault();
        return false;
    }

    if (phoneNum.value === "") {
        phoneNum.nextElementSibling.innerHTML = "Please Enter Your Phone Number";
        phoneNum.focus();
        return false;
    } 
    if (!checkNum(phoneNum.value)) {
        phoneNum.nextElementSibling.innerHTML = "Please Enter a valid Phone Number";
        e.preventDefault();
        return false;
    }
    if (emailAddress.value === "") {
        emailAddress.nextElementSibling.innerHTML = "Please Enter Your Email Address";
        emailAddress.focus();
        return false;
    }

    if (!validEmail(emailAddress.value)) {
        emailAddress.nextElementSibling.innerHTML = "Please Enter a Valid Email address";
        e.preventDefault();
        return false;
    }

    if (passWord.value === "") {
        passWord.nextElementSibling.innerHTML = "Please Enter Your Password";
        e.preventDefault();
        return false;
    }

    if(!pwdVal(passWord.value)) {
        passWord.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character and 1 number."
        e.preventDefault();
        return false;
    }

    if(confPassword.value === "") {
        confPassword.nextElementSibling.innerHTML = "Please Confirm Your Password";
        e.preventDefault();
        return false;
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.nextElementSibling.innerHTML = "Your password don't match";
        e.preventDefault();
        return false;
    }

    return true;

}

const checkNum = phoneNum => {
    return /^[\+0-9]{8,15}$/.match(phoneNum);
}

const validEmail = emailAddress => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.match(emailAddress);
}

const pwdVal = passWord => {
    return /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/.match(passWord);
}

const confPwd = confPassword => {
    return /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/.match(confPassword);
}

submitBtn.addEventListener('click', validation);




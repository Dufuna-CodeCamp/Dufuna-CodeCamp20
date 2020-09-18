let form = document.getElementById("signup_form"),
  firstName = document.getElementById("first_name"),
  lastName = document.getElementById("last_name"),
  phoneNumber = document.getElementById("phone_number"),
  formEmail = document.getElementById("form_email"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm_password");

function validation(field, regExp, errorMess1, errorMess2, event) {
  event.preventDefault();
  if (field.value === "") {
    field.nextElementSibling.innerHTML = errorMess1;
    event.preventDefault();
    return false;
  }
  if (!field.value.match(regExp)) {
    field.nextElementSibling.innerHTML = errorMess2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function passwordValidation(password1, password2, event) {
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;

  if ((password1.value && password2.value) === "") {
    password1.nextElementSibling.innerHTML = "Please enter your password";
    password2.nextElementSibling.innerHTML = "Please confirm your password";
    event.preventDefault();
    return false;
  }
  if (
    !(password1.value.match(passwordRegex)) &&
    !(password2.value.match(passwordRegex))
  ) {
    password1.nextElementSibling.innerHTML =
      "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
    password2.nextElementSibling.innerHTML =
      "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number";
    event.preventDefault();
    return false;
  }
  if (password1.value !== password2.value) {
    password1.nextElementSibling.innerHTML = "Password don't match!";
    password2.nextElementSibling.innerHTML = "Password don't match!";
    event.preventDefault();
    return false;
  } else {
    password1.nextElementSibling.innerHTML = "";
    password2.nextElementSibling.innerHTML = "";
    return true;
  }
}

// form field validation
function formValidation(event) {
  const nameRegex = /^[a-zA-Z]/,
    phoneRegex = /^[\+]?[0-9]{8,14}$/i,
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;


  validation(
    firstName,
    nameRegex,
    "Please enter your First Name",
    "Please enter a valid First Name ",
    event
  );
  validation(
    lastName,
    nameRegex,
    "Please enter your Last Name",
    "Please enter a valid Last Name",
    event
  );
  validation(
    phoneNumber,
    phoneRegex,
    "Please enter your Phone Number",
    "Please enter a valid Phone Number",
    event
  );
  validation(
    formEmail,
    emailRegex,
    "Please enter your Email",
    "Please enter a valid Email",
    event
  );
   passwordValidation(password, confirmPassword, event);

  return true;
}

form.addEventListener("submit", formValidation);
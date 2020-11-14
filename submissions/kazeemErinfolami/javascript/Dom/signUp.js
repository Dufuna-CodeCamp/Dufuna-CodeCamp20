let submit = document.getElementById("formValidation"),
  firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  otherName = document.getElementById("otherName"),
  phoneNo = document.getElementById("phoneNo"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirmPassword"),
  agree = document.getElementById("agree");

//validation
function validation( field, regExp, validationErrorMessage, errorMessage, event ) {
  if (field.value === "") {
    field.nextElementSibling.innerHTML = validationErrorMessage;
    event.preventDefault();
    return false;
  }//match
  if (!field.value.match(regExp)) {
    field.nextElementSibling.innerHTML = errorMessage;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function formValidation(e) {
  //RegEx
  let nameReg = /^[a-zA-Z]/,
      phoneReg = /^[\+]?[0-9]{8,14}$/,
      emailReg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

      //checkValidation
  validation( firstName, nameReg, "⚠️Please enter your First Name", "⚠️Please enter a valid First Name ", e);
  validation(lastName, nameReg, "⚠️Please enter your Last Name", "⚠️Please enter a valid Last Name", e);
  validation(phoneNo, phoneReg, "⚠️Please enter your PhoneNo", "⚠️Please enter a valid PhoneNo", e);
  validation(email, emailReg, "⚠️Please enter your email","⚠️Please enter a valid email", e);
  validation(password, passwordReg, "⚠️Please enter your password", "⚠️Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number.", e);
  validation(confirmPassword, passwordReg, "⚠️Please same Password as above", "⚠️Your password don't match", e);
  validation(agree, "", "⚠️this field is required ", "", e);
  return true;
}

submit.addEventListener("submit", formValidation);

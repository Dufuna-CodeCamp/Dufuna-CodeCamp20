let submitForm = document.getElementById("validateForm"),
  email = document.getElementById("email"),
  fullname = document.getElementById("fullname"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message");

var regEx = {
  name: /[A-Za-z]/,
  email: /([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i,
};

const required = (field, e, err, reg, errMsg) => {
  if (field.value == "") {
    field.nextElementSibling.innerHTML = err;
    e.preventDefault();
    return false;
  } else if (field.id === "fullname" || field.id === "email") {
    if (!reg.test(field.value)) {
      field.nextElementSibling.innerHTML = errMsg;
      e.preventDefault();
      return false;
    }
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
};

function validateForm(e) {
  required(
    email,
    e,
    "Please enter your Email Address",
    regEx.email,
    "Please enter a valid email"
  );
  required(
    fullname,
    e,
    "Please enter your name",
    regEx.name,
    "Fullname must not contain special character"
  );
  required(subject, e, "Please enter a message subject");
  required(message, e, "Please enter your message");
  emailCheck(email, e);
  return true;
}

submitForm.addEventListener("submit", validateForm);

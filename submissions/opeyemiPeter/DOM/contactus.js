let contactForm = document.getElementById("contact-form"),
  fullName = document.getElementById("fullName"),
  contactEmail = document.getElementById("email"),
  subject = document.getElementById("subject");
textArea = document.getElementById("message");

function contactValidation(field, regEx, error1, error2, event) {
  if (field.value === "") {
    field.nextElementSibling.innerHTML = error1;
    event.preventDefault();
    return false;
  } else if (!field.value.match(regEx)) {
    field.nextElementSibling.innerHTML = error2;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}
function required(field, error, event) {
  if (field.value == "") {
    field.nextElementSibling.innerHTML = error;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
}

function contactFormValidation(event) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
    nameRegex = /^[a-zA-Z]/;
  required(subject, "Please enter a message subject", event);
  required(textArea, "Please enter your Message", event);

  contactValidation(
    fullName,
    nameRegex,
    "Please enter your Name",
    "Please enter a valid name",
    event
  );
  contactValidation(
    contactEmail,
    emailRegex,
    "Please enter your email",
    "Please enter a valid email",
    event
  );
  return true;
}

contactForm.addEventListener("submit", contactFormValidation);

let newsEmail = document.getElementById("newsEmail"),
  newsLetter = document.getElementById("newsLetter");

var regEx = {
  email: /([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i,
};

newsLetter.addEventListener("submit", function () {
  if (newsEmail.value == "") {
    newsEmail.nextElementSibling.innerHTML = `Please enter your Email Address`;
    e.preventDefault();
    return false;
  } else if (!regEx.email.test(newsEmail.value)) {
    newsEmail.nextElementSibling.innerHTML = "Please enter a valid email";
    e.preventDefault();
    return false;
  } else {
    field.nextElementSibling.innerHTML = "";
    return true;
  }
});

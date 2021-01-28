let newsForm = document.getElementById('validateNews');
let newsEmail = document.getElementById('newsEmail');
let newsEmailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(.\w{3,4})+$/;


function fieldValidation(event) {
    if (newsEmail.value === "") {
      newsEmail.nextElementSibling.innerHTML = "Please enter your Email Address";
      event.preventDefault();
      return false;
    }
    if (!newsEmail.value.match(newsEmailRegex)) {
      newsEmail.nextElementSibling.innerHTML = "Please enter a Valid Email";
      event.preventDefault();
      return false;
    } else {
      newsEmail.nextElementSibling.innerHTML = "";
      return true;
    }
  }

  
newsForm.addEventListener("submit", validateNews);



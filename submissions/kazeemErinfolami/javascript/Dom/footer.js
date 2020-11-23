let newsLetter = document.getElementById("newsLetter"),
  newsEmail = document.getElementById("newsEmail");
    errorMsg = document.getElementById("newsSubmit");

//RegEx
let newsEmailReg = /[a-z0-9]+@[a-z]+\.com$/i;

function emailForm(e) {
    if (newsEmail.value === "") {
        errorMsg.innerHTML = "Please enter your Email Address";
        e.preventDefault();
        return false;
    } else if (!(newsEmail.value.match(newsEmailReg))) {
      e.preventDefault();
        errorMsg.innerHTML = "Please enter a valid email";
        
        return false;
    } else {
        errorMsg.innerHTML = "";
        return true
    }
}
 newsLetter.addEventListener('submit', emailForm)

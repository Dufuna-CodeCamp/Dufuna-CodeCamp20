// selecting the elements
let submitemailForm = document.getElementById('news');
let emailadd = document.getElementById('emailadd');
//regex
var emailExp =/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,4})+$/;
// eventListeners
submitemailForm.addEventListener("submit", emailValidation);
//function
function emailValidation(event){
    var emailValue = emailadd.value;
    if(emailValue.length == 0)
    {
        emailadd.nextElementSibling.innerText = "Please enter your email address";
        event.preventDefault();
        return false;
    } else if(!emailExp.test(emailValue)) {
            emailadd.nextElementSibling.innerText = "Please enter a valid email address";
            event.preventDefault();
            return false;
    } else {
            emailadd.nextElementSibling.innerText = "";
            return true;
        }
    } 
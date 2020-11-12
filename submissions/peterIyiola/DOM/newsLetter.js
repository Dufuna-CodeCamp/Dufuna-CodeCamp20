
let sendNews = document.getElementById('newsField'),
    newsLetter = document.getElementById('newsLetter');
    errorMsg = document.getElementsByClassName('errorMsg');

    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,10})+$/;
      
    function validations(event,errorMsg,newsLetter) {
        if (newsLetter.value === '') {
            errorMsg.innerHTML = "please enter your email address";
            event.preventDefault();
            return false;
        } 
        else if (!newsLetter.value.match(emailRegex)) {
            errorMsg.innerHTML = "please enter a valid email address";
            event.preventDefault();
            return false;
        } 
        else {
            errorMsg.innerHTML = "";
            return true;
        }
        }

        sendNews.addEventListener('submit',newsField);


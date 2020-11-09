
let sendNews = document.getElementById('newsField'),
    newsLetter = document.getElementById('newsLetter');
    errorMsg = document.getElementById('errorMsg');

    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,10})+$/;
      
    function validations(field,regex ,event, error, result) {
        if (field.value === '') {
            errorMsg.innerHTML = error;
            event.preventDefault();
            return false;
        } 
        else if (!field.value.match(regex)) {
            errorMsg.innerHTML = result;
            event.preventDefault();
            return false;
        } 
        else {
            errorMsg.innerHTML = "";
            return true;
        }
        }

    function newsField(e){
    validations(newsLetter,emailRegex,e,"please enter your email address", "please enter a valid email")
        
    }
        sendNews.addEventListener('submit',newsField);


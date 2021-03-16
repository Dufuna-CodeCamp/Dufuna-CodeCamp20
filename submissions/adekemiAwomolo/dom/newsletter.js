let newsletter = document.getElementById('newsletter');
newspaper_email = document.getElementById('newsemail');
emailReg=/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/;

function validate_data(event){
    if(newspaper_email.value ==''){
        newspaper_email.nextElementSibling.innerHTML ="Please Enter Your Email Address",
        event.preventDefault();
        return false;
    }else if(!newspaper_email.value.match(emailReg)){
        newspaper_email.nextElementSibling.innerHTML = "Enter a valid email address";
        event.preventDefault();
        return false;
    }else{
        newspaper_email.nextElementSibling.innerHTML = '';
        return true;
    }
}


newsletter.addEventListener('submit', validate_data);

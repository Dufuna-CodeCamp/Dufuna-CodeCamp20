let newsletter = document.getElementById('newsletter');
newspaper_email = document.getElementById('newsemail');
emailReg=/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,10})+$/;

function validate_data(field,event){
    if(field.value ==''){
        field.nextElementSibling.innerHTML ="Please Enter Your Email Address",
        event.preventDefault();
        return false;
    }else if(!field.value.match(emailReg)){
        field.nextElementSibling.innerHTML = "Enter a valid email address";
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = '';
        return true;
    }
}

function newsValidation(event){
    validate_data(newspaper_email, event);
    return true;
}


newsletter.addEventListener('submit', newsValidation);
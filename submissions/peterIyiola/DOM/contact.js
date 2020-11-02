let submitForm = document.getElementById('validateForm'),
    fullName = document.getElementById('fullName'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');

    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,10})+$/;
    const nameRegex = /^[a-zA-Z]/;
    
    function validation (field , event, result , errors , regex)  {
        if (field.value ==='')  {
            field.nextElementSibling.innerHTML = result;
            event.preventDefault();
            return false;
        }
        else if (!field.value.match(regex))  {
            field.nextElementSibling.innerHTML = errors;
            event.preventDefault();
            return false;
        }
        else  {
            field.nextElementSibling.innerHTML = '';
            return true;

    }
    }
    function validateForm (event)  {
    validation(email, event , "please enter your email address" , "please enter a valid email address" , emailRegex);
    validation(fullName, event , "please enter your name","please enter a valid name",nameRegex);
    validation(subject , event , "please enter a message subject");
    validation(message , event , "please enter your message");
    }


    submitForm.addEventListener('submit', validateForm);
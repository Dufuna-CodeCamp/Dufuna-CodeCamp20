
let newsletterForm = document.getElementById("newsletter"),
    email = document.getElementById("emailAddress"),


function required(field, event){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false
    } 
    field.nextElementSibling.innerHTML = "";
    return true;
}

function emailValidation(event){
    if (email.value == ""){
        email.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false
    } else{
        let emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.value.match(emailRegrex)){
            email.nextElementSibling.innerHTML = "Please enter a valid email";
            event.preventDefault();
            return false
        } else{
            email.nextElementSibling.innerHTML = "";
            return true
        }
    }
}

function newsletter(e){
    required(email, e);
    emailValidation(e);
    return true;
}

newsletterForm.addEventListener('submit', newsletter);
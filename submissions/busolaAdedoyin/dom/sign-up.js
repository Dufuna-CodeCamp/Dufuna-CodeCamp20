let submitForm = document.getElementById('validateForm');
let fullName = document.getElementById('fullName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phone-no');
let email = document.getElementById('email');
let password = document.getElementById('password');


function required(field, event){
    if(field.value == ''){
        field.nextElementSibling.innerHTML= "This field is required";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}
function validateForm(e){
    required(fullName, e);
    required(lastName, e);
    required(phoneNumber,e);
    required(email,e);
    required(password, e);
    return true;
}

 submitForm.addEventListener('submit', validateForm);
// console.log(submitForm);


function lnameValidate(event) {
    let nameChar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!lastName.value.match(nameChar)){
       lastName.nextElementSibling.nextElementSibling.innerHTML= "please enter a valid name";
       event.preventDefault();
       return false;
    } else {
       lastName.nextElementSibling.nextElementSibling.innerHTML= "please enter your last name";
       
       return true;
    }
   }




let validateForm = document.getElementById('validation');
btn = document.getElementById('btn-form');
subjectForm = document.getElementById('formsubject');
fullname = document.getElementById('fullname');
email_form = document.getElementById('email');
message_form = document.getElementById('message')
emailReg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
nameReg =/^[a-zA-Z]/;
function contactValidation(e,field, RegExp,message1, message){
    if(field.value == ''){
        field.nextElementSibling.innerHTML = message1;
        e.preventDefault();
        return false;
    } else if(!field.value.match(RegExp)){
        field.nextElementSibling.innerHTML = message;
        e.preventDefault();
        return false;
    }
    else{
        field.nextElementSibling.innerHTML ='';
        return true;
    } 
}
function messageBox(e, field, innerHTML) {
    if (field.value === '') {
        field.nextElementSibling.innerHTML = innerHTML;
        e.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
    }
}
   FormsValidate=(e)=>{
    contactValidation(e,fullname,nameReg, "Please Enter Your First Name", "Please Enter Full Name");
    contactValidation(e, email_form, emailReg, "Please Enter Your Email Address", "Enter a Valid Email Address");
    messageBox(e, subjectForm, "Please enter a message subject");
    messageBox(e, message_form, "Please enter your Message");
    return true;
}
validateForm.addEventListener('submit', FormsValidate);
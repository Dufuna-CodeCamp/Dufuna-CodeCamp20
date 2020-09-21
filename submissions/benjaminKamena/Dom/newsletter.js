

let newsletterSubmitForm = document.getElementById("newsletterSignUp"),
    newsletter = document.getElementById("emailAddress"),
    newsletterRegex = "/^+([-]?+)*@+([-]?+)*({2,6})+$/";



function newsletterValidation(event){
    if(newsletter.value === ""){
        newsletter.nextElementSibling.innerHTML = "Please enter your Email Address";
        event.preventDefault();
        return false;
    } else if(!newsletter.value.match(newsletterRegex)){
        newsletter.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else{
        newsletter.nextElementSibling.innerHTML = "";
        return true;
    }
}


newsletterSubmitForm.addEventListener("submit", newsletterValidation);
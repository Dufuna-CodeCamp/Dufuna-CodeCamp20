let newsForm = document.getElementById("newsletter-sign");
let newsEmail = document.getElementById("email");
let newsRegex = /^+([-]?+)*@+([-]?+)*({2,6})+$/;



const newsValidation = (e) => {
    if (newsEmail.value === "") {
        newsEmail.nextElementSibling.innerHTML = "Please Enter Your email address";
        e.preventDefault();
        return false;
    } else if (!newsEmail.value.match(newsRegex)) {
        newsEmail.nextElementSibling.innerHTML = "Please Enter a Valid email address";
        e.preventDefault();
        return false;
    } else {
        newsEmail.nextElementSibling.innerHTML = "";
        return true;
    }
}
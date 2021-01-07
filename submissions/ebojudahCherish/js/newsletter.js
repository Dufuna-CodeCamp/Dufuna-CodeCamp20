let newsForm = document.querySelector('#validateNews'),
	newsletter = document.querySelector('#newsletter');

let newsRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/; 
	
function emailValidation(event){
	if (newsletter.value == ""){
		newsletter.nextElementSibling.innerHTML = "Please enter your Email Address";
		event.preventDefault();
		return false;
	} else if (!newsletter.value.match(newsRegex)){
		newsletter.nextElementSibling.innerHTML = "Please enter a valid Email Address";
		event.preventDefault();
		return false;
	}else{
		newsletter.nextElementSibling.innerHTML = "";
		return true;
	}
}

newsForm.addEventListener("submit", emailValidation);
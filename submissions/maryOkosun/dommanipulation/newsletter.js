let newsForm = document.getElementById('newsection'),
	newsletter = document.getElementById('newsletter');

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

/*FORM VALIDATION*/
	
function emailValidation(newsletter,event){
	if (newsletter.value == ""){
		newsletter.nextElementSibling.innerHTML = "Please enter your Email Address";
		event.preventDefault();
		return false;
	} else if (!newsletter.value.match(mailRegex)){
		newsletter.nextElementSibling.innerHTML = "Please enter a valid Email Address";
		event.preventDefault();
		return false;
	}else{
		newsletter.nextElementSibling.innerHTML = "";
		return true;
	}
}

function newsection(e){
	emailValidation(newsletter,e);
	return true;
}

newsForm.addEventListener("submit",newsection);
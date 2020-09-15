let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let shippingCost = document.getElementById("shippingCost");
let totalCost = document.getElementById("totalCost");
let button = document.getElementById("btn");
let customer = document.getElementById('customer-price');
let grossPrice = quantity.value * Number(price.innerHTML);



function shipp(){
	grossPrice = quantity.value * Number(price.innerHTML);
	if ( grossPrice < 1000){
		shipping = 100
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}
	else if(grossPrice >= 1000 && grossPrice < 20000){
		shipping= 0.15 * grossPrice
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}else if (grossPrice >= 20000 && grossPrice < 100000){
		shipping= 0.20 * grossPrice
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}else{
		shipping = 25000
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}
	return true
}



function cost(){

	if (quantity.value > 1){
		grossPrice = quantity.value * Number(price.innerHTML);
		totalCost.innerHTML = "£" + (grossPrice + shipping) + " GBP";
	} else{
		totalCost.innerHTML = "£" + (Number(price.innerHTML) + shipping) + " GBP"; 
	}
	return true
	
	
}

function buttonDeactived(){
	if(quantity.value === ''){
		button.disabled = true;
	}
	else{
		button.disabled = false;
		
	}
	return true
}
function emptyQuantity(event){
	event.preventDefault()
	if(quantity.value < 1){
		quantity.value = "";
		quantity.value.focus()
	} 
	else{
		quantity.value = quantity.value
	}
	return true
}
function shippingTotalCost(e){
	emptyQuantity(e)
	buttonDeactived(e)
	shipp(e)
	cost(e)
}
document.addEventListener('DOMContentLoaded', function(){
    
	customer.addEventListener('submit', shippingTotalCost);

	button.disabled = true;

	quantity.addEventListener("change", shippingTotalCost)
	

});


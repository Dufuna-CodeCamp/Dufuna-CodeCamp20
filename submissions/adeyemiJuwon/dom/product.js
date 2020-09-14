let quantity = document.getElementById("quantity");
// let price = document.getElementById("price");
let shippingCost = document.getElementById("shippingCost");
let totalCost = document.getElementById("totalCost");
let button = document.getElementById("btn");


let itemPrice = 900;
let shipping = 100;
let grossPrice = quantity.value * itemPrice;
// shippingCost.innerHTML = "£" + shipping + " GBP";
// totalCost.innerHTML = "£" + (grossPrice + shipping) + " GBP"





function cost(){

	if (quantity.value > 1){
		grossPrice = quantity.value * itemPrice;
		totalCost.innerHTML = "£" + (grossPrice + shipping) + " GBP";
	} else{
		totalCost.innerHTML = "£" + (itemPrice + shipping) + " GBP"; 
	}
	return true
	
	
}
function shipp(){
	if(grossPrice >= 1000 && grossPrice < 20000){
		shipping= 0.15*grossPrice
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}else if (grossPrice >= 20000 && grossPrice < 100000){
		shipping= 0.20*grossPrice
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}else if (grossPrice > 100000){
		shipping = 25000
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}else{
		shipping = 100
		shippingCost.innerHTML = "£" + shipping + " GBP";
	}
	return true
}

function buttonDeactived(){
	if(quantity.value === ""){
		button.style.backgroundColor = "#888";
		button.style.color = "#fff";

	} else {
		button.style.backgroundColor = "rgb(255, 166, 95)";
	}
	return true
}
function emptyQuantity(){
	if(quantity.value < 1){
		quantity.value = "";
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
quantity.addEventListener("change", shippingTotalCost )
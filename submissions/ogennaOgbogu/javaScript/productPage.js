let quantity = document.getElementById("quantity"),
    price = document.getElementById("price"),
    shippingCost = document.getElementById("shippingCost"),
    totalCost = document.getElementById("totalCost"),
    button = document.getElementById("buy-button");


    quantityRegex = /[1-9][0-9]*/;
//function for quantity validation
function quantityResult(){

        if(!quantity.value.match(quantityRegex)){
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
        shippingCost.innerHTML = "";
        totalCost.innerHTML = "";
        button.disabled = true;
    } else{
        quantity.nextElementSibling.innerHTML = " ";
        shippingResult();
        button.disabled = false;
    }
}

//function to calculate shipping cost
function shippingResult(){
    let productPrice = (quantity.value * price.innerHTML);
        if (productPrice < 1000) {
            shippingCost.innerHTML = 100;
        } 
        else if((productPrice >= 1000) && (productPrice <= 20000)){
            shippingCost.innerHTML = 0.15 * productPrice;
        } 
        else if((productPrice >= 20000) && (productPrice <= 100000)){
            shippingCost.innerHTML = 0.2 * productPrice;
        } 
        else{
            shippingCost.innerHTML =  25000;
        }

        totalCost.innerHTML = productPrice + parseFloat(shippingCost.innerHTML);

}

quantity.addEventListener("input", quantityResult);

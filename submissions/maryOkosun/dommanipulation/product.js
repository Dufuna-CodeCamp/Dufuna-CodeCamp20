let quantity = document.getElementById("quantity"),
    price = document.getElementById("price"),
    shippingCost = document.getElementById("shippingCost"),
    totalCost = document.getElementById("totalCost"),
    button = document.getElementById("buy-btn"),
    quantityRegex = /^[1-9]+[0-9]*$/;

function quantityValue(){
    if(!(quantity.value.match(quantityRegex))){
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
        button.disabled = true;
        shippingCost.innerHTML = 0;
        totalCost.innerHTML = 0;
        return false;
    }
    else{
        quantity.nextElementSibling.innerHTML = "";
        button.disabled = false;
    }
}

function checkInteger(){
    if(quantity.value   < 1 ){
        button.disabled = true;
        shippingCost.innerHTML = 0;
        totalCost.innerHTML = 0;
    }
    else{
        quantityValue();
    }
}

function shippingValue(){
    let productPrice = (quantity.value * price.innerHTML);
        if (productPrice < 1000) {
            shippingCost.innerHTML = parseFloat(100);
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
        } 
        else if((productPrice >= 1000) && (productPrice <= 20000)){
            shippingCost.innerHTML =  parseFloat(0.15 * productPrice);
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
        } 
        else if((productPrice >= 20000) && (productPrice <= 100000)){
            shippingCost.innerHTML = parseFloat(0.2 * productPrice);
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
        } 
        else{
            shippingCost.innerHTML =  25000;
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
        }
}

function totalCostValue(){
    quantityValue();
    shippingValue();
    checkInteger();
    return true;
}
quantity.addEventListener("input", totalCostValue);
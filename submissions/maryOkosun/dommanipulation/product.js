let quantity = document.getElementById("quantity"),
    price = document.getElementById("price"),
    shippingCost = document.getElementById("shippingCost"),
    totalCost = document.getElementById("totalCost"),
    button = document.getElementById("buy-btn");

function quantityValue(){
    var qtyVal;
    qtyVal = quantity.value;
    if(isNaN(qtyVal) || qtyVal < 1 || qtyVal == " "){
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
        document.getElementById('shippingCost').innerHTML = 0;
        document.getElementById('totalCost').innerHTML = 0;
        button.disabled = true;
        button.style.backgroundColor = "#b89055";
    }
    else{
        quantity.nextElementSibling.innerHTML = " ";
        shippingValue();
        button.disabled = false;
        button.style.backgroundColor = "#f79521";
        return true;
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
quantity.addEventListener("input", quantityValue);
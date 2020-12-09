let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let shippingCost = document.getElementById('shippingCost');
let totalCost = document.getElementById('totalCost');
let submit = document.getElementById('btn');
let pricePerUnit = price.innerHTML;
let productPrice = pricePerUnit * quantity.value;
let quantityRegex = /^[1-9]+[0-9]*$/;

function quantityValue(){
    if (!(quantity.value.match(quantityRegex))) {
        submit.disabled = true;
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
    } else{
        submit.disabled = false;
        quantity.nextElementSibling.innerHTML = "";
    }
}

function shippingAmount() {
    productPrice = pricePerUnit * quantity.value;
    price.innerHTML = productPrice;
    if (productPrice < 1000) {
        shippingCost.innerHTML = parseFloat(100);
    } else if ((productPrice >= 1000) && (productPrice <= 20000)) {
        shippingCost.innerHTML = parseInt(0.15 * productPrice);
    } else if ((productPrice >= 20000) && (productPrice <= 100000)) {
        shippingCost.innerHTML = parseFloat(0.2 * productPrice);
    } else if (productPrice >= 100000) {
        shippingCost.innerHTML = parseFloat(25000);
    }
    totalCost.innerHTML = parseInt(shippingCost.innerHTML) + parseInt(productPrice);
}

function totalCostAmount() {

    quantityValue();
    shippingAmount();
    return true;
}

quantity.addEventListener("input", totalCostAmount);

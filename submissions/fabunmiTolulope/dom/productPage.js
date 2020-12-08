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

function priceValue() {
        if (quantity.value > 0) {
        productPrice = pricePerUnit * quantity.value;
        price.innerHTML = productPrice;
    }else {
        return false;
    }
}

function shippingAmount() {
    if (productPrice < 1000) {
        shippingCost.innerHTML = parseFloat(100);
    } else if ((productPrice >= 1000) && (productPrice <= 20000)) {
        shippingCost.innerHTML = parseFloat(0.15 * productPrice);
    } else if ((productPrice >= 20000) && (productPrice <= 100000)) {
        shippingCost.innerHTML = parseFloat(0.2 * productPrice);
    } else if (productPrice >= 100000) {
        shippingCost.innerHTML = parseFloat(25000);
    } else {
        return true;
    }
}

function totalCostValue() {
    if (quantity.value > 0) {
        totalCost.innerHTML = parseFloat(shippingCost.innerHTML) + parseFloat(productPrice);
    } else{
        return true;
    }
}

function totalCostAmount() {
    quantityValue();
    priceValue();
    shippingAmount();
    totalCostValue();
    return true;
}

quantity.addEventListener("input", totalCostAmount);

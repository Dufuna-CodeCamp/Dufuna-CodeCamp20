let quantity = document.getElementById('quantity');
let price = document.getElementById('price');
let shippingCost = document.getElementById('shippingCost');
let totalCost = document.getElementById('totalCost');
let unitPrice = price.innerHTML;


function qtyValidation(){
    // let productPrice = unitPrice * quantity.value,
    let quantityRegex = /^[0-9]+$/;
    if (!(quantity.value.match(quantityRegex))) {
        document.getElementById('buyBtn').disabled = true;
        quantity.nextElementSibling.innerHTML = "please enter a valid quantity";
        
    } else{
        document.getElementById('buyBtn').disabled = false;
        quantity.nextElementSibling.innerHTML = "";
    }
}

function shippingCostValue() {
    productPrice = unitPrice * quantity.value;
    price.innerHTML = productPrice;
    if (productPrice < 1000) {
        shippingCost.innerHTML = (100);
    } else if ((productPrice >= 1000) && (productPrice <= 20000)) {
        shippingCost.innerHTML = (0.15 * productPrice);
    } else if ((productPrice >= 20000) && (productPrice <= 100000)) {
        shippingCost.innerHTML = (0.2 * productPrice);
    } else if (productPrice >= 100000) {
        shippingCost.innerHTML = (25000);
    }
    totalCost.innerHTML = parseInt(shippingCost.innerHTML) + parseInt(productPrice);
}

function totalCostValue(e) {

    qtyValidation(e);
    shippingCostValue(e);
    return true;
}

quantity.addEventListener("input", totalCostValue);

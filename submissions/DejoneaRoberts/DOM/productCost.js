let quantity = document.getElementById('quantity'),
    price = document.getElementById('price'),
    tempShipping = 0,
    shipping = document.getElementById('shipping')
    totalCost = document.getElementById('total-cost'),
    button = document.getElementById('buy-btn'),
    perUnit = price.innerHTML,
    productPrice = perUnit * quantity.value,
    numRegex = /^[1-9]+[0-9]*$/;
;

function quantityError() {
    if (!quantity.value.match(numRegex))  {
        button.disabled = true;
        quantity.nextElementSibling.nextElementSibling.innerHTML = "Please enter a valid quantity";
    }else {
        button.disabled = false;
        quantity.nextElementSibling.innerHTML = "";
    }
}

function priceCalc() {
        if (quantity.value > 0) {
        productPrice = quantity.value * perUnit;
        price.innerHTML = productPrice.toFixed(2);
    }else {
        return false;
    }
}

function shippingCalc() {
    if (productPrice < 1000) {
        tempShipping = 100;
        shipping.innerHTML = tempShipping.toFixed(2);
    } else if ((productPrice >= 1000) && (productPrice <= 20000)) {
        tempShipping = 0.15 * productPrice;
        shipping.innerHTML = tempShipping.toFixed(2);
    } else if ((productPrice >= 20000) && (productPrice <= 100000)) {
        tempShipping = 0.2 * productPrice;
        shipping.innerHTML = tempShipping.toFixed(2);
    } else if (productPrice >= 100000) {
        tempShipping = 25000;
        shipping.innerHTML = tempShipping.toFixed(2);
    } else {
        return true;
    }
}

function totalCalc() {
    if (quantity.value > 0) {
        tempTotal = tempShipping + productPrice
        totalCost.innerHTML = tempTotal.toFixed(2)
    } else{
        return true;
    }
}

function productCalc() {
    quantityError();
    priceCalc();
    shippingCalc();
    totalCalc();
}

quantity.addEventListener("input", productCalc);

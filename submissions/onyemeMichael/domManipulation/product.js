let quantity = document.getElementById('quantity'),
    price = document.getElementById('price'),
    shipping = document.getElementById('shipping'),
    cost = document.getElementById('cost'),
    button = document.getElementById('btn'),
    pricePerunit = price.innerHTML,
    productPrice = pricePerunit * quantity.value;

const quantityRegex = /^[1-9]+[0-9]*$/;

function quantityField() {
    if (!quantity.value.match(quantityRegex))  {
        button.disabled = true;
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
    }else {
        button.disabled = false;
        quantity.nextElementSibling.innerHTML = "";
    }
}

function priceField() {
        if (quantity.value > 0) {
        productPrice = pricePerunit * quantity.value;
        price.innerHTML = productPrice;
    }else {
        return false;
    }
}

function shippingAmount() {
    if (productPrice < 1000) {
        shipping = 100;
        shippingCost.innerHTML = shipping;
    } else if ((productPrice >= 1000) && (productPrice <= 20000)) {
        shipping = 0.15 * productPrice;
        shippingCost.innerHTML = shipping;
    } else if ((productPrice >= 20000) && (productPrice <= 100000)) {
        shipping = 0.2 * productPrice;
        shippingCost.innerHTML = shipping;
    } else if (productPrice >= 100000) {
        shipping = 25000;
        shippingCost.innerHTML = shipping;
    } else {
        return true;
    }
}

function totalCost() {
    if (quantity.value > 0) {
        cost.innerHTML = shipping + productPrice;
    } else{
        return true;
    }
}

function fixIndex() {
    quantityField();
    priceField();
    shippingAmount();
    totalCost();
}

quantity.addEventListener("input", fixIndex);

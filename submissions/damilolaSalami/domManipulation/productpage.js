let quantity = document.getElementById("quantity");
    price = document.getElementById("price");
    shippingCost = document.getElementById("shippingCost");
    totalCost = document.getElementById("totalCost");
    btn = document.getElementById("btn");
    pricePerQuantity = price.innerHTML;
    productPrice = pricePerQuantity * quantity.value;
    estimateRegex = /^[1-9]+[0-9]*$/;

    
function quantityPrice() {
    if (!(quantity.value.match(estimateRegex))){
        btn.disabled = true;
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
    } else{
        btn.disabled = false;
        quantity.nextElementSibling.innerHTML = "";
    }
}

function shippingPrice() {
    productPrice = (pricePerQuantity * quantity.value);
    price.innerHTML = productPrice;
    if (productPrice < 1000) {
        shippingCost.innerHTML = parseFloat(100);
    } else if ((productPrice >=1000) && (productPrice <=20000)) {
        shippingCost.innerHTML = parseInt(0.15 * productPrice);
    } else if ((productPrice >=20000) && (productPrice <= 100000)) {
        shippingCost.innerHTML = parseFloat(0.2 * productPrice);
    } else if (productPrice >= 100000) {
        shippingCost.innerHTML = parseFloat(25000);
    }
    totalCost.innerHTML = parseInt(shippingCost.innerHTML) + parseInt(productPrice);
}

function totalAmount() {
    quantityPrice();
    shippingPrice();

    return true;
}

quantity.addEventListener("input", totalAmount);
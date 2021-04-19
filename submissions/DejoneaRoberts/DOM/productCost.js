let quantity = document.getElementById('quantity'),
    price = document.getElementById('price'),
    tempShipping = 0,
    shipping = document.getElementById('shipping')
    totalCost = document.getElementById('total-cost'),
    button = document.getElementById('buy-btn'),
    perUnit = 199,
    numRegex = /^[1-9]+[0-9]*$/;

function priceCalc() {
  productPrice = quantity.value * perUnit;
  price.innerHTML = productPrice.toFixed(2);
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
    } else {
        tempShipping = 25000;
        shipping.innerHTML = tempShipping.toFixed(2);
    }
}

function totalCalc() {
  tempTotal = tempShipping + productPrice
  totalCost.innerHTML = tempTotal.toFixed(2)
}

function quantityError() {
    if (!quantity.value.match(numRegex))  {
        button.disabled = true;
        quantity.nextElementSibling.nextElementSibling.innerHTML = "Please enter a valid quantity";
        console.log("quantity error")
    }else {
        button.disabled = false;
        quantity.nextElementSibling.nextElementSibling.innerHTML = "";
        console.log("no quantity error")
        priceCalc()
        shippingCalc()
        totalCalc()
    }
}

quantity.addEventListener("input", quantityError);


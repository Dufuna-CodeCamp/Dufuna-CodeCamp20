let qty = document.getElementById('qty'),
    price = document.getElementById('price'),
    shippingCost = document.getElementById('shippingCost'),
    cost = document.getElementById('total'),
    button = document.getElementById('buyButton');


//initial value
let priceValue = price.innerHTML,
    costValue = cost.innerHTML;

//RegEx
const Regex = /^[1-9]/;

function productQuantity() {
    if (!qty.value.match(Regex)) {
        button.disable = true
        button.style = "background-color: grey"
        qty.nextElementSibling.innerHTML = "⚠️Please enter a valid quantity";
    } else {
        button.disabled = false;
        qty.nextElementSibling.innerHTML = "";
    }
}
function productPrice() {
    if (qty.value >= 1) {
        let perPrice = priceValue * qty.value
        price.innerHTML = perPrice
    } else if (qty.value === "") {
        price.innerHTML = priceValue
        cost.innerHTML = costValue
    }
    else {
        return false
    }
}
function shippingPrice() {
    let perPrice = priceValue * qty.value
    if (perPrice < 1000) {
        let shippingRange = 100;
        shippingCost.innerHTML = shippingRange;
    } else if ((perPrice >= 1000) && (perPrice <= 20000)) {
        shippingRange = 0.15 * perPrice;
        shippingCost.innerHTML = shippingRange;
    } else if ((perPrice >= 20000) && (perPrice <= 100000)) {
        shippingRange = 0.2 * perPrice;
        shippingCost.innerHTML = shippingRange;
    } else if (perPrice >= 100000) {
        shippingRange = 25000;
        shippingCost.innerHTML = shippingRange;
    } else {
        return false
    }
}
function totalPrice() {
    if (qty.value >= 1) {
        let perPrice = priceValue * qty.value,
            shipCost = Number(shippingCost.innerHTML);
        cost.innerHTML = perPrice + shipCost;
    } else {
        return false;
    }
}
function calculate() {
    productQuantity();
    productPrice();
    shippingPrice();
    totalPrice();
}
qty.addEventListener("input", calculate);




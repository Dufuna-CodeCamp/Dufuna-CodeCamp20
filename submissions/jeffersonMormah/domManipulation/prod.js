let productQty = document.getElementById("content");
let productPrice = document.getElementById("price");
let shipCost = document.getElementById("ship-cost");
let totalCost = document.getElementById("total");
let button = document.getElementById("btn");
let qtyRegex =  /^[0-9]+$/;


const calcShipping = (e) => {
    if (productQty.value <= 0 || !(productQty.match(qtyRegex))) {
        productQty.nextElementSibling.innerHTML = "please enter a valid quantity";
        button.disabled = true;
        button.style.backgroundColor = 'gray';
        e.preventDefault();
        return false;
    } else {
        Number(productPrice.innerHTML) * productQty.value;
        productQty.nextElementSibling.innerHTML = "";
        button.disabled = false;
        button.style.backgroundColor = 'coral';
        return true;
    }
}

const calcTotal = () => {
    let priceVal =  Number(productPrice.innerHTML) * productQty.value;
    if (priceVal < 1000){
        shipCost.innerHTML = 100;
    } else if (priceVal >= 1000 && priceVal <= 20000 ) {
        shipCost.innerHTML = 0.15 * priceVal;
    } else if (priceVal > 20000 && priceVal <= 100000) {
        shipCost.innerHTML = 0.20 * priceVal;
    } else {
        shipCost.innerHTML = 25000;
    }
    totalCost.innerHTML = Number(shipCost.innerHTML) + priceVal;
}

const prodValidation = (e) => {
    calcShipping(e);
    calcTotal();
    return true;
}

productQty.addEventListener('input', prodValidation);

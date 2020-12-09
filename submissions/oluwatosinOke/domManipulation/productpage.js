let quantity = document.getElementById("quantity"),
    price = document.getElementById("price"),
    shippingCost = document.getElementById("shippingCost"),
    totalCost = document.getElementById("totalCost"),
    button = document.getElementById("btn");
let sum = Number(price.innerHTML) * quantity.value;

document.addEventListener('DOMContentLoaded', function () {
    quantity.addEventListener("input", validate, false);
});    

function quantityCheck(event) {
    if(quantity.value <= 0 ) {
        quantity.nextElementSibling.innerHTML ='please enter a valid quantity';
        button.disabled = true;
        button.style.backgroundColor ="grey";
        event.preventDefault();
        return false;
    } else {
        sum = Number(price.innerHTML) * quantity.value;
        quantity.nextElementSibling.innerHTML = '';
        button.disabled = false;
        button.style.backgroundColor ="orange";
        return true;
    }
}
    
function shipping() {
    if(sum < 1000) {
        shippingCost.innerHTML = 100;
    } else if(sum >= 1000 && sum <= 20000) {
        shippingCost.innerHTML = 0.15 * sum;
    } else if(sum > 20000 && sum <= 100000) {
        shippingCost.innerHTML = 0.2 * sum;
    } else {
        shippingCost.innerHTML = 25000;
    }
    totalCost.innerHTML = Number(shippingCost.innerHTML) + sum;
}
    
function validate(e) {
    quantityCheck(e);
    shipping();
    return true;
}



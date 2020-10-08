var qty = document.getElementById('quantity');
var price = document.getElementById('price');
let shipCost = document.getElementById('shipCost');
let totalCost = document.getElementById('totalCost');
let button = document.getElementById('btn');
let sum = Number(price.innerHTML) * quantity.value;

function cost(event) {
    let regex = /^[0-9]+$/;
    if(qty.value <= 0 || !(qty.value.match(regex))) {
        qty.nextElementSibling.innerHTML =  'please enter a valid quantity';
        button.disabled = true;
        button.style.backgroundColor = 'gray';
        event.preventDefault();
        return false;
    } else {
        sum = Number(price.innerHTML) * quantity.value;
        qty.nextElementSibling.innerHTML = '';
        button.disabled = false;
        button.style.backgroundColor = 'goldenrod';
        return true;
    }
}

function shipping() {
    if(sum < 1000) {
        shipCost.innerHTML = 100;
    } else if(sum >= 1000 && sum <= 20000) {
        shipCost.innerHTML = 0.15 * sum;
    } else if(sum > 20000 && sum <= 100000) {
        shipCost.innerHTML = 0.2 * sum;
    } else {
        shipCost.innerHTML = 25000;
    }
    totalCost.innerHTML = Number(shipCost.innerHTML) + sum;
}

function validate(e) {
    cost(e);
    shipping();
    return true;
}

quantity.addEventListener('input', validate);
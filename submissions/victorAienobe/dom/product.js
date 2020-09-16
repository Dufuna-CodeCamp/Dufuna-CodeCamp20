var qty = document.getElementById('quantity');
var price = document.getElementById('price');
let shipCost = document.getElementById('shipCost');
let totalCost = document.getElementById('totalCost');
let button = document.getElementById('btn');

function cost(event) {
    let regex = /^[0-9]+$/;
    if(qty.value <= 0 || !(qty.value.match(regex))) {
        qty.nextElementSibling.innerHTML =  'please enter a valid quantity';
        button.disabled = true;
        button.style.backgroundColor = 'gray';
        event.preventDefault();
        return false;
    } else {
        price.innerHTML *= quantity.value;
        qty.nextElementSibling.innerHTML = '';
        button.disabled = false;
        button.style.backgroundColor = 'goldenrod';
        return true;
    }
}

function shipping() {
    if(price.innerHTML < 1000) {
        shipCost.innerHTML = 100;
    } else if(price.innerHTML >= 1000 && price.innerHTML < 20000) {
        shipCost.innerHTML = 0.15 * price.innerHTML;
    } else if(price.innerHTML >= 20000 && price.innerHTML < 100000) {
        shipCost.innerHTML = 0.2 * price.innerHTML;
    } else {
        shipCost.innerHTML = 25000;
    }
    totalCost.innerHTML = Number(shipCost.innerHTML) + Number(price.innerHTML);
}

function validate(e) {
    cost(e);
    shipping();
    return true;
}

quantity.addEventListener('input', validate);
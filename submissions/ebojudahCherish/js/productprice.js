let quantity = document.querySelector('#quantity'),
    price = document.querySelector('#unitprice')
    shippingCost = document.querySelector('#shippingcost'),
    totalCost = document.querySelector('#totalcost'),
    button = document.querySelector('#buynow');

function productsCost() {
    if(isNaN(quantity.value) || quantity.value < 1 || quantity.value == ' ') {
    quantity.nextElementSibling.innerHTML = 'Please enter a valid quantity';
    shippingCost.innerHTML = 0;
    totalCost.innerHTML = 0;
    button.disabled = true;
   } else {
       quantity.nextElementSibling.innerHTML = '';
       totalShippingCost();
       button.disabled = false;
       return true;
       
   }
}

function totalShippingCost() {
    let productPrice = (quantity.value * price.innerHTML);
        if (productPrice < 1000) {
            price.innerHTML = productPrice;
            shippingCost.innerHTML = parseFloat(100);
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
        } else if ((productPrice >= 1000) && (product <= 20000)) {
            price.innerHTML = productPrice;
            shippingCost.innerHTML = parseFloat(0.15 * productPrice);
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
        } else if ((productPrice >= 20000) && (product <= 100000)) {
            price.innerHTML = productPrice;
            shippingCost.innerHTML = parseFloat(0.15 * productPrice);
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
        } else {
            price.innerHTML = productPrice;
            shippingCost.innerHTML = 25000;
            totalCost.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
    }

}

quantity.addEventListener('input', productsCost);

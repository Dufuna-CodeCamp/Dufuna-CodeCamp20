let quantity = document.getElementById('quantity'),
    price = document.getElementById('price'),
    shippingCost = document.getElementById('shippingCost'),
    totalCost = document.getElementById('totalCost'),
    summation = price.innerHTML * quantity.value ;
    buy = document.getElementById('buy');

   
    function productCount(event) {
        let regex =/^[0-9]+$/;
        if (quantity.value < 0 || (!quantity.value.match(regex))) {
        quantity.innerHTML = "Please enter a valid quantity";
        buy.disabled = true;
        event.preventDefault();
        return false;
    }
    else {
        quantity.innerHTML = "";
        buy.disabled = false;
        return true;
    }
        
    }
   

    function shipping() {
        if(summation < 1000) {
            shippingCost.innerHTML = 100;
        } else if(summation >= 1000 && sum <= 20000) {
            shippingCost.innerHTML = 0.15 * sum;
        } else if(summation > 20000 && sum <= 100000) {
            shippingCost.innerHTML = 0.2 * sum;
        } else {
            shippingCost.innerHTML = 25000;
        }
        totalCost = shippingCost.innerHTML + summation;
    }
    
    function validation(e) {
        productCount(e);
        shipping();
        return true;
    }
    
    quantity.addEventListener('input', validation);
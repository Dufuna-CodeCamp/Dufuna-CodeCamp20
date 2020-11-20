let quantity = document.getElementById('quantity'),
    shippingCost = document.getElementById('shippingCost'),
    price = document.getElementById('price'),
    totalCost = document.getElementById('totalCost'),
    buy = document.getElementById('buy'),
    summation = price.innerHTML * quantity.value;
    totalCost = shippingCost.innerHTML + summation;
    
    function productCost(event)    {
        let regex = /^[0-9]+$/;
        if(quantity.value <= 0 || !(quantity.value.match(regex)))   {
            quantity.nextElementSibling.innerHTML= "please enter a valid quantity";
            buy.disabled = true;
            event.preventDefault();
            return false;
        }
        else  {
            
            quantity.nextElementSibling.innerHTML = '';
            buy.disabled = false;
            return true;
        }

    }
    function productPrice ()  {
        if (summation < 1000){
            shippingCost.innerHTML= 100;
        }
        else if(summation >= 1000 && summation <= 20000){
            shippingCost.innerHTML = 0.15 * summation;
        }
        else if (summation >=20000 && summation <= 100000 ){
            shippingCost.innerHTML = 0.20 * summation;
        }
        else  {
            shippingCost.innerHTML = 25000
        }
       
    }

    function validation(e) {
        productPrice();
        productCost(e);
        return true;
    }
    
    quantity.addEventListener('input', validation);

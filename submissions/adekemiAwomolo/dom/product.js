var price = document.getElementById('price')
quant = document.getElementById('product-quantity')
btn = document.getElementById('order-btn');
shipping = document.getElementById('shipping');
total = document.getElementById('total');
const Regex = /^[1-9]/;

 function quantity_price(){
     if(!quant.value.match(Regex)){
         btn.disable = true;
         btn.style.background = 'gray':
         quant.nextElementSibling.innerHTML ="  Kindly enter a valid Number";
         quant.nextElementSibling.style.color = 'brown';
        }
        else{
            btn.disable = false;
            quant.nextElementSibling.innerHTML ="";
            btn.style.background = 'orange';
        }  
        if(quant.value >= 1){
           let productPrice = quant.value * 400;
            price.innerHTML =productPrice;
        
        }else{
            return false;
        }    
 }
    function shippingCost(){
    let productPrice =  quant.value * 400;
    if(productPrice < 1000){
        let shippingFee = 100;
        shipping.innerHTML = shippingFee;
        total_value = shippingFee + productPrice;
        total.innerHTML = total_value;
    }
    else if((productPrice >= 1000) && (productPrice <= 20000)){
        shippingFee = 0.15 * productPrice;
        shipping.innerHTML = shippingFee;
        total_value = shippingFee + productPrice;
        total.innerHTML = total_value;  
    }
    else if((productPrice >= 20000) && (productPrice <= 100000)){
        shippingFee = 0.2 * productPrice;
        shipping.innerHTML = shippingFee;
        total_value = shippingFee + productPrice;
        total.innerHTML = total_value;  
    } else if(productPrice >= 100000){
        shippingFee = 25000;
        shipping.innerHTML = shippingFee;
        total_value = shippingFee + productPrice;
        total.innerHTML = total_value;   
    }
    else{
        return false;
    }
 }
 function quantityCart(){
    quantity_price();
    shippingCost();
 }
 quant.addEventListener('input', quantityCart);

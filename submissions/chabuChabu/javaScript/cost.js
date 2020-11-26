let quantity = document.getElementById("quantity")
    productPrice = document.querySelector("#productPrice"),
    shippingCost = document.getElementById("shippingCost"),
    total = document.getElementById("productTotal"),
    buyBtn = document.getElementById("submitButton");

total.innerHTML = parseInt(productPrice.innerHTML)+ parseInt(shippingCost.innerHTML);

quantity.addEventListener("input",grandPrice);

function grandPrice(){
  
      regexNumber = /^[0-9]+$/;
      
     if(quantity.value == "" || quantity.value < 1 ||(!quantity.value.match(regexNumber))){
        buyBtn.disabled = true
        document.getElementById("submitButton").style.backgroundColor = "#a6a6a6";
        quantity.nextElementSibling.innerHTML = "<br>&nbsp please enter a valid quantity";
        shippingCost.innerHTML = 0;
        total.innerHTML = 0;
        return false;
     }else{
       buyBtn.disabled = false;
       document.getElementById("submitButton").style.backgroundColor = "#f79521";
       quantity.nextElementSibling.innerHTML = "";
     }

    cartBasket = parseInt(productPrice.innerText) * quantity.value;
    
    if(cartBasket <= 1000){
      total.innerHTML = cartBasket + 100;
      shippingCost.innerHTML = 100;

    }else if(cartBasket>= 1000 && cartBasket < 20000){
      courierCost = cartBasket * 15/100;
      shippingCost.innerHTML = courierCost;
      total.innerHTML = courierCost + cartBasket;

    }else if (cartBasket > 20000 && cartBasket < 100000){
      courierCost = cartBasket * 15/100;
      shippingCost.innerHTML = courierCost;
      total.innerHTML = courierCost + cartBasket;

    }else{
      total.innerHTML = cartBasket + 25000;
    } 
}




let quantity = document.getElementById("quantity"),
    unitPrice = document.getElementById("unitPrice"),
    shippingCost = document.getElementById("shippingCost"),
    total = document.getElementById("totalProduct"),
    btn = document.getElementById("Button");


   /*Checks to ensure field does not accept any number less than 1 but only accepts integers. */
  function validateField(){
  
     let regexNumber = /[^0-9]/g;
     
     if(quantity.value == "" || quantity.value < 1 ||(quantity.value.match(regexNumber))){
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(130, 56, 56)";
        quantity.nextElementSibling.innerHTML = "please enter a valid quantity";
        shippingCost.innerHTML = 0;
        total.innerHTML = 0;
        event.preventDefault();
        return false;
     } else {
       btn.disabled = false;
       btn.style.backgroundColor = "rgb(97, 176, 32)";
       /*Calculates the cost of 1 product and populates on page loading*/
       let productPrice = (unitPrice.innerText * quantity.value);

        if(productPrice <= 1000){
          shippingCost.innerHTML = 100;
          total.innerHTML = parseFloat(productPrice)  + parseFloat(shippingCost.innerHTML);
          return true;  
        }
        else if(productPrice > 1000 && productPrice <= 20000){
             shippingCost.innerHTML = parseFloat(productPrice  * 0.15);
             total.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
             return true;    
        }
        else if(productPrice > 20000 && productPrice <= 100000){
           shippingCost.innerHTML = parseFloat(productPrice  * 0.20);
           total.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
           return true; 
        } 
        else {
            shippingCost.innerHTML = 25000;
            total.innerHTML = parseFloat(productPrice) + parseFloat(shippingCost.innerHTML);
            return true; 
        } 
    }
}

quantity.addEventListener("input", validateField);
let quantity = document.getElementById('quantity'),
    price = document.getElementById('price'),
    shippingCost = document.getElementById('shippingCost'),
    totalCost = document.getElementById('totalCost'),
    buy = document.getElementById('buy');
 
   

function  validation  ()    {
    let regex = /[^0-9]/g;
    if (quantity.value < 1 || quantity.value == "" || (quantity.value.match(regex))){
        buy.disabled = true;
        shippingCost.innerHTML = 0;
        totalCost.innerHTML = 0;
        return false;
      } 
      else {
        buy.disabled = false;
        let summation = (price.innerHTML * quantity.value) ;
        if (summation <= 1000) {
          shippingCost.innerHTML = parseFloat(100);
          totalCost.innerHTML =
            parseFloat(summation) + parseFloat(shippingCost.innerHTML);
          return true;

        } else if (summation > 1000 && summation <= 20000) {
          shippingCost.innerHTML = parseFloat(0.15 * summation  );
          totalCost.innerHTML =
            parseFloat(summation) + parseFloat(shippingCost.innerHTML);
          return true;
        } 
        else if (summation > 20000 && summation <= 100000) {
          shippingCost.innerHTML = parseFloat(0.2 * summation );
          totalCost.innerHTML =
            parseFloat(summation) + parseFloat(shippingCost.innerHTML);
          return true;
        } 
        else {
          shippingCost.innerHTML = 25000;
          totalCost.innerHTML = parseFloat(summation) + parseFloat(shippingCost.innerHTML);
          return true;
        }
      }
    }
    quantity.addEventListener("input", validation);
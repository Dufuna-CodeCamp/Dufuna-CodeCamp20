/*
    A program to caluclate the product price, shipping and total costs of to-be purchased items
*/
/************************
*Variable Declaration
*
*************************/
let 
    productPrice = document.getElementById("productPrice"),
    shippingCost = document.getElementById("shippingCost"),
    totalCost    = document.getElementById("totalCost"),
    qtyInput     = document.getElementById("qtyInput"),
    buyNow       = document.getElementById("buyNow"),
    errorInput   = document.getElementById("errorInput"),
    priceRegex   = /^[1-9]+[0-9]*$/;

    qtyInput.defaultValue = 1; //Set default input value

    if (qtyInput.value == 1) { //Ensure the corresponding cost fields correspond with default value
        productPrice.value = (qtyInput.value * 350);
        productPrice.innerHTML = productPrice.value;
        shippingCost.value = 100;
        shippingCost.innerHTML = shippingCost.value;
        totalCost.value = (productPrice.value + shippingCost.value)
        totalCost.innerHTML = totalCost.value;
    }

    /***********************
     * Calculator Function
     * 
     ***********************/
    function priceCalc() {
        productPrice.value = (qtyInput.value * 350);
        productPrice.innerHTML = productPrice.value;

        if (!qtyInput.value.match(priceRegex)) {
            errorInput.innerHTML = "please enter a valid quantity";
            buyNow.disabled = true;
        }
        else errorInput.innerHTML = "";

        if (productPrice.value < 1000) { 
            shippingCost.value = 100;
            shippingCost.innerHTML = shippingCost.value;
        }
        else if ((productPrice.value >=1000) && (productPrice.value < 20000)) {
            shippingCost.value = ((15/100) * productPrice.value);
            shippingCost.innerHTML = shippingCost.value;
        }
        else if ((productPrice.value >=20000) && (productPrice.value < 100000)) {
            shippingCost.value = ((20/100) * productPrice.value);
            shippingCost.innerHTML = shippingCost.value;
        }
        else {
            shippingCost.value = 25000;
            shippingCost.innerHTML = shippingCost.value;
        }

        totalCost.value = (productPrice.value + shippingCost.value);
        totalCost.innerHTML = totalCost.value;
    }

/*************************************************************
 * Listening for Input Entry (Quantity of Items to be bought)
 * 
 ************************************************************/
    qtyInput.addEventListener("input", priceCalc);
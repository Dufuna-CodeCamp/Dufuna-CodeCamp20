// product validation
let quantity = document.getElementById("quantity"),
    price = document.getElementById("price"),
    shippingCost = document.getElementById("shippingCost"),
    total = document.getElementById("totalCost"),
    submit = document.getElementById("btn"),
    perUnit = price.innerHTML,
    productPrice = perUnit * quantity.value;


function quantityField(){
    let productRegex = /^[1-9]+[0-9]*$/;
    if(!quantity.value.match(productRegex)){
        submit.disabled = true;
        quantity.nextElementSibling.innerHTML = "Please enter a valid quantity";
    } else{
        submit.disabled = false;
        quantity.nextElementSibling.innerHTML = "";
    }
}

function priceField(){
    if(quantity.value > 0){
        productPrice = perUnit * quantity.value;
        price.innerHTML = productPrice;
    } else{
        return false;
    }
}

function shippingAmount(){
    if(productPrice < 1000){
        cost = 100;
        shippingCost.innerHTML =  cost;
    } else if((productPrice >= 1000) && (productPrice <= 20000)){
        cost = 0.15 * productPrice;
        shippingCost.innerHTML =  cost;
    } else if((productPrice >= 20000) && (productPrice <= 100000)){
        cost = 0.2 * productPrice;
        shippingCost.innerHTML =  cost;
    } else if(productPrice >= 100000){
        cost = 25000;
        shippingCost.innerHTML =  cost;
    } else{
        return true;
    }
}

function totalCostAmount (){
    if(quantity.value > 0){
        total.innerHTML = cost + productPrice;
    } else{
        return true;
    }
}

function costCalculationValidation(){
    quantityField();
    priceField();
    shippingAmount();
    totalCostAmount();
}

quantity.addEventListener("input", costCalculationValidation)

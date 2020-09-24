// product validation
let quantity = document.getElementById("quantity"),
    price = document.getElementById("price"),
    shippingCost = document.getElementById("shippingCost"),
    totalCost = document.getElementById("totalCost"),
    submit = document.getElementById("btn"),
    perUnitPrice = price.innerHTML,
    productPrice = perUnitPrice * quantity.value;

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

function cost(productPrice){
    productPrice = perUnitPrice * quantity.value;
    if(quantity.value > 1){
        shippingAmount();
        totalCost.innerHTML = productPrice + shipping;
    } else{
        totalCost.innerHTML = productPrice + shipping;
    }
}

function shippingAmount(){
    productPrice = perUnitPrice * quantity.value;
    if(productPrice < 1000){
        shipping = 100;
        shippingCost.innerHTML =  shipping;
    } else if((productPrice >= 1000) && (productPrice <= 20000)){
        shipping = 0.15 * productPrice;
        shippingCost.innerHTML =  shipping;
    } else if((productPrice >= 20000) && (productPrice <= 100000)){
        shipping = 0.2 * productPrice;
        shippingCost.innerHTML =  shipping;
    } else{
        shipping = 25000;
        shippingCost.innerHTML =  shipping;
    } return true;
}

function totalCostAmount(){
    cost();
    quantityField();
}

quantity.addEventListener("input", totalCostAmount)

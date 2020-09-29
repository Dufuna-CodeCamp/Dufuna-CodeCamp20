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

function shippingAmount(){
    productPrice = perUnitPrice * quantity.value;
    if(productPrice < 1000){
        shippingCost.innerHTML =  parseFloat(100);
    } else if((productPrice >= 1000) && (productPrice <= 20000)){
        shippingCost.innerHTML =  parseFloat(0.15 * productPrice);
    } else if((productPrice >= 20000) && (productPrice <= 100000)){
        shippingCost.innerHTML = parseFloat(0.2 * productPrice);
    } else{
        shippingCost.innerHTML =  25000;
    } totalCost.innerHTML = parseFloat(shippingCost.innerHTML) + parseFloat(perUnitPrice);
}

function totalCostAmount(){
    shippingAmount();
    quantityField();
    return true;
}

quantity.addEventListener("input", totalCostAmount)

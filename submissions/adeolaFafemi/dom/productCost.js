// selecting elements
var productPrice = document.getElementById('productprice');
var shippingCost= document.getElementById('shippingcost');
var totalCost = document.getElementById('totalcost');
var input = document.getElementById('quantity');
var errorInput = document.getElementById('error-input');
var buyNow = document.getElementById('submit')
var numExp = /^[0-9]+$/;
var price = productPrice.innerText
//functions
input.addEventListener('input',quantitychanged)
function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value)|| (input.value<=0)|| !numExp.test(input.value)){
        errorInput.innerText = "Please enter a valid quantity"
        buyNow.disabled = true;
    } else{
        errorInput.innerText = "";
        buyNow.disabled = false;
    }
    updatePrice()
    updateShipping()
    updateTotal()
}
function updatePrice(){
        var quantity = input.value;
        var total = (price*quantity); 
        productPrice.innerText = total;
    }
function updateShipping(){
    var prodprice = productPrice.innerText;
    if (prodprice < 1000) {
        shippingCost.innerText = 100;
    } else if (prodprice < 20000) {
        var shipcost = parseInt(prodprice) * 0.15;
        shippingCost.innerText = shipcost
    } else if ( prodprice < 100000) {
        var shipcost = parseInt(prodprice) * 0.2;
        shippingCost.innerText = shipcost;
    } else if (prodprice > 100000) {
        shippingCost.innerText = 25000;
    }
}

function updateTotal(){
    var shipping = shippingCost.innerText;
    var product = productPrice.innerText;
    totalCost = parseInt(shipping) + parseInt(product);
    totalcost.innerText = totalCost;
}
updateShipping()
updateTotal()

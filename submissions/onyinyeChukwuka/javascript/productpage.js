let btn = document.getElementById('button')
let quantity = document.getElementById('quantity')
let priceUI = document.getElementById('price')
let totalUI = document.getElementById('total')
let shippingUI = document.getElementById('shipping')
let quantityHeader = document.getElementById('quantity-header')
let defaultPrice = 15000


quantity.addEventListener('input', updateUI)

function updateUI() {
   if (quantity.value == "" || quantity.value == null) {
        setError("Please enter a valid number")
    } else { 
        btn.disabled = false;
        setProduct()
    }
}
// to dispplay error on the page if invalid value is entered i.e 0 or decimal
function setError(errorMessage) {
    shippingUI.innerHTML = 0
    totalUI.innerHTML = 0
    btn.style.outlineColor = "red"
    btn.disabled = true
    quantityHeader.nextElementSibling.innerHTML = errorMessage;
}
// to calculate the product price
function getProductPrice(price) {
    let totalPrice;
    if (quantity.value == 0) {
        quantity.value = 1
    }
     totalPrice = quantity.value * price
    return totalPrice;
}

//to  calculate the shipping cost
function getShippingFee(price) {
    let shipping;
    if (price < 1000) {
        shipping = 100
    } else if (price >= 1000 && price < 20000) {
        shipping = 15 / 100 * price
    } else if (price >= 20000 && price < 100000) {
        shipping = 20 / 100 * price
    } else {
        shipping = 25000
    }
    return shipping;
}
//to calculate the total price 
function getTotalPrice(price, shipping) {
    const total = price + shipping
    return total;
}
// to print out the total price on the page
function setProduct() {
    priceUI.innerHTML = defaultPrice
    const price = getProductPrice(defaultPrice)
    const shipping = getShippingFee(price)
    const total = getTotalPrice(price, shipping)
    shippingUI.innerHTML = shipping
    totalUI.innerHTML = total
    quantityHeader.nextElementSibling.innerHTML = "";
}
    //main function
    setProduct()
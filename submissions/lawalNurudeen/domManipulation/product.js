const quantity = document.querySelector("#quantity");
const productFormBtn = document.querySelector("#product-form button");
const productPriceContainer = document.querySelector("#product-price");
const shippingCostContainer = document.querySelector("#shipping-cost");
const totalCostContainer = document.querySelector("#total-cost");

const startingPrice = 1060;
let initialPrice = startingPrice * parseInt(quantity.value);
productPriceContainer.innerHTML = initialPrice;

window.onload = priceCalCu();

function priceCalCu(){
    let shippingCost;
    if (initialPrice < 1000){
        shippingCost = 100;
        shippingCostContainer.innerHTML = shippingCost;
    } else if (initialPrice >= 1000 && initialPrice <= 20000) {
        shippingCost = 0.15 * initialPrice;
        shippingCostContainer.innerHTML = shippingCost;
    } else if (initialPrice > 20000 && initialPrice <= 100000) {
        shippingCost = 0.20 * initialPrice;
        shippingCostContainer.innerHTML = shippingCost;
    } else {
        shippingCost = 25000;
        shippingCostContainer.innerHTML = shippingCost;
    }
    let totalCost = initialPrice + shippingCost;
    totalCostContainer.innerHTML = totalCost;
}

quantity.addEventListener("input", () => {
    if (quantity.value <= 0){
        quantity.nextElementSibling.textContent = "Please enter a valid quantity";
        productFormBtn.disabled = true;
    } else {
        quantity.nextElementSibling.textContent = "";
        productFormBtn.disabled = false;
        initialPrice = startingPrice * parseInt(quantity.value);
        productPriceContainer.innerHTML = initialPrice;
        priceCalCu();
    }
})

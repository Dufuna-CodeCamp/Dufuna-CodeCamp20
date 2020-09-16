let quantity = document.getElementById("quantityNumber"),
    price = document.getElementById("price"),
    shippingCost = document.getElementById("shippingCost"),
    totalCost = document.getElementById("totalCost"),
    button = document.getElementById("buyNow");



let shippingAnalysis = (event) => {
    if (quantity.value == "" || quantity.value <= 0) {
        button.disabled = true;
        button.style.backgroundColor = "rgba(218, 165, 32, 0.55)";
        shippingCost.innerHTML = 0;
        totalCost.innerHTML = 0;
        event.preventDefault();
        return false;

    } else {
        button.disabled = false;
        button.style.backgroundColor = "rgb(218, 165, 32)";
        let productPrice = (quantity.value * price.innerHTML);

        if (productPrice <= 1000) {
            shippingCost.innerHTML = parseInt(100);
            totalCost.innerHTML = parseInt(productPrice) + parseInt(shippingCost.innerHTML);
            event.preventDefault();
            return false;

        } else if (productPrice > 1000 && productPrice <= 20000) {
            shippingCost.innerHTML = parseInt(0.15 * productPrice);
            totalCost.innerHTML = parseInt(productPrice) + parseInt(shippingCost.innerHTML);
            event.preventDefault();
            return false;

        } else if (productPrice > 20000 && productPrice <= 100000) {
            shippingCost.innerHTML = parseInt(0.20 * productPrice);
            totalCost.innerHTML = parseInt(productPrice) + parseInt(shippingCost.innerHTML);
            event.preventDefault();
            return false;

        } else {
            shippingCost.innerHTML = 25000;
            totalCost.innerHTML = parseInt(productPrice) + parseInt(shippingCost.innerHTML);
            return true;
        }
    }
};

quantity.addEventListener("input", inputValidator = (event) => {
    shippingAnalysis(event);
});
let quantity = document.getElementById("qty-number"),
  productPrice = document.getElementById("product-Price"),
  shippingCost = document.getElementById("shipping-Cost"),
  totalCost = document.getElementById("total-Cost"),
  priceButton = document.getElementById("pricing-button"),
  intRegexp = /[^0-9]/g;

function productSale() {


  if (quantity.value < 1 || quantity.value == "" || quantity.value.match(intRegexp)) {
    priceButton.disabled = true;
    shippingCost.innerHTML = 0;
    totalCost.innerHTML = 0;
    return false;
  } else {
    priceButton.disabled = false;
    let entirePrice = (quantity.value * productPrice.innerHTML);
    if (entirePrice < 1000) {
      shippingCost.innerHTML = parseFloat(100);
      totalCost.innerHTML =
        parseFloat(productPrice.innerHTML) + parseFloat(shippingCost.innerHTML);
      return true;
    } else if (entirePrice >= 1000 && entirePrice <= 20000) {
      shippingCost.innerHTML = parseFloat(entirePrice * 0.15);
      totalCost.innerHTML =
        parseFloat(productPrice.innerHTML) + parseFloat(shippingCost.innerHTML);
      return true;
    } else if (entirePrice > 20000 && entirePrice <= 100000) {
      shippingCost.innerHTML = parseFloat(entirePrice * 0.2);
      totalCost.innerHTML =
        parseFloat(productPrice.innerHTML) + parseFloat(shippingCost.innerHTML);
      return true;
    } else {
      shippingCost.innerHTML = 25000;
      totalCost.innerHTML = parseFloat(productPrice.innerHTML) + parseFloat(shippingCost.innerHTML);
    }
  }
}

quantity.addEventListener("input", productSale);
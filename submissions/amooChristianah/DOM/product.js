let qty = document.getElementById("qty-num"),
  productPrice = document.getElementById("product-price"),
  shippingCost = document.getElementById("shipping-cost"),
  totalCost = document.getElementById("total-cost"),
  priceBtn = document.getElementById("pricing-btn"),
  intRegexp = /[^0-9]/g;

function productSale() {


  if (qty.value < 1 || qty.value == "" || qty.value.match(intRegexp)) {
    priceBtn.disabled = true;
    shippingCost.innerHTML = 0;
    totalCost.innerHTML = 0;
    return false;
  } else {
    priceBtn.disabled = false;
    let entirePrice = (qty.value * productPrice.innerHTML);
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

qty.addEventListener("input", productSale);
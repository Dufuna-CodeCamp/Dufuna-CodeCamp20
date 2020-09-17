let submitForm = document.getElementById("validateForm"),
  qty = document.getElementById("qty"),
  shipping_cost = document.getElementById("shipping_cost"),
  total_cost = document.getElementById("total_cost"),
  price = document.getElementById("price");

const regularEx = /^[0-9]$/;

function shippingCost(cost) {
  if (+cost < 1000) {
    shipping_cost.lastChild.innerHTML = 100;
  } else if (+cost >= 1000 && +cost < 20000) {
    shipping_cost.lastChild.innerHTML = (15 / 100) * +price.lastChild.innerText;
  } else if (+cost >= 2000 && +cost < 100000) {
    shipping_cost.lastChild.innerHTML = (20 / 100) * +price.lastChild.innerText;
  } else {
    shipping_cost.lastChild.innerHTML = 25000;
  }
}

qty.addEventListener("input", function () {
  if (+qty.value > 1) {
    price.lastChild.innerHTML = +qty.value * +price.lastChild.innerText;
    shippingCost(price.lastChild.innerText);
    total_cost.lastChild.innerHTML =
      +price.lastChild.innerText + +shipping_cost.lastChild.innerText;
  } else {
    price.lastChild.innerHTML = 900000;
    shippingCost(price.lastChild.innerHTML);
    total_cost.lastChild.innerHTML =
      +price.lastChild.innerText + +shipping_cost.lastChild.innerText;
  }
});

submitForm.addEventListener("submit", function (e) {
  if (qty.value === "") {
    e.preventDefault();
    return false;
  } else if (qty.value < 0 || !regularEx.test(qty.value)) {
    field.nextElementSibling.innerHTML = "please enter a valid quantity";
    e.preventDefault();
    return false;
  } else {
    return true;
  }
});

let submitForm = document.getElementById("validateForm"),
  qty = document.getElementById("qty"),
  shipping_cost = document.getElementById("shipping_cost"),
  total_cost = document.getElementById("total_cost"),
  price = document.getElementById("price");

const RegEx = /^[0-9]$/;

document.addEventListener("DOMContentLoaded", function () {
  localStorage.setItem("price", JSON.stringify(price.lastChild.innerText));
});

function shippingCost(cost) {
  if (+cost < 1000) {
    shipping_cost.lastChild.innerHTML = `<span>100</span>`;
  } else if (+cost >= 1000 && +cost < 20000) {
    shipping_cost.lastChild.innerHTML = `<span>${
      (15 / 100) * +price.lastChild.innerText
    }</span>`;
  } else if (+cost >= 2000 && +cost < 100000) {
    shipping_cost.lastChild.innerHTML = `<span>${
      (20 / 100) * +price.lastChild.innerText
    }</span>`;
  } else {
    shipping_cost.lastChild.innerHTML = `<span>25000</span>`;
  }
}

qty.addEventListener("input", function () {
  if (+qty.value > 1) {
    console.dir(price.lastChild);
    price.lastChild.innerHTML = `<span>${
      +qty.value * +price.lastChild.innerText
    }</span>`;
    shippingCost(price.lastChild.innerText);
    total_cost.lastChild.innerHTML = `<span>${
      +price.lastChild.innerText + +shipping_cost.lastChild.innerText
    }</span>`;
  } else {
    const initialPrice = localStorage.getItem("price");
    const oldPrice = JSON.parse(initialPrice);
    price.lastChild.innerHTML = `<span>${oldPrice}</span>`;
    shippingCost(oldPrice);
    total_cost.lastChild.innerHTML = `<span>${
      +price.lastChild.innerText + +shipping_cost.lastChild.innerText
    }</span>`;
  }
});

submitForm.addEventListener("submit", function (e) {
  if (qty.value === "") {
    e.preventDefault();
    return false;
  } else if (qty.value < 0 || !RegEx.test(qty.value)) {
    field.nextElementSibling.innerHTML = "please enter a valid quantity";
    e.preventDefault();
    return false;
  } else {
    return true;
  }
});

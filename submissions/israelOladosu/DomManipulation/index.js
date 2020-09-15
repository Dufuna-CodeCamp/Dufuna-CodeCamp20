let submitForm = document.getElementById("validateForm"),
  qty = document.getElementById("qty"),
  shipping_cost = document.getElementById("shipping_cost"),
  total_cost = document.getElementById("total_cost"),
  price = document.getElementById("price");

document.addEventListener("DOMContentLoaded", function () {
  if (+price.lastChild.innerText < 1000) {
    shipping_cost.lastChild.innerHTML = `<span>100</span>`;
  } else if (
    +price.lastChild.innerText >= 1000 &&
    +price.lastChild.innerText < 20000
  ) {
    shipping_cost.lastChild.innerHTML = `<span>${
      (15 / 100) * +price.lastChild.innerText
    }</span>`;
  } else if (
    +price.lastChild.innerText >= 2000 &&
    +price.lastChild.innerText < 100000
  ) {
    shipping_cost.lastChild.innerHTML = `<span>${
      (20 / 100) * +price.lastChild.innerText
    }</span>`;
  } else {
    shipping_cost.lastChild.innerHTML = `<span>25000</span>`;
  }
  total_cost.lastChild.innerHTML = `<span>${
    +price.lastChild.innerText + +shipping_cost.lastChild.innerText
  }</span>`;
});

qty.addEventListener("input", function () {
  if (qty.value !== "") {
    total_cost.lastChild.innerHTML = `<span>${
      +qty.value *
      (+price.lastChild.innerText + +shipping_cost.lastChild.innerText)
    }</span>`;
  } else {
    total_cost.lastChild.innerHTML = `<span>${
      +price.lastChild.innerText + +shipping_cost.lastChild.innerText
    }</span>`;
  }
});

submitForm.addEventListener("submit", function (e) {
  if (qty.value === "") {
    e.preventDefault();
    return false;
  } else {
    return true;
  }
});

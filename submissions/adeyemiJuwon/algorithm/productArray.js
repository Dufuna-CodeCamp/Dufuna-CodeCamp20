const products = [
  'Xiaomi Mi Notebook Pro 2019 15.6 inch Windows 10',
  'Xiaomi Redmibook',
  'Charging power',
  'Laptop Bag',
];

const product_prices = [1485.83, 819.52, 4.26, 6.95];

function checkArray(array1, array2) {
  for (let i = 0; i <= array1.length - 1; i++) {
    if (array1[i].length % 2 == 0) {
      array2[i] = array2[i] * 2;
    } else {
      array2[i] = array2[i] / 2;
    }
    console.log(`The price of ${array1[i]} is ${array2[i]}`);
  }
}
checkArray(products, product_prices);

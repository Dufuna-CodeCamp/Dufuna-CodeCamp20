var productList = [
  {
    productName: 'Nintendo Switch Lite - Turquoise',
    imageUrl: 'switch-blue.jpg',
    productPrice: '199.99',
  },
  {
    productName: 'Nintendo Switch Joy-Con Wheel',
    imageUrl: 'witch-wheel.jpg',
    productPrice: '12.99',
  },
  {
    productName: 'Nintendo Switch Charging Grip',
    imageUrl: 'switch-charge.jpg',
    productPrice: '24.99',
  }
]

var x;
for (x in productList){
  console.log(productList[x].productName + ' with ' + productList[x].imageUrl + ' is sold for £' + productList[x].productPrice + '.');
}


const productList = [
  {
    productName: "Xiaomi Redmibook",
    imageUrl: "../introductionToHtml/img/laptop1.jpg",
    productPrice: "£819.52 GBP"
    
  },
  {
    productName: "1.8m DC Charging power",
    imageUrl: "../introductionToHtml/img/charger.jpg",
    productPrice: "£4.26 GBP"
  },
  {
    productName: "11 Inch Laptop Bag Tablet Zipper Pouch Sleeve for MacBook Air",
    imageUrl: "../introductionToHtml/img/bag1.jpg",
    productPrice: "£5.95"
  }
];

const newList = productList.forEach((product) => {
console.log(product.productName + ' with '+ product.imageUrl + ' is sold for ' + product.productPrice)
});


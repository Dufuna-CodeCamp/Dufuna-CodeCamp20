// Task 1
let productList = [
  {
    productName: "White_Goat",
    imageUrl: "./img/white-goat.jpg",
    productPrice: "#30, 000",
  },
  {
    productName: "Sheep",
    imageUrl: "./img/ram.jpg",
    productPrice: "#55, 000",
  },
  {
    productName: "Bull",
    imageUrl: "./img/bull-cow.jpg",
    productPrice: "#400, 000",
  },
];

productList.forEach((product) => {
  console.log(
    `${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`
  );
});

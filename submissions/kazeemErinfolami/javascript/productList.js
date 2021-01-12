productList = [
  {
    productName: "Hats",
    imageUrl: "/html/images/capimgs.jpg",
    productPrice: "#60,000",
  },
  {
    productName: "Men Shoes",
    imageUrl: "/html/images/shoe.jpg",
    productPrice: "500,000",
  },
  {
    productName: "Wrist Watch",
    imageUrl: "/html/images/watch pic.jpeg",
    productPrice: "#96,000",
  },
];

const product = (p) => {
  let outPut = [];
  p.forEach((product) => {
    outPut.push( `${product.productName} with ${product.imageUrl} is sold for  ${product.productPrice}`);
  });
  return outPut;
};

console.log(product(productList));

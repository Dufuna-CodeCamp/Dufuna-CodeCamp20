 
const productList = [
{
    productName: "Brand Ellie Divas Top",
    imageUrl: "../Html/images/product-1.jpg",
    productPrice: "#3500"
},
{
    productName: "Angilque White Top",
    imageUrl: "../Html/images/demo.jpg",
    productPrice: "#3500"
},
{
    productName: "Ella's Bouq Fairy Top",
    imageUrl: "../Html/images/product-2.jpg",
    productPrice: "#3500"
}
];

productList.forEach((product) => {
    console.log(product.productName + ' with '+ product.imageUrl + ' is sold for ' + product.productPrice)
  });
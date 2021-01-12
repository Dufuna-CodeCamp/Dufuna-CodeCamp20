let productList = [ {
    productName: "Military Boots",
    imageUrl: "https://d13y5iorv6bymp.cloudfront.net/image/cache/catalog/-104450628847/black-lace-up-high-top-military-combat-boots-800x800.jpg",
    productPrice: 15000
},
{
    productName: "Dr Martens Boots",
    imageUrl: "https://cdn-images.farfetch-contents.com/14/66/13/81/14661381_22856284_300.jpg",
    productPrice: 75000
},
{
    productName: "Platform Boots",
    imageUrl: "https://cdn.shopify.com/s/files/1/1706/3659/products/product-image-1189642232_740x.jpg?v=1594486595",
    productPrice: 25000
} ];

for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    const text = `${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`;
    console.log(text);
  }

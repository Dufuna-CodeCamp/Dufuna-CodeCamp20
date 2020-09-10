
const productList = [
    {
      productName: "Don't Lie to Me",
      imageUrl: "../introductionToHtml/images/dontlie.jpg",
      productPrice: "£12.60 GBP"
      
    },
    {
      productName: "Unfreedom of the Press by Mark Levin",
      imageUrl: "../introductionToHtml/imgages/unfreedom-of-the-press.jpg",
      productPrice: "£11.99 GBP"
    },
    {
      productName: "Political Correctness",
      imageUrl: "../introductionToHtml/imgages/political.png",
      productPrice: "£5.95 GBP"
    }
  ];
  
  productList.forEach((product) => {
    console.log(product.productName + ' with '+ product.imageUrl + ' is sold for ' + product.productPrice)
  });
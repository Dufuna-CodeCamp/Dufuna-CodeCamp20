var productList=[
  {
    productName:"iphone-11",
    imageUrl:"../html/imgages/iphone-11.jpeg",
    productPrice:"N120,000",
  },
    
  {
    productName:"Nokia-6.2",
    imageUrl:"../html/images/nokia-6.2.jpeg",
    productPrice:"N90,000",
  },
    
  {
    productName:"Infinix Zero 8",
    imageUrl:"../html/images/infinix-zero-8.jpeg",
    productPrice:"N100,000",
  },
];

productList.forEach((product)=>{
  console.log(product.productName + ' with '+ product.imageUrl + ' is sold for ' + product.productPrice)
  }
);
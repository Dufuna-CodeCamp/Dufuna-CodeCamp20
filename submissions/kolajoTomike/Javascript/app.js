var productList=[
{
  productName:"STRAWBERRY ICE-CREAM SANDWICHES",
  ImageUrl:"../html/img/hand.png",
  productPrice:"N300.00",

},

{
  productName:"MATCHA BANANA ICE CREAM",
  ImageUrl:"../html/img/ice4.png",
  productPrice:"N500.00",
},

{
  productName:"COCONUT MILK AND AVOCADO ICE CREAM",
  ImageUrl:"../html/img/ice3.png",
  productPrice:"N900.00",
},
];
 productList.forEach((product)=>{
    console.log(product.productName + ' with '+ product.ImageUrl + ' is sold for ' + product.productPrice)
 });






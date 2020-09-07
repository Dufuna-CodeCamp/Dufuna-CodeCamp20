var productList=[
{
  productName:"STRAWBERRY ICE-CREAM SANDWICHES",
  ImageUrl:"../html/img/hand.png",
  productPrice:"&#163;7.52"

},

{
  productName:"MATCHA BANANA ICE CREAM",
  ImageUrl:"../html/img/ice4.png",
  productPrice:"&#163;4.26",
},

{
  productName:"COCONUT MILK AND AVOCADO ICE CREAM",
  ImageUrl:"../html/img/ice3.png",
  productPrice:"&#163;5.95",
},
];
 productList.forEach((product)=>{
    console.log(product.productName + ' with '+ product.ImageUrl + ' is sold for ' + product.productPrice)
 });






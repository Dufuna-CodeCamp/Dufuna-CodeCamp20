var productList = [
   {
    productName: "Red Tennis Shoes",
    imageUrl: "../html/images/product-02.jpg",
    productPrice: "$200",
   },
   {
    productName: "Black Office shoes",
    imageUrl: "../html/images/product-03.jpg",
    productPrice: "$350",
   },
   {
    productName: "Red High-heeled shoes",
    imageUrl: "../html/images/product-04.jpg",
    productPrice: "$230",
   }
]
for(var i = 0;i < productList.length;i++){
   console.log(productList[i].productName+" with "+productList[i].imageUrl+" is sold for "+productList[i].productPrice);
}
/*JavaScript Task two*/
var posdiff = 123 - 7;
 for(var  increment = 1;increment<posdiff;increment++){
     if(increment % 3 === 0 && increment % 5 ===0){
         console.log("Software Developer");
     }else if(increment % 3 === 0){
         console.log("Software");
     }else if(increment % 5 === 0){
         console.log("Developer"); 
     }else
 console.log(increment);
}
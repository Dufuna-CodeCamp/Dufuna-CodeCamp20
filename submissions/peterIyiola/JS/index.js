var productList =  [

   {
       productName : "Samsung QLED",
       imageUrl : "htmlForms/images/samsung1.jpg",
       productPrice : 650000,
   },
   
   {
       productName : "Samsung LED",
       imageUrl : "htmlForms/images/samsung2.jpg",
       productPrice : 700000,
   },
   
   
   {
       productName : "Samsung LCD",
       imageUrl :"htmlForms/images/samsung3.jpg" ,
       productPrice : 400000,
   },
]

for (let i = 0 ; i < productList.length; i++) {
    console.log(productList[i].productName +" " + "with" + " " + productList[i].imageUrl + " " + "is" + " " + productList[i].productPrice)
}
   
   

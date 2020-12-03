var productList = [
                {productName:"Mexcain Spliced Shrimp",imageUrl:"../html/image/shrimp.jpg", productPrice: "$7"},   
                {productName: "Grilled Fish with viggies",imageUrl: "../html/image/fish.jpg",productPrice: "$10"},
                {productName:"Spiced Grilled Pork", imageUrl: "../html/image/pork.jpg",productPrice:"$12"}
]
  for (n=0; n<productList.length; n++) {
      console.log (productList[n].productName + productList[n].imageUrl + productList[n].productPrice);
  }

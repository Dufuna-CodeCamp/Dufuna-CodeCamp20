var productList = [
    {
        productName:"Blue Sneakers",
        imageUrl:"../HTML/images/bluesneakers.jpg",
        productPrice:"$300",
    },
    
    {
        productName:"Covered Shoes",
        imageUrl:"../HTML/images/coveredshoes.jpg",
        productPrice:"$350",
    },
    
    {
        productName:"Peep-toe Shoes",
        imageUrl:"../HTML/images/peeptoeshoes.jpg",
        productPrice:"$380",
    },
];	

productList.forEach((item) => {
    console.log(item.productName + " with " + item.imageUrl + " is sold for " + item.productPrice + ".")
  });


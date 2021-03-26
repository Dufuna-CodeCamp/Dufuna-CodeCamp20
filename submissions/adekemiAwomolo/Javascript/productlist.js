let productList = [
    {
        productName:"Wholesales Onions",
        imgUrl:"../html/asset/okra.jpeg",
        productPrice:"N 1500"
    },
    {
        productName:"Wholesales Cucumber",
        imgUrl:"../html/asset/onions.jpeg",
        productPrice:"N 2000"
    },
    {
        productName:"Wholesales Pepper",
        imgUrl:"../html/asset/carrot.jpeg",
        productPrice:"N 1000"
    }
];

productList.forEach(function(item){
    console.log(`our ${item.productName} with ${item.imgUrl} is sold for ${item.productPrice}`);
});

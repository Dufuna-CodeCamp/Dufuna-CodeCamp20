let productList = [
    {
        productName : "Teflon Adhesive Tape",
        imgUrl : "./Teflon Image.jpg",
        productPrice : "N 25,000"
    },
    {
        productName : "Tesa Mounting tape",
        imgUrl : "./Teflon Image2.jpg",
        productPrice : "N 20,000"
    },
    {
        productName : "Silicon Sleeves",
        imgUrl: "./Teflon Image2.jpg",
        productPrice : "N 65,000"
    }
];

productList.forEach(function(item){
    console.log(`Our ${item.productName} with ${item.imgUrl} is sold for ${item.productPrice}`);
});
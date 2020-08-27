var productList = [
    {
        productName:"Skechers Men's Blaine Orsen Ankle Boot",
        imageUrl:"../html/image/Skechers-Men-Blaine-Orsen-Ankle-Boot.jpg",
        productPrice: "#22,000", 
    },
    
    {
        productName: "UGG Men's Biltmore Chelsea Boot",
        imageUrl: "../html/image/UGG-Men-Biltmore-Chelsea-Boot2.jpeg",
        productPrice: "24,999",
    },
    
    {
        productName:"Fendi Custom Fotted Ladies Gown-Black",
        imageUrl: "../html/image/Fendi-Custom-Fotted-Ladies-Gown-Black.jpg",
        productPrice:"#20,999",
    },
];

productList.forEach(function(product) {
    console.log(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice);
});

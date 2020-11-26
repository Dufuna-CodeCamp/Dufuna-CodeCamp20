var productList = [
    {
        productName:"Plantain (Cooking banana)",
        imageUrl:"../html/images/plantain.jpg",
        productPrice: "#10,000",
    },
    
    {
        productName: "Gros michel banana",
        imageUrl: "../html/images/gros-michel.jpg",
        productPrice: "#10,500",
    },
    
    {
        productName:"Lady finger banana",
        imageUrl: "../html/images/lady-finger.jpg",
        productPrice:"#8,500",
    },
];

productList.forEach(function(productList) {
    console.log(productList.productName + " with " + productList.imageUrl + " is sold for " + productList.productPrice);
});
var productList = [
    {
        productName:"High Heels",
        imageUrl:"../HTML/img/shoes.jpg",
        productPrice: "#22,000", 
    },

    {
        productName: "Skechers Trainers",
        imageUrl: "../HTML/img/shoes2.jpg",
        productPrice: "#24,999",
    },

    {
        productName:"Black Office Shoes",
        imageUrl: "../HTML/img/shoes3.jpg",
        productPrice:"#20,999",
    },
];

productList.forEach(function(product) {
    console.log(product.productName + " with " + product.imageUrl + " is sold for " + product.productPrice);
});
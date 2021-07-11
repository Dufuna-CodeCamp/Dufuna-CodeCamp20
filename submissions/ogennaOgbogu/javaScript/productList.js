var productList = [
    {
        productName: "bag of apples",
        imageUrl: "",
        productPrice: "N1800/kg"
    },

    {
        productName: "crate of Bananas",
        imageUrl: "",
        productPrice: "N3000/crate"
    },

    {
        productName: "pack of Kiwi",
        imageUrl: "",
        productPrice: "N2500/kg"
    },

];


productList.forEach(function(productList) {
    console.log("A " + productList.productName + " with link " + productList.imageUrl + "costs " + productList.productPrice);
});
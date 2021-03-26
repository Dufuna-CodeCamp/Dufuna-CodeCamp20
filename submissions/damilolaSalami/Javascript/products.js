var productList = [
    {
        productName: "Grill Toaster",
        imageUrl:"../html/images/grilltoaster.jpg",
        productPrice: "#20,000"
    },

    {
        productName: "4face Toaster",
        imageUrl:"../html/images/4face_sandwich_toaster.jpg",
        productPrice: "#10,000"
    },

    {
        productName: "Pop-Up Toaster",
        imageUrl:"../html/images/popuptoast.jpg",
        productPrice: "#15,000"
    }
];

productList.forEach(function(productList){
    console.log(productList.productName + " with " + productList.imageUrl + " is sold for " + productList.productPrice);
}); 
    var productList = [
    {
        productName: "APPLE IPHONE 8 PLUS 5.5'' 64GB+3GB",
        imageUrl: "../html/images/iphn.jpg",
        productPrice: "#198,650",
    },

    {
        productName: "APPLE IPHONE 11 PLUS 5.5'' 64GB+3GB",
        imageUrl: "../html/images/iphone11jpg.jpg",
        productPrice: "#200,650",
    },

    {
        productName: "APPLE IPHONE 11 pro 5.5'' 64GB+3GB",
        imageUrl: "../html/images/iphone11-pro.jpg",
        productPrice: "#300,650",
    },
    ];

    productList.forEach(function (product) {
    console.log(
        product.productName +
        " with " +
        product.imageUrl +
        " is sold for " +
        product.productPrice
    );
    });

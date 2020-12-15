const productList = [
    {
        productName: "Play station 5",
        imageUrl: "./image/play-station-5.png",
        productPrice: "$1000",
    },
    {
        productName: "HP Omen x7",
        imageUrl: "./image/hp-omen-x7.png",
        productPrice: "$500",
    },
    {
        productName: "Balenciaga Sneakers",
        imageUrl: "./image/balenciaga-sneakers.png",
        productPrice: "$120",
    },
]

productList.forEach(product => {
    console.log(`${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`);
})
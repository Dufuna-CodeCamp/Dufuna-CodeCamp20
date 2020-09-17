/*
    Task: Successively display each of the property of the array in the console.
*/

var productList = [
     {
        productName: "Shoes for Men",
        imageUrl: "images/men-shoes-pic.jpeg",
        productPrice: "$350",
    },
    {
        productName: "Shoes for Women",
        imageUrl: "images/women-shoes-pic.jpg",
        productPrice: "$535",
    },
    {
        productName: "Generic Watch",
        imageUrl: "images/watch-pic.jpg",
        productPrice: "$120",
    }
];

//For Loop to successively display each property.

for (let loopNum=0; loopNum < productList.length; loopNum++) {
    console.log(productList[loopNum].productName + " with " + productList[loopNum].imageUrl + " is sold for " + productList[loopNum].productPrice);
}
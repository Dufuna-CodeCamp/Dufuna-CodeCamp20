let productList = [
    {
        productName: "QUBO P19 5.5",
        imageUrl: " ../html/image/qubo.jpg",
        productPrice: "#35,000",
    },

    {
        productName: "Samsung Galaxy A21s 6.5",
        imageUrl: "../html/image/Samsung.jpg",
        productPrice: "#88,000"
    },

    {
        productName: "Apple IPhone 11 Pro Max",
        imageUrl: "../html/image/i-phone.jpg",
        productPrice: "#580,000" 
    }

];

//Using For Loop
for (let product = 0; product < productList.length; product++) {
    console.log(productList[product].productName + " with " + productList[product].imageUrl + " is sold for " + productList[product].productPrice + ".");
};

// Using Arrow Function
// productList.forEach((product) => {
//     console.log(
//       `${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`
//     )
//   });

//Using For...in Loop to print out one product at a time
// var product = {
//     productName: "QUBO P19 5.5",
//     imageUrl: " ../html/image/qubo.jpg",
//     productPrice: "#35,000"};

// var product2 = {
//     productName: "Samsung Galaxy A21s 6.5",
//     imageUrl: "../html/image/Samsung.jpg",
//     productPrice: "#88,000"
// };

// var str = "";
// var str2 = "";
// var production;
// for (production in product) {
//     str = str + product[production];
//     str2 = str2 + product2[production];
// }

// console.log(str);
// console.log(str2);
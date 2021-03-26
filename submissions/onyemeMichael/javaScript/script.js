//TASK 1
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

// TASk 2
const diff = 123 - 7;
var  output = 1;

// // //Using Switch Statement
while (output <= diff) {
    switch (true) {
        case ((output % 3 === 0) && (output % 5 === 0)):
            console.log("Software Developer");
            break;
        case ((output % 5) === 0):
            console.log("Developer");
            break;
        case ((output % 3) === 0):
            console.log("Software");
            break;
        default:
            console.log(output);
    }
    output++;
};

//Using For Loop
// const diff = 123 - 7;
// for (let x = 1; x <= diff; x++) {
//   let output = "";
//   if (x % 3 !== 0 && x % 5 !== 0) {
//     output = x;
//   } else {
//     if (x % 3 === 0) {
//       output += "software ";
//     }
//     if (x % 5 === 0) {
//       output += "development";
//     }
//   }
//   console.log(output);
// };

// TASK 1
var productList = [
    {
        productName: "Orgainic African Soap",
        imageUrl: "../HTML/img/African-Black-Soap.jpg",
        productPrice:"#1,700",
    },
    {
        productName: "Lucious Black Soap",
        imageUrl: "../HTML/img/black-soap2.jpg",
        productPrice: "#2,050",
    },
    {
        productName:"Silk African Soap" ,
        imageUrl: "../HTML/img/black-soap3.jpg",
        productPrice:"#659",
    }
];

// Using the For Loop
for (let product = 0; product < productList.length; product++) {
    console.log(productList[product].productName + " with " + productList[product].imageUrl + " is sold for " + productList[product].productPrice + ".");
};
// Using the While Loop
// var product = 0;
// while (product < productList.length){
//     console.log(productList[product].productName + " with " + productList[product].imageUrl + " is sold for " + productList[product].productPrice + ".");
//     product++;
// };
// Using the Do ... While Loop
// var product = 0;

// do {
//     console.log(productList[product].productName + " with " + productList[product].imageUrl + " is sold for " + productList[product].productPrice + ".");
//     product++;
// }
// while (product < productList.length);

// TASk 2
const diff = 123 - 7;
var  count = 1;

while (count < diff) {
    switch (true) {
        case ((count % 3 === 0) && (count % 5 === 0)):
            console.log("Software Developer");
            break;
        case ((count % 5) === 0):
            console.log("Developer");
            break;
        case ((count % 3) === 0):
            console.log("Software");
            break;
        default:
            console.log(count);
    }
    count++;
};

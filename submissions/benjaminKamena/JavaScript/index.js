//TASK 1

//create an array
let productList = [
    {
        productName:"HIV vaccine",
        imageUrl: "../html/img/HIV-00.jpg",
        productPrice: "K3597"
    },
    {
        productName: "Cancer cure",
        imageUrl: "../html/img/cancer-cure.jpg",
        productPrice: "k1597"
    },
    {
        productName: "Fistula cure",
        imageUrl: "../html/img/anal-fistula.jpg",
        productPrice: "k2597"
    }
];

//console.log(productList)

//looping through an array.

for(let i = 0; i< productList.length; i++){
    console.log(productList[i].productName + " with" + productList[i].imageUrl + " is sold for " + productList[i].productPrice);
}

//TASK 2

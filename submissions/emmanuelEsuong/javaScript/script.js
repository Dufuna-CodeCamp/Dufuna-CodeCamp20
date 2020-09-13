// 1st Task

var productList = [
    {
        productName: "Rice Spaghetti Lunch Pack",
        imageUrl: "../htmlTask/images/PicT.png",
        productPrice:"#2,050",
    },
    {
        productName: "Chocolate Creamed Strawberry Cake",
        imageUrl: "../htmlTask/images/PicTT.png",
        productPrice: "#5,500",
    },
    {
        productName:"Whole Farm Chicken" ,
        imageUrl: "../htmlTask/images/PicF.png",
        productPrice:"#1,150",
    }
];

// for Loop
for (let x = 0; x < productList.length; x++) {
    console.log(productList[x].productName + " with " + productList[x].imageUrl + " is sold for " + productList[x].productPrice + ".");
}

//creating the array productList
var productList = [
    {
        productName:"White floral shirt dress",
        imageUrl:"zara-dress.jpg",
        productPrice:"5000"
    },
    {
        productName:"Boho summer dress",
        imageUrl:"boho_summer1.jpg",
        productPrice:"7000"
    },
    {
        productName:"High neck midi dress",
        imageUrl: "zara-high.jpg",
        productPrice:"6000"
    }
]

var x;
for (x in productList){
    console.log(`${productList[x].productName} with ${productList[x].imageUrl} is sold for ${productList[x].productPrice}`)
}
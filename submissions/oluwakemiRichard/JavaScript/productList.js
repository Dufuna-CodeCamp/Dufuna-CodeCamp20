
let productList = [
    {
        productName: 'iPhone12',
        imageUrl: "../HTML/assets/iphone11promax.jpg",
        productPrice: 500000,
    },
     {
        productName: 'Samsung S20',
        imageUrl: "../HTML/assets/galaxys20ultra.jpg",
        productPrice: 300000,
    },
    {
        productName: 'IPhone11',
        imageUrl:"../HTML/assets/iphone11promax.jpg",
        productPrice:400000
    }
];
    for(var  i in productList){
        console.log(productList[i]['productName'] + " with " + productList[i]['imageUrl'] + " is sold for  " + productList[i]['productPrice']+"\n")
    }
    
 
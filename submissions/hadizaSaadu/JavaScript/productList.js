var productList = [
    {
        productName : 'product 1',
        imageUrl : 'ssdkddleepoeieieo',
        productPrice : 30000
    }, 
    {
        productName : 'product 2',
        imageUrl : 'ssdkddleepoeieieo',
        productPrice : 40000
    }, 
    {
        productName : 'product 3',
        imageUrl : 'ssdkddleepoeieieo',
        productPrice : 50000
    }
];


for(i = 0; i < productList.length; i++) {
    console.log(productList[i].productName +' with '+ productList[i].imageUrl +' is sold for '+ productList[i].productPrice);
}
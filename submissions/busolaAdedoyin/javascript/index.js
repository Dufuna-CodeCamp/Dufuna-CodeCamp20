
var productList = [
    {
        productName: 'Chiffon Fabric',
        imageUrl: 'img/chiffonfab.jpg',
        productPrice: 4500,
    },
     {
        productName: 'Lace Fabric',
        imageUrl: 'img/lacefab.jpg',
        productPrice: 12500,
    },
    {
        productName: 'Polish Fabric',
        imageUrl:'img/polishfab.jpg',
        productPrice:8750
    }
];
    for(var  x in productList){
        console.log(productList[x]['productName'] + " with " + productList[x]['imageUrl'] + " is sold for  " + productList[x]['productPrice'])
    };
 
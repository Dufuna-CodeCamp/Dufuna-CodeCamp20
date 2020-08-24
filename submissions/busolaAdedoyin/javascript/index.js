
var x = "";
var productList = [
    Fabric1  = {
        productName: 'Chiffon Fabric',
        imageUrl: 'img/chiffonfab.jpg',
        productPrice: 4500,
    },
    Fabric2  = {
        productName: 'Lace Fabric',
        imageUrl: 'img/lacefab.jpg',
        productPrice: 12500,
    },
    Fabric3 = {
        productName: 'Polish Fabric',
        imageUrl:'img/polishfab.jpg',
        productPrice:8750
    }
];
 for(var i = 0; i < productList.length; i++){
    for(var  x in productList[i]){
        console.log(productList[i]['productName'] + " with " + productList[i]['imageUrl'] + " is sold for  " + productList[i]['productPrice'])
    };

 }



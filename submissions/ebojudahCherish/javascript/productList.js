let productList = [ {
    productName: 'Red Dress',
    imageUrl: 'https://www.cargoclothing.com/images/jessica-stuart-red-qt011-open-lace-up-back-dress-p2451-23044_zoom.jpg',
    productprice: '$1400'
},

{
    productName: 'Black Pumps',
    imageUrl: 'https://ae01.alicdn.com/kf/HTB1lM3maxiH3KVjSZPfq6xBiVXaM/GenShuo-High-Heels-12cm-Black-Pumps-Silver-High-Heels-Wedding-Shoes-Nude-Pumps-Bridal-Shoes-Estiletos.jpg_960x960.jpg',
    productprice: '$800'
},

{
    productName: 'Clutch Purse',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/9163K3ilBWL._AC_UX395_.jpg',
    productprice: '$2000'
} ];

for (let i = 0; i < productList.length; i++) {
    let product = productList[i];
    let message = `${product.productName} with ${product.imageUrl} is sold for ${product.productprice}`;
    console.log(message);
}


let productList = [
    {
        productName: 'play station 5 console',
        imageUrl: '../html/images/capture3.jpg',
        productPrice: '$700'
    },
    {
        productName: 'PSG Nike Jersey',
        imageUrl: '../html/images/capture2.jpg',
        productPrice: '$50'
    },
    {
        productName: 'Nike Jordan Mercurial boots',
        imageUrl: '../html/images/nike-jordan.jpg',
        productPrice: '$350'
    }
];

productList.forEach((item) => {
    console.log(item.productName + ' with ' + item.imageUrl + ' is sold for ' + item.productPrice)
});
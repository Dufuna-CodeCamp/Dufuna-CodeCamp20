var productList = [
    {productName:"Madeline Satchel", imageUrl:"../images/jimmychoobag.jpeg", productPrice:"$2,250"},
    {productName:"Burberry Wrist Watch", imageUrl:"../images/burberrywristwatch.jpeg", productPrice:"$1,050"},
    {productName:"Fendi Baguette", imageUrl:"../images/Fendi-bag-red-pattern.jpg", productPrice:"$3,555"}
];

for (var i = 0, l=productList.length; i< l; i++) {
	console.log(productList[i].productName + " with " + productList[i].imageUrl + " is sold for " + productList[i].productPrice);
}
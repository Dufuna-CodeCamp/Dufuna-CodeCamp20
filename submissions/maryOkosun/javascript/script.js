var productList = [
	{productName:"Tecno Spark",imageUrl:"..HTML/images/image1.png", productPrice:"$250"},
	{productName:"Infinix",imageUrl:"..HTML/images/image2.jpeg",productPrice:"$400"},
	{productName:"Tecno Cammon",imageUrl:"..HTML/images/image3.png",productPrice:"$450"}
	];
for (var i = 0, l=productList.length; i< l; i++) {
	console.log(productList[i].productName + " with " + productList[i].imageUrl + " is sold for " + productList[i].productPrice);
}
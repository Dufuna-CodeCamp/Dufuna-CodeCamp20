var ProductList=[
				{ProductName:'shoe1',imageUrl:'../html/img/pic1.jpg',ProductPrice:'$20'},
				{ProductName:'shoe2',imageUrl:'../html/img/pic2.jpg',ProductPrice:'$40'},
				{ProductName:'shoe3',imageUrl:'../html/img/pic3.jpg',ProductPrice:'$60'}
]

for (i=0; i<ProductList.length; i++){

	console.log (ProductList[i].ProductName + " with url of " + ProductList[i].imageUrl 
	        +" and price of " + ProductList[i].ProductPrice);
}

var ProductList = [
				{ProductName:'Blue Canvas Shoe',imageUrl:'../html/img/pic1.jpg',ProductPrice:'$50'},
				{ProductName:'Fossil Watch',imageUrl:'../html/img/pic2.jpg',ProductPrice:'$100'},
				{ProductName:'Balmoral Black Lace Shoe',imageUrl:'../html/img/pic3.jpg',ProductPrice:'$450'}
]
for (i=0; i<ProductList.length; i++) {
	console.log (ProductList[i].ProductName + " with url of " + ProductList[i].imageUrl 
	        +" and price of " + ProductList[i].ProductPrice);
}

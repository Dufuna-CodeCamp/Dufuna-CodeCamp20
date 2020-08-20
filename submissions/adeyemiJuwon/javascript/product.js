
const productList = [
    {
      name: "Xiaomi Redmibook",
      imgUrl: "img/laptop1.jpg",
      price: "£819.52 GBP"
      
    },
    {
      name: "1.8m DC Charging power",
      imgUrl: "img/charger.jpg",
      price: "£4.26 GBP"
    },
    {
      name: "11 Inch Laptop Bag Tablet Zipper Pouch Sleeve for MacBook Air",
      imgUrl: "img/bag1.jpg",
      price: "£5.95"
    }
  ];

  const productRelated = document.getElementsByClassName("productRelated")[0];
const newList = productList.map((product) => {
  let productImage = document.createElement("img");
  let productName = document.createElement("div");
  let productPrice = document.createElement("div");
  let wrapper = document.createElement("div");
  
  productName.innerText = product.name;
  productName.classList.add('product_name')
  productImage.src = product.imgUrl;
  productImage.classList.add('product_image')
  productPrice.innerText = product.price;
  productPrice.classList.add('product_price')
  wrapper.classList.add('wrapper')
  wrapper.append(productImage, productName, productPrice);
  return wrapper;
});

function initializeProducts() {
  productRelated.append(...newList);
}

initializeProducts();

    
  
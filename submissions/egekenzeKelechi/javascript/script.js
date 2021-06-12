// let productList = [
//     {
//         "productName": "Samsung Galaxy s21",
//         "imageUrl": "https://",
//         "productPrice": 1500
//     },
//     {
//         "productName": "MacBook M1",
//         "imageUrl": "https://",
//         "productPrice": 2500
//     },
//     {
//         "productName": "Lamboghini Aventador",
//         "imageUrl": "https://",
//         "productPrice": 500000
//     }
// ];

// console.log("The " + productList[0].productName + " with the link " + productList[0].imageUrl + " is sold for " + productList[0].productPrice);

// Product Calculation
let productQuantity = document.querySelector("#product-qty"),
    button = document.querySelector("#btn"),
    price = document.querySelector(".product-price"),
    shipping = document.querySelector(".shipping"),
    totalCost = document.querySelector(".totalCost"),
    error = document.querySelector(".error-message");

let oldShippingPrice = shipping.innerHTML,
    // oldCost = totalCost.innerHTML,
    oldPrice = price.innerHTML;


// window.addEventListener('load', function(){
//     if(productQuantity.value >= 1 && price.innerHTML < 1000){
//         // price.innerHTML = productQuantity.value * price.innerHTML;
//         shipping.innerHTML = 100;
//         totalCost.innerHTML = parseInt(shipping.innerHTML) + parseInt(price.innerHTML);
//     }

    // if(productQuantity.value == 1 && price.innerHTML == 1000 || price.innerHTML <= 20000){
    //     // price.innerHTML = productQuantity.value * price.innerHTML;
    //     result = 0.15 * price.innerHTML;
    //     shipping.innerHTML = result;
    //     totalCost.innerHTML = parseInt(price.innerHTML) + parseInt(shipping.innerHTML);
    // }

    // if(productQuantity.value == 1 && price.innerHTML >= 20000 && price.innerHTML <= 100000){
    //     // price.innerHTML = productQuantity.value * price.innerHTML;
    //     result = 0.20 * price.innerHTML;
    //     shipping.innerHTML = result;
    //     totalCost.innerHTML = parseInt(price.innerHTML) + parseInt(shipping.innerHTML);
    // }

    // if(productQuantity.value == 1 &&  price.innerHTML > 100000){
    //     // price.innerHTML = productQuantity.value * price.innerHTML;
    //     shipping.innerHTML = 25000;
    //     totalCost.innerHTML = parseInt(price.innerHTML) + parseInt(shipping.innerHTML);
    // }
// })

productQuantity.addEventListener('keyup', function(){

    if(productQuantity.value < 1 || isNaN(productQuantity.value)){
        error.innerHTML = "Please enter a valid quantity";
        button.disabled = true;
        button.style.backgroundColor = "grey";
        shipping.innerHTML = "";
        totalCost.innerHTML = "";
    } else {
        price.innerHTML = productQuantity.value * price.innerHTML;
        // let newPrice = basePrice * productQuantity.value;
        // price.innerHTML = newPrice;

        if(price.innerHTML < 1000  && productQuantity.value >= 1){
            
            shipping.innerHTML = oldShippingPrice;
            totalCost.innerHTML = parseInt(price.innerHTML) + parseInt(shipping.innerHTML);
            error.innerHTML = "";
            button.disabled = false;
            button.style.backgroundColor = null;
            price.innerHTML = oldPrice;
    
        }else if(price.innerHTML >= 1000 && price.innerHTML < 20000 && productQuantity.value >= 1){
            // price.innerHTML = productQuantity.value * price.innerHTML;
            result = 0.15 * price.innerHTML;
            shipping.innerHTML = result;
            totalCost.innerHTML = parseInt(price.innerHTML) + parseInt(shipping.innerHTML);
            error.innerHTML = "";
            button.disabled = false;
            button.style.backgroundColor = null;
            price.innerHTML = oldPrice;
    
        }else if(price.innerHTML >= 20000 && price.innerHTML <= 100000 && productQuantity.value >= 1){
            // price.innerHTML = productQuantity.value * price.innerHTML;
            result = 0.20 * price.innerHTML;
            shipping.innerHTML = result;
            totalCost.innerHTML = parseInt(price.innerHTML) + parseInt(shipping.innerHTML);
            error.innerHTML = "";
            button.disabled = false;
            button.style.backgroundColor = null;
            price.innerHTML = oldPrice;
            // return oldPrice;
            
        }else if(price.innerHTML > 100000 && productQuantity.value >= 1){
            // price.innerHTML = productQuantity.value * price.innerHTML;
            shipping.innerHTML = 25000;
            totalCost.innerHTML = parseInt(price.innerHTML) + parseInt(shipping.innerHTML);
            error.innerHTML = "";
            button.disabled = false;
            button.style.backgroundColor = null;
            price.innerHTML = oldPrice;
            // return oldPrice;
            
        }else{
            error.innerHTML = "";
            button.disabled = false;
            button.style.backgroundColor = null;
            shipping.innerHTML = "";
            totalCost.innerHTML = "";
            // price.innerHTML = oldPrice;
    
            // return oldPrice;
        }
    }

    
});

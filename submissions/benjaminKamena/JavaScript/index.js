//TASK 1

//create an array
let productList = [
    {
        productName:"HIV vaccine",
        imageUrl: "../html/img/HIV-00.jpg",
        productPrice: "K3597"
    },
    {
        productName: "Cancer cure",
        imageUrl: "../html/img/cancer-cure.jpg",
        productPrice: "k1597"
    },
    {
        productName: "Fistula cure",
        imageUrl: "../html/img/anal-fistula.jpg",
        productPrice: "k2597"
    }
];

//console.log(productList)

//looping through an array.

for(let i = 0; i< productList.length; i++){
    console.log(productList[i].productName + " with" + productList[i].imageUrl + " is sold for " + productList[i].productPrice);
}

//TASK 2

// Writing the numbers from 1 and the positive difference between 7 and 123 
var output = Math.abs(7-123);
function diffNum(){
    for(var i = 1; i <= output; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("Software Developer");
        }else if(i % 3 === 0){
            console.log ("Software");
        }else if(i % 5 === 0){
            console.log("Developer");
        } else{
            console.log(i)
        }
    }
}

diffNum();

//TASK 3 trying out
// 99 bottles of beer

/*function beerSong() {  
    var bottles;
    var bottlesLeft;
    for (i = 99; i >= 1; i--) {
      if (i == 1) {
        bottles = "bottle";
        bottlesLeft = "No bottles of beer on the wall!";
      } else {
        bottles = "bottles";
        bottlesLeft = i - 1 + " bottles of beer on the wall!";
      } console.log(i+ " " + bottles + " of beer on the wall,");
      console.log(i+ " " + bottles + " of beer,");
      console.log("Take one down, pass it around,");
      console.log(bottlesLeft);
      } 
      
  }
  console.log(beerSong());*/

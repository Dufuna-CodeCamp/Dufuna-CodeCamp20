
/*the positive difference of 7 and 123
var diff = function (a , b){
 return Math.abs(a - b); 
 where a=7 and b=123
 }*/

var diff = Math.abs(7 - 123); 
for (let num = 1; num <= diff; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Software Developer");
    }
    else if (num % 3 === 0) {
        console.log("Software");
    }
    else if (num % 5 === 0) {
        console.log("Developer");
    }
}
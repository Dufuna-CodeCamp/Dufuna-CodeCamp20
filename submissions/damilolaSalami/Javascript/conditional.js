//A program that prints the numbers from 1 and the positive difference between 7 and 123

for (var i = 1; i <= (123-7); i++) {
    if ((i % 3===0) && (i % 5===0)){
        console.log("Software Developer");
    } 
    else if (i % 3===0){
        console.log("Software");
    } 
    else if (i % 5===0){
        console.log("Developer");
    } 
    else{
        console.log(i);
    }
}
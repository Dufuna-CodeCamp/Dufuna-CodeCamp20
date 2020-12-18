const num1 = 123;
const num2 = 7;
const diff = num1 - num2;

for (let i = 1; i <= diff; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Software Developer");
    } else if (i % 3 === 0) {
        console.log("Software");
    } else if (i % 5 === 0) {
        console.log("Developer");
    } else {
        console.log(i);
    }
}
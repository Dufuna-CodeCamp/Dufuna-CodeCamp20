const num1 = 123;
const num2 = 7;
const diff = num1 - num2;

const numbers = [];

for (let i = 1; i <= diff; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Software Developer");
    } else if (i % 3 === 0) {
        console.log("Software");
        numbers.push("Software");
    } else if (i % 5 === 0) {
        console.log("Developer");
        numbers.push("Develper");
    } else {
        console.log(i);
        numbers.push(i);
    }
}

console.log(numbers);
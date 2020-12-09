
let a = 0;
let x = 7;
let y = 123;
let z = (y - x);


while (a < z) {
    a += 1;
    if ((a % 3 === 0) && (a % 5 === 0)) {
        console.log("Software Developer");
    } else if (a % 3 === 0) {
        console.log("Software");
    } else if (a % 5 === 0) {
        console.log("Developer");
    } else {
        console.log(a);
    }
}
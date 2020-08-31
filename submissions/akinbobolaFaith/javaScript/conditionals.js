let w = 0;
let x = 7;
let y = 123;
let z = (y - x);


while (w < z) {
    w += 1;
    if ((w % 3 === 0) && (w % 5 === 0)) {
        console.log("Software Developer");
    } else if (w % 3 === 0) {
        console.log("Software");
    } else if (w % 5 === 0) {
        console.log("Developer");
    } else {
        console.log(w);
    }
}

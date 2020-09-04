
var b = 123;
var c = 7;
var d = b - c;

for (var a = 1; a <= d; a++){
if ((a % 3 === 0) && (a % 5 === 0)){
    console.log ("Software Developer");
} else if ((a % 5) === 0) {
    console.log("Developer");
} else if ((a % 3) === 0) {
    console.log("Software");
} else {
    console.log(a);
}
};



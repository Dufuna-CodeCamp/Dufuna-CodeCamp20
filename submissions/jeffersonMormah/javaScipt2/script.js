var a = 1
var b = 123;
var c = 7;
var d = b - a;

while(d > a){
  if ((a % 3) === 0) {
      console.log("Software")
  } else if ((a % 5) === 0){
      console.log("Developer")
  } else if ((a % 3) && (a % 5)) {
      console.log("Software Developer")
  } else {
      console.log(a);
  }
  a++;
};



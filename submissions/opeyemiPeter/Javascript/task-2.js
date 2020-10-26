const diff = 123 - 7;
var  num1 = 1;

while (num1 <= diff) {
    switch (true) {
        case ((num1 % 3 === 0) && (num1 % 5 === 0)):
              console.log("Software Developer");
              break;
      case ((num1 % 3) === 0):
            console.log("Software");
            break;
        case ((num1 % 5) === 0):
            console.log("Developer");
            break;
        default:
            console.log(num1);
    }
    num1++;
};
var number = 123 - 7;

for (var number = 1; number <= 123 - 7; number++) {
    if (number % 3 == 0) {
        console.log("Software");
    } else if (number % 5 == 0) {
        console.log("Developer");
    } else if (number % 5 == 0 && number % 3 == 0) {
        console.log("Software Developer");
    } else (console.log(number));
}


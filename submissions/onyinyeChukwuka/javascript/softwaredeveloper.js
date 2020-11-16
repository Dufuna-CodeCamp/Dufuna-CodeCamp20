const positiveDifference = Math.abs(7 - 123);
for (let element = 1; element < positiveDifference; element++) {
    if (element % 3 === 0 && element % 5 === 0) {
        console.log("Software Developer"); 
    }
    else if (element % 5 === 0) {
        console.log("Developer"); 
    }
    else if (element % 3 === 0) {
        console.log("Software");  
    }
}

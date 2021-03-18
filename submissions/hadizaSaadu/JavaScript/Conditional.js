var positiveDifference = 123 - 7;

for (i = 1; i <= positiveDifference; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Software Developer');
        continue;
    }

    else if(i % 5 == 0) {
        console.log('Developer');
        continue;
    }
    
    if (i % 3 == 0) {
        console.log('Software');
        continue;
    }
    
    else {
        console.log(i);
    }
}
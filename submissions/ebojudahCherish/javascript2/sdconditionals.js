const absolute = Math.abs(7-123);

for (let num = 1; num <= absolute; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('Software Developer');
    }
    else if (num % 3 === 0) {
        console.log('Software');
    }
    else if (num % 5 === 0) {
        console.log('Developer');
    }
}
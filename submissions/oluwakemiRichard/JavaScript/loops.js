//defines the positive difference between 7 and 123
var diff = 123 -7;
//looping through to print out values for numbers between 1 and diff

for(var i = 1; i < diff; i++){
	if(i % 3 == 0 && i % 5 == 0){
		console.log("Software Developer");
	}
	else if ( i % 3 == 0) {
		console.log("Software");
	}
	else if (i % 5 == 0){
		console.log("Developer");
	}
	else {
		console.log(i);
	}
}
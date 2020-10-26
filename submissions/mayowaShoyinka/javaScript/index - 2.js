let w = 123, 
dif = w - 7;
for (n=0; n<= w; n++) {
	if(n%3 == 0 && n%5 == 0){
		console.log ("Software Developer");
	}
	else if(n%3 == 0) {
		console.log ("Software");
	}
	else if (n%5 == 0) {
		console.log ("Developer");
	}
	else {
		console.log(n)
	}
} 
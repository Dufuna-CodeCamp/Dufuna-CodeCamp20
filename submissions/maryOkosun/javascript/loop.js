var diff=123-7;

for (var i = 1; i < diff; i++) {
	if (i % 3 === 0 && i % 5 === 0){
		console.log("Software Developer");
}
	else if (i % 5 === 0){
		console.log("Developer");
}
	else if (i % 3 === 0 ){
		console.log("Software");
}
	else{
		console.log(i);
	}
}
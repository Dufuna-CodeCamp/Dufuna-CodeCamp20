// The positive difference between 7 and 123 is 116 so this program will print numbers between 1 and 116
let number1 = 7;
let number2 = 123;
let positiveDiff = number2 - number1;
// prog is the programmed variable

for (var prog = 1; prog <= positiveDiff; prog++) 
{
	if (prog % 3 === 0 && prog % 5 === 0) 
	{
		console.log("Software Developer");
	}
	else if (prog % 3 === 0) 
	{
		console.log("Software");
	} 
	else if (prog % 5 === 0) 
	{
		console.log("Developer");
	} 
	else 
	{
		console.log(prog)
	}
}
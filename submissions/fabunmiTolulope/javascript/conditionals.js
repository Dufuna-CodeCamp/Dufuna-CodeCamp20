// The positive difference between 7 and 123 is 116 so this program will print numbers between 1 and 116

for (var x = 1; x <= 116; x++) 
{
	if (x% 3 === 0 && x% 5 === 0) 
	{
		console.log("Software Developer");
	}
	else if (x% 3 === 0) 
	{
		console.log("Software");
	} 
	else if (x% 5 === 0) 
	{
		console.log("Developer");
	} 
	else 
	{
		console.log(x)
	}
}
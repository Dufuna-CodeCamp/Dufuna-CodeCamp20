// unit conversions

<?php

 function unitCoverter($value){
	 //kilos to pound
	 $pound = 2.20462 * $value;
	 echo ("$value kilo is equal to  $pound pound") . "<br>";
	 
	 //meter to yard
	$yard = 1.09361 * $value;
	 echo ("$value meter is equal to  $yard yard"). "<br>";
	 
	 //celcius to fahrenheit
	 $fahrenheit = $value * (9 / 5) + 32;
	 echo ("$value celcius is equal to  $fahrenheit fahrenheit") . "<br>";
 }
 unitCoverter(9);

 ?>
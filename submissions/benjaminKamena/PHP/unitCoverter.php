// unit conversions

<?php

 function unitCoverter($unit){
	 //kilos to pound
	 $pound = 2.20462 * $unit;
	 echo ("$unit kilo is equal to  $pound pound") . "<br>";
	 
	 //meter to yard
	$yard = 1.09361 * $unit;
	 echo ("$unit meter is equal to  $yard yard"). "<br>";
	 
	 //celcius to fahrenheit
	 $fahrenheit = $unit * (9 / 5) + 32;
	 echo ("$unit celcius is equal to  $fahrenheit fahrenheit") . "<br>";
 }
 unitCoverter(9);

 ?>
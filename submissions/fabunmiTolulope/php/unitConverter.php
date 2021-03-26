<!-- This function is to take parameters and perform basic unit conversions -->

<?php

function converter($input){
	 // This will convert kilograms to pound.
	// 1kilo equals 2.20462pounds
	 $pound = 2.20462 * $input;
	 echo ("$input kg is equal to  $pound pounds") . "<br>";
	 
	 //This will convert meters to yard
	 // 1 meter equals 1.09361yards
	$yard = 1.09361 * $input;
	 echo ("$input meters is equal to  $yard yards"). "<br>";
	 
	 //This will convert celcius to fahrenheit
	 // 0 celsius is (0*9/5) + 32 farenheit
	 $fahrenheit = ($input * (9 / 5)) + 32;
	 echo ("$input celsius is equal to  $fahrenheit fahrenheit") . "<br>";
 }
 converter(24);
 
?>
<!-- This will show what the weather is today -->
<?php

$dayTemp = 24;
// dayTemp is a declared variable representing the temperature of the day

if ($dayTemp <= 20) {
	//This is when the temperature is less than or equal to 20 degree Celsius
    echo "It is freezing today.";
	} 
elseif ($dayTemp >= 20 && $dayTemp < 30) {
	//This is when the temperature is greater than 20 but less than 30 degree celsius
    echo "The weather is just perfect.";
	} 
elseif ($dayTemp >= 30 && $dayTemp < 40) {
	// This is when the temperature is greater than 30 but less than 40
    echo "It's so hot today.";
	} 
elseif ($dayTemp >= 40) {
	// This is when the temperature is greater or equals to 40
    echo "Am I in the Sahara Desert?";
	} 
else {echo "This is not an acceptable value";
	}

?>
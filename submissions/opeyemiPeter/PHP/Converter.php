<?php
function converter($input){
	 $pound = 2.205 * $input;
	 echo "$input kg is equal to  $pound pounds . <br>";
	 

	$yard = 1.094 * $input;
	 echo "$input meters is equal to  $yard yards . <br>";
   
   $fahrenheit = (($input * 1.8) + 32);
	 echo "$input celsius is equal to  $fahrenheit fahrenheit .<br>";
 }
 converter(16);
 
?>

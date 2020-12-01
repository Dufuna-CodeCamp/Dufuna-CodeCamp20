<?php

$temp = 31;
if($temp <= 20){
echo "It is freezing today";
} else if($temp > 20 && $temp < 30){
	echo "The weather is just perfect.";
} else if($temp >= 30 && $temp < 40){
	echo "It's so hot today.";
} else if($temp >= 40){
	echo "Am I in the Sahara Desert?!";
} else{
    echo "Invalid";
}
?>

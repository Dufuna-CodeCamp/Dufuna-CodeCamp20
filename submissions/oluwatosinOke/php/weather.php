<?php
// decleare a variable
$temp = 26;
// write the conditions using if__ elseif statement
if ($temp <= 20){
    echo "It is freezing today";
} elseif ($temp > 20 && $temp < 30){
    echo "The weather is just perfect.";
} elseif ($temp >=30 && $temp < 40){
    echo "Its so hot today.";
} else {
    echo " Am I in the Sahara Desert?";
}
?>
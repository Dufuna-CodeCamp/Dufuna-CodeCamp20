<?php 

function converter ($type, $value = 0) {
    $onePound =  2.205;
    $oneYard = 1.094;
    $toLowerCase = strtolower($type);
    if (gettype($value) === "integer" || gettype($value) === "double") {
         switch ($toLowerCase) {
        case "kilo":
            echo $value * $onePound . " pounds";
        break;
        case "meter":
            echo $value * $oneYard . " yards";
        break;
        case "celsius":
            echo ($value * 9/5) + 32 . " fahrenheit";
        break;
        default:
            echo "Please enter a valid type";
    };
    }
    else{
        echo "Please Enter a Number";
    };
   
}; 

converter("Meter", 3);

?>
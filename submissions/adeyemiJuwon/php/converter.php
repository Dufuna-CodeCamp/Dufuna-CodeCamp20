<?php 


 function converter($value, $unit) {
        $pound = 0.4536;
        $yard = 0.9144;
        $fahrenheit = ($value * 9/5) + 32;

        if($unit === "Kg") {
            return round($value/$pound);

        } elseif($unit === "m") {
            return round($value/$yard);

        } elseif($unit === "C") {
            return $fahrenheit;

        } else {
            return "Not availaible";
        }
    }
    echo converter(100, "Kg") . "<br>";

    echo converter(10, "m") . "<br>";

    echo converter(20, "C") . '<br>';
    
?>
<?php

    function converter($value, $unit) {
        $pound = 1/2.20462;
        $yard = 1/1.09361;
        $fahrenheit = ($value * 9/5) + 32;

        if($unit === 'Kg') {
            return $value/$pound;

        } elseif($unit === 'm') {
            return $value/$yard;

        } elseif($unit === 'C') {
            return $fahrenheit;

        } else {
           return 'Conversion not possible, ensure the unit is in Kg, m or C';
        }
    }
    echo converter(70,'Kg') . '<br>';
    // ans = 154.3234lb
    echo converter(70,'m') . '<br>';
    // ans = 76.5529Yd
    echo converter(70,'C') . '<br>';
    // ans = 158F

?>
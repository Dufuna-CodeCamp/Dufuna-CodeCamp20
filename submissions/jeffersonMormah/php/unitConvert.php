<?php

function convertedUnit($value, $unit) {

    if ($unit === 'kilos'){
        $pounds = $value * 2.205;
        echo $pounds . "lb <br>";
    }elseif ($unit === 'meters'){
        $yards = $value * 1.094;
        echo $yards . "yards <br>";
    }elseif ($unit === 'celsius'){
        $farenheit = ($value * 9/5) + 32;
        echo $farenheit . "&deg F <br>";
    }else {
        echo "Invalid units"
    }
}

 convertedUnit(34, 'kilos');
// 74.97bs;
 convertedUnit(34, 'meters');
//37.2 yards
 convertedUnit(34, 'celsius');
//93.2F
?>
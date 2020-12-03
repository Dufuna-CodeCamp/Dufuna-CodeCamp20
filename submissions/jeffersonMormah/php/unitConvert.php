<?php

function convertedUnit($value, $unit) {
    $pounds = $value * 2.205;
    $yards = $value * 1.094;
    $farenheit = ($value * 9/5) + 32;

    if ($unit === 'kilos'){
        return $pounds;
    }elseif ($unit === 'meters'){
        return $yards;
    }elseif ($unit === 'celsius'){
        return $farenheit;
    }else {
        return 'Invalid units'
    }
}

echo convertedUnit(20, 'kilo') . '<br>';
// 44.1lbs;
echo convertedUnit(20, 'meters') . '<br>';
//21.88 yards
echo convertedUnit(20, 'celsius') . '<br>';
//68F
?>
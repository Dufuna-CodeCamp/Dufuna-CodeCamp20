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

echo convertedUnit(34, 'kilo') . '<br>';
// 74.97bs;
echo convertedUnit(34, 'meters') . '<br>';
//37.2 yards
echo convertedUnit(34, 'celsius') . '<br>';
//93.2F
?>
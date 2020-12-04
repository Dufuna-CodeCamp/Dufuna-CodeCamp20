<?php

function convertedUnit($value, $unit) {

    if ($unit === 'kilos'){
        $pounds = $value * 2.205;
        return $pounds;
    }elseif ($unit === 'meters'){
        $yards = $value * 1.094;
        return $yards;
    }elseif ($unit === 'celsius'){
        $farenheit = ($value * 9/5) + 32;
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
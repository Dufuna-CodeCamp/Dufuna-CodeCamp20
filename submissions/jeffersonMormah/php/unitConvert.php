<?php

function convertedUnit($value, $unit) {
    $pound = 1/2.205;
    $yard = 1/1.094;
    $farenheit = ($value * 9/5) + 32;

    if ($unit === 'kilos'){
        return $value/$pound;
    }elseif ($unit === 'meters'){
        return $value/$yard;
    }elseif ($unit === 'celsius'){
        return $farenheit;
    }else {
        return 'Invalid units'
    }
}

echo convertedUnit(20, 'kilo');
// 44.1lbs;
echo convertedUnit(20, 'meters');
//21.88 yards
echo convertedUnit(20, 'celsius');
//68F
?>
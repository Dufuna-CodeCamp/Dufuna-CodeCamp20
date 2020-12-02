<?php
function convert($value) {
    $pounds = $value * 2.205;
    echo $pounds . "lb <br>";

    $yards = $value * 1.094;
    echo $yards . "yards <br>";

    $farenheit = ($value * 9/5) + 32;
    echo $farenheit . "&deg F <br>";
}

convert(20);
//44.1lb
//21.88yards
//68F
?>
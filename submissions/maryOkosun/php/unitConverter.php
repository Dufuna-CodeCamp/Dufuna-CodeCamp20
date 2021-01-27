<?php>
    function unitConverter($value){
        $pound = $value * 2.20462;
        $yard = $value * 1.09361;
        $fahrenheit = $value * (9/5)+32;

        echo "$value kilos is equivalent to $pound pounds <br>";
        echo "$value meters is equivalent to $yard yards <br>";
        echo "$value celsius is equivalent to $fahrenheit fahrenheit <br>";
    };
    unitConverter(20);
    // 44.092 pounds
    //21.872 yards
    //68 fahrenheit
?>
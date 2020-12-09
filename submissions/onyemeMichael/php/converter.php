<?php

    function convert($value) {
        $pounds = ($value * 2.205);
        $yards  = ($value * 1.094);
        $fahrenheit = (($value * 1.8) + 32);

        echo "$value kilos equals $pounds pounds<br>";
        echo "$value meters equals $yards yards<br>";
        echo "$value celcius equals $fahrenheit fahrenheit<br>";
    }

    convert(25);

?>
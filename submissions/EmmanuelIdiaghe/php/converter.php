<?php
#A function that converts an input to 3 units

    function convertTo($input) {
        $pounds = ($input * 2.205);
        $yards  = ($input * 1.094);
        $fahrenheit = (($input * 1.8) + 32);

        echo "$input kilos equals $pounds pounds<br>";
        echo "$input meters equals $yards yards<br>";
        echo "$input celcius equals $fahrenheit fahrenheit<br>";
    }

    convertTo(15);
?>
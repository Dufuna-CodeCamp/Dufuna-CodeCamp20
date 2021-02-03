<?php
function convert ($value) {
    $pound = ($value * 2.20462);
    $yard = ($value * 1.09361);
    $fahrenheit = ((($value * (9/5))+32));
    echo "$value Kilos equal to $pound Pounds <br>";
    echo "$value Meters equal to $yard Yards <br>";
    echo "$value Celcius equal to $fahrenheit Fahrenheits <br>";
}
convert (30);
?>
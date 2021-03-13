<?php

function performConversion($value){
    
    $pounds = $value * 2.2;//Assumption is that 1 Kilo is equivalent to 2.2 pounds
    $yards = $value * 1.094;//Assumption is that 1 meter is equivalent to 1.094 pounds
    $fahrenheit = ($value * 9/5) + 32; // fomula used is (0°C × 9/5) + 32

    return [$pounds,$yards,$fahrenheit];
}
$result = performConversion($value = 37);

echo"<b>The conversion of ". $value ." kilos is equivalent to ". $result[0]." pounds</b><br>";
echo"<b>The conversion of ". $value ." Meters is equivalent to ". $result[1]." yards</b><br>";
echo"<b>The conversion of ". $value ." Celsius is equivalent to ". $result[2]." fahrenheit</b>";
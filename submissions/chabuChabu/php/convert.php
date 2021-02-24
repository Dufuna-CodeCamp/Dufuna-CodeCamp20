<?php

$value = $_REQUEST['value'];
$unit = $_REQUEST['unit'];

function performConversion($value,$unit){
    if($unit =='kilogram'){
        $result = $value * 2.2;//Assumption is that 1 Kilo is equivalent to 2.2 pounds
        echo"<h1>The conversion of $value kilos is equivalent to $result pounds</h1>";
    }elseif($unit == 'meters'){
        $result = $value * 1.094;//Assumption is that 1 meter is equivalent to 1.094 pounds
        echo"<h1>The conversion of $value Meters is equivalent to $result yards</h1>";
    }elseif($unit == 'celsius'){
        $result = ($value * 9/5) + 32; // fomula used is (0°C × 9/5) + 32
        echo"<h1>The conversion of $value celsius is equivalent to $result fahrenheit </h1>";
    }else{
        echo"<h1> Please enter values and choose conversion unit </h1>";
    }
}

performConversion($value,$unit);
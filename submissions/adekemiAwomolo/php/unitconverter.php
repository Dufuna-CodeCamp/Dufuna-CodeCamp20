<?php 

function unit_converter($unit){
    $pounds = ($unit * 2.20462);
    $yards = ($unit * 1.09361);
    $fahrenheit = ((($unit * (9/5)) + 32));
    echo"**********  RESULT ********** <br>";
    echo "<br>";
    echo"*******  Kilo to Pounds ******** <br>";
    echo "$unit Kilos is equal(s) to $pounds Pounds. <br> <br>";
    
    echo"*******  Meter to Yard ******** <br>";
    echo "$unit Meter(s) is equal(s) to $yards Yards. <br> <br>";
    
    echo"*******  Celsius to  Fahrenheit ******** <br>";

    echo "$unit Celsius is equal(s) to $fahrenheit ˚ F . <br>"; 
};

//call the function.
unit_converter(13)

?>
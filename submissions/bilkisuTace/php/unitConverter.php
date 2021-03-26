<?php 
// 1kg = 2.20462pounds
// 1mt = 1.094yards
// 1cl = 33.8fahrenheit
function unitConverter($value,$type){
    if ($type =="kg"){
        return $value*2.20462;

    }   elseif ($type =="mt") {
        return $value*1.094;

    }   elseif ($type =="cl") {
        return $value*33.8;
    }
    
}

echo unitConverter (112, "kg"); 
echo "<br>";
echo unitConverter (11, "mt"); 
echo "<br>";
echo unitConverter (21, "cl");
 ?>
 


 
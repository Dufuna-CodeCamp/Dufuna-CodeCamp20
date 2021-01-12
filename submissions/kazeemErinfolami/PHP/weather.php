<?php
function temperature ($celsius){
    if($celsius <= 20){
        return "It is freezing today";
    }else if($celsius > 20 && $celsius < 30){
        return "The weather is just perfect.";
    }else if ($celsius >= 30 && $celsius < 40){
        return "It's so hot today.";
    }else if($celsius >= 40){
        return "Am I in the Sahara Desert?!";
    }else{
        return "cant calculate $celsius";
    }
};

$cal = temperature(32);
echo $cal;

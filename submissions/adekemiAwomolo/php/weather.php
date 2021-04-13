<?php


//using a reusuable function to hold the variable and parameter.
function weather($temp){
    if($temp <= 20){
        echo "It is freezing today. <br>";
    }elseif($temp > 20 && $temp < 30){
        echo "The weather is just perfect. <br>";
    }elseif($temp >= 30 && $temp < 40){
        echo "It is so hot today. <br>";   
    }
    else{
        echo "Am I in the Sahara Desert?! <br>";
    }
}
//call the function and pass the value of the parameter.
weather(65);


//run multiple tests on the function to test the conditions

/*weather(6);
weather(40);
weather(25);*/





?>
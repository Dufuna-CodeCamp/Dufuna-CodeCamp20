<?php

//Display every number between 100 and 150

for($i = 101;$i < 150;$i++){
 echo $i."<br>";
}

//Display even numbers between 0 and 50

$x = 0;

while($x < 50) {
    if($x % 2 == 0){
        echo $x ."<br>"; 
    }
    $x++;
}
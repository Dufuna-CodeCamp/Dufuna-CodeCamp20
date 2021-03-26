<?php

// This program will display every number between 100 and 150 using while loop
$x = 101;
while ($x < 150) {
	echo "Number: $x <br>";
	$x++;
}

// This program will display even numbers between 0 and 50 using for loop
for($y = 2; $y < 50; $y++){
    if($y % 2 === 0){
        echo "Number: $y <br>";
    };
}

?>

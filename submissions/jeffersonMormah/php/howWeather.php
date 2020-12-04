<?php

$temperature = 75;
 if ($temperature <= 20) {
     echo "Its freezing today";
 } elseif ($temperature > 20 && $temperature < 30) {
     echo "The weather is just perfect";
 } elseif ($temperature >= 30 && $temperature < 40) {
     echo "Its so hot today";
 } else {
     echo "Am I in the sahara desert?";
 };
 ?>
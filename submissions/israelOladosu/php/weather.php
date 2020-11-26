<?php

$temprature = 40;

if ($temprature <= 20){
    echo 'It is freezing today';
} elseif ($temprature > 20 && $temprature < 30) {
     echo 'The weather is just perfect';
} elseif ($temprature >= 30 && $temprature < 40) {
    echo 'It is hot today';
} else {
    echo 'Am I in the Sahara Desert?!';
};
<?php
#Using Arrays
    $persons = ['Emmanuel', 'John', 'Harry', 'Rihanna', 'Tyler', 'Henry', 'Cain', 'Drake'];
    $hobby = ['Skipping', 'Travelling', 'Swimming', 'Singing', 'Reading', 'Drumming', 'Dancing', 'Skating'];

    for ($i=0; $i < 8; $i++) {
        echo "My name is " .  $persons[$i] . ". I love " . $hobby[$i] . "<br>"; 
    }
?>
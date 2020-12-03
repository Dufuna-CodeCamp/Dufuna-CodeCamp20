<?php

$name = ['Juwon', 'Feyisola', 'Ibukun', 'Ronke', 'Shayo', 'Seun', 'Itunu', 'Saka'];

$hobbies = ['playing', 'browsing', 'outing', 'sleeping', 'gisting', 'working', 'coding', 'reading'];

function display($firstName, $hobby){
    for ($i = 0; $i <= sizeof($firstName) - 1; $i++) {
        echo "My name is $firstName[$i]. I love $hobby[$i]. <br >";
    }
};

display($name, $hobbies);
?>
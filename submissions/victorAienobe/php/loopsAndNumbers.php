<?php

    // A for loop that displays every number between 100 and 150

    for($i =101; $i < 150; $i++) {
        echo $i . '<br>';
    }

    // A for loop that  displays all even numbers between 0 and 50

    for($i = 1; $i < 50; $i++) {
        if($i % 2 === 0) {
            echo $i . '<br>';
        }
    }
?>
<?php

    $threshold = 101;

    echo(" A PHP program that displays every number between 100 and 150 <br>");
    
        for ($i = $threshold; $i < 150; ++$i) {
            echo $i.'<br>';
        };

    echo ("<br>A PHP program that displays all even number between 0 and 50 <br>");
        
        for ($i = 2; $i < (($threshold-1)/2); ++$i){
            if ( ($i % 2) === 0){
                echo $i.'<br>';
            }
        };
        
?>

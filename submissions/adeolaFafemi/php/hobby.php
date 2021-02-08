<?php

$names = ["John","Mark","Joe","Martha","Jane","Jack","Joseph","Nick"];

$hobbies = ["photography", "knitting", "writing","gardening","cooking","Dance","hiking","painting"];

function description($firstName,$hobby){
    for($i =0; $i < sizeof($firstName); $i++){
        echo "My name is $firstName[$i]. I love $hobby[$i]. <br>";
    };
};

description($names,$hobbies);

?>
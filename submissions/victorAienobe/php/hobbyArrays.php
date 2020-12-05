<?php

    $names = ['Pele','Maradona','Messi','Ronaldo','Neymar','Hazard','Debruyne','Aguero'];

    $hobbies = ['movies','music','chatting','video games','swimming','skating','football','basketball'];

    foreach(array_combine($names, $hobbies) as $firstname => $hobby) {
            echo 'My name is ' .$firstname . ", I love " . $hobby . "<br>";
    }

?>
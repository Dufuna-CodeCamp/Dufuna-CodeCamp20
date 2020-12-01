<?php

    $names = ['Pele','Maradona','Messi','Ronaldo','Neymar','Hazard','Debruyne','Aguero'];

    $hobbies = ['movies','music','chatting','video games','swimming','skating','football','basketball'];

    foreach(array_combine($names,$hobbies) as $key => $value) {
            echo 'My name is ' .$key . ", I love " . $value . "<br>";
        }

?>
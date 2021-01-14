<?php

$firstNames = ["Jeff","Michelle","Matthew","Kelly","Wayne","Favor","Juliet","Daniel"];
$resHobbies = ["Coding","Music","Football","Dancing","Trading","Singing","Fashion","Acting"];

foreach(array_combine($firsNames,$resHobbies) as $firstname => $hobby){
    echo 'My name is ' .$firstname . ", I love " . $hobby . "<br>";
}


?>
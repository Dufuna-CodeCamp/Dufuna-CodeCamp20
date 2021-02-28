<?php

$firstName = [ 'dan', 'nonde','max','francis','kachusa','ademuji','doyin','nwakwu'];
$hobby =['Cricket','Boxing','Football','Netball','Motorsport','Action movies','Cooking','Hiking'];

for($i = 0;$i < count($firstName)-1; $i++){
    echo "My name is ".$firstName[$i].". I love ".$hobby[$i].".<br>";
}
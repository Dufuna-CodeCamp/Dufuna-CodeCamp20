<?php
$names = array("Kazeem", "Paul", "Ronald", "Mane", "Seun", "Ryan", "Lekan", "Tupak", "Mary");
$hobbies = array("coding", "drawing", "writing", "traveling", "dancing", "fishing", "swiming", "hiking", "playing chess");

function sentence ($name, $hobby){
    for($i = 0; $i <= sizeof($name); $i++){
        echo "my name is $name[$i]. i love $hobby[$i]. <br> ";
    };
}
sentence($name, $hobby);

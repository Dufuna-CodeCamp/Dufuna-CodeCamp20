<?php

$name = ['Adaa',  'Afolakemi',  'Tox',  'Emmanuel',  'Nifemi',  'Mary',  'Israel',  'Opeyemi'];

$hobbies = ['coding',  'signing',  'skating',  'football',  'tennis',  'dancing',  'drumming',  'reading'];

function display($array1, $array2)
{
    for ($i = 0; $i <= count($array1) - 1; $i++) {
        $firstName = $array1[$i];
        $hobby = $array2[$i];
        echo "My name is $firstName. I love $hobby. <br >";
    }
};

// calling the function
display($name, $hobbies);
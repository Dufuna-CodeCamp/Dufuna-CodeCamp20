<?php
$firstname = ["John", "George", "Ada", "Tolu", "Mayorkun", "Lovelace", "Isaac", "Newton"];
$hobby = ["Drawing", "Singing", "Dancing", "Going to Movies", "Reading", "Writing", "Travelling", "Socializing"];

$result = array_combine($firstname, $hobby);
foreach ($result as $firstname => $hobby) {
    echo "My name is $firstname. I love $hobby. <br>";
}
?>
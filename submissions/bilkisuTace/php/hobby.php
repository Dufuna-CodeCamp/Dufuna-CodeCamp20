<?php 
$firstname = array("Shunom", "Nomsu", "Gyeshimmi", "Haruna", "Patience", "Bilkisu", "Farida", "Yazid");
$hobby = array("Reading", "Drumming", "Singing", "Coding", "Baking", "taking Pictures", "Cooking", "Traveling");

for ($i=0; $i <= 7; $i++) { 
	echo "My name is " . $firstname[$i]."." . " I love " . $hobby[$i]. ".";
	echo "<br>";
}

 ?>
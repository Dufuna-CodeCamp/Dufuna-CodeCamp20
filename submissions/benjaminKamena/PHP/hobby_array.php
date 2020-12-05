<?php
$eight_people = array("Memory","Esther","Rose","Baron","Friday","Mathews","Kebby","Wendy");
$hobbies = array("Social media","Singing Gospel","Watching Movies","Window Shopping","Making Money","Driving","Making friends","Playing Pc Games");
$result = array_combine($eight_people, $hobbies);
foreach($result as $eight_people => $hobbies){
	echo "My name is $eight_people. I love $hobbies <br>";
}
?>
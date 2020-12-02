<?php
$eight_people = array("Memory","Esther","Rose","Baron","Friday","Mathews","Kebby","Wendy");
$hobbies = array("Social media","Singing Gospel","Watching Movies","Window Shopping","Making Money","Driving","Making friends","Playing Pc Games");
$result = array();
foreach($eight_people as $key=>$value){
	$val = $hobbies[$key];
	$result[$key]=array($value, $val);
	echo "My name is {$value}. I love {$val}"."<br>";
	}
?>
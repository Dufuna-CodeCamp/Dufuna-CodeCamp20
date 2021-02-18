<!-- This is a programme that links the names in the name array and their respective hobbies -->

<?php
$names = array('Victor', 'Eniola', 'Amurede', 'Iyebiye', 'Oluwakemi', 'Oluwatobi', 'Olaseni', 'Eunice');
$hobbies = array('Research and reaching out', 'Reading and sharing knowledge gained', 'Playing with gadgets', 'Making others happy', 'Teaching and impacting knowledge', 'Making friends and jogging', 'Chatting with my friends', 'Playing football');


function name_hobby($names, $hobbies){
	for ($i=0; $i < 8 ; $i++) { 
		echo "My name is".$names[$i], ". I love".$hobbies[$i]. ". <br>";
	};
};

name_hobby($names, $hobbies);

?>

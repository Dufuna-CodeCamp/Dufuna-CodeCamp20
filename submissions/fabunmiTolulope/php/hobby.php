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

// This is for individual linking
// echo "My name is".$names[0], ". I love".$hobbies[0]. ". <br>";
// echo "My name is".$names[1], ". I love".$hobbies[1]. ". <br>";
// echo "My name is".$names[2], ". I love".$hobbies[2]. ". <br>";
// echo "My name is".$names[3], ". I love".$hobbies[3]. ". <br>";
// echo "My name is".$names[4], ". I love".$hobbies[4]. ". <br>";
// echo "My name is".$names[5], ". I love".$hobbies[5]. ". <br>";
// echo "My name is".$names[6], ". I love".$hobbies[6]. ". <br>";
// echo "My name is".$names[7], ". I love".$hobbies[7]. ". <br>";

?>
<?php
$mymyNamess = array("Paul", "Sayo", "Faith", "Segun", "Tolulope", "Anuoluwa", "Monisola", "Christine", "Fisayomi");
$myHobbies = array("movies", "reading", "gaming", "shopping", "studying", "researching", "driving", "sporting", "coding");

function aboutMe($myNames, $myHobbies){
    for($i = 0; $i <= sizeof($myNames); $i++){
        echo "my name is $myNames[$i]. i love $myHobbies[$i]. <br> ";
    };
}
aboutMe($myNames, $myHobbies);

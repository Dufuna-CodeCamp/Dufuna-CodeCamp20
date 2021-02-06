<?php
// Create an array called names
$names = ["Tosin", "Ayotomiwa", "Thompson", "Charlotte", "Janneya", "Tiara", "Judah", "Havilah"];
// Create an array called Hobby
$hobby = ["eating", "Reading", "Talking", "Playing", "Writting", "Coding", "Sewing", "Dancing"];
// creating a loop using foreach
foreach ($names as $index => $value) { 
    echo "My Name is " .$names[$index]. ", I Love " .$hobby{$index}. ". <br />";
}
?>
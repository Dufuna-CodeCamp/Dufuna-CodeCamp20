<?php

$names = ["Michael", "Paul", "Matthew", "Luke", "John", "James", "Peter", "Daniel"];
$hobbies = ["Coding", "Football", "druming", "preaching", "Tennis", "Writing", "Reading", "cooking"];

$output = array_combine($names, $hobbies);
foreach ($output as $names => $hobbies) {
    echo "My name is $names. I love $hobbies. <br>";
}

/* Result
My name is Michael. I love Coding.
My name is Paul. I love Football.
My name is Matthew. I love druming.
My name is Luke. I love preaching.
My name is John. I love Tennis.
My name is James. I love Writing.
My name is Peter. I love Reading.
My name is Daniel. I love cooking.
*/

?>
<?php
$firstName = ['Valentine', 'Margret', 'Darlyntina', 'Cynthia', 'Jennifer', 'Juliet', 'Vera', 'Stella'];
$hobby = ["Watching Football", "Cooking", "Tourism", "Coding", "Sewing", "Reading and learning new things", "Cosmetology", "Modelling"];

$result = array_combine($firstName, $hobby);
foreach ($result as $firstName => $hobby) {
    echo ("My name is $firstName. I love $hobby. <br>");
}
?> 
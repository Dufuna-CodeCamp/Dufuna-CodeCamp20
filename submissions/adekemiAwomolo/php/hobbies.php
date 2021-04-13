<?php  

$user_names =[
    'Adekemi',
    'Kwame',
    'Lilian',
    'Grace',
    'Uchenna',
    'Benjamin',
    'Temitope',
    'Ayomide'
];
$user_hobbies =[
    'Singing',
    'Dancing',
    'Reading',
    'Coding',
    'Dancing',
    'Singing',
    'Eating', 
    'Reading' 
];

foreach($user_names as $first => $hobbies) {
    echo "My name is ".$user_names[$first]. ",". "  I love ".$user_hobbies {$first}."." ."<br>";
};

?>
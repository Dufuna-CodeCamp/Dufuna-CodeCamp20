<?php
$i = 101;
while ($i < 150) {
    echo $i . "<br>";
    $i++;
}

for($i = 2; $i < 50; $i++) {
    if($i % 2 === 0) {
        echo $i . "<br>";
    } else {
        echo "Invalid input";
    }
}
?>
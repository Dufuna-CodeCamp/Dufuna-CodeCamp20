<?php
include_once("cookies.php");

function display() {
    global $info;
    if (count($info) > 0) {
        echo "<table style= 'border: 1px solid black'>";
        echo "<tr>";
        echo "<th>S/N</th>";
        echo "<th>Full Name</th>";
        echo "<th>Email Address</th>";
        echo "<th>Created At</th>";
        echo "<th'>Actions</th>";
        echo "</tr>";
        foreach ($info as $value) {
        echo "<tr>";
        echo "<td>" . $value["id"] . "</td>";
        echo "<td>" . $value["first_name"]. " " . $value["last_name"] . "</td>";                    
        echo "<td>". $value["email"] . "</td>";
        echo "<td>" . $value["date_created"] . "</td>";
        echo "<td style= 'border: 1px solid black'><form method='get' action='customersView.php'><button style= 'color: black; background-color: #DAF943; border-radius: 20%; margin-top: 19px;' type='submit' name='view' value=\"$value[id]\">View</button></form></td>";
        echo "</tr>";
        }
        echo "</table";
    } else echo "No record found!";
}

try {
    if ($notSet) $info = display(); //Fetch query and set cookie
    else $info = unserialize($_COOKIE["named_list"]); //Fetch cookie 
    display();
} 
catch(PDOException $e) {
    die ("ERROR: $sql " . $e->getMessage()) . "<br>";
}
unset($pdo);
?>
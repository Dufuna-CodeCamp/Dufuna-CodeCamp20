<?php
include_once 'connect.php';
$info;
$notSet = !(isset($_COOKIE["show"])); //cookie not set

# Function that sets cookie
function load() {
    global $pdo;
    $sql = "SELECT * FROM customers";
    $result = $pdo->query($sql);
    $details = $result->fetchAll();
    setcookie("show", serialize($details), time() + (86400 * 30), "/");
    return $details;
}

#Function that displays table
function display() {
    global $info;
    if (count($info) > 0) {
        echo "<table style= 'border: 1px solid black'>";
            echo "<tr>";
                echo "<th style= 'border: 1px solid black'>S/N</th>";
                echo "<th style= 'border: 1px solid black'>Full Name</th>";
                echo "<th style= 'border: 1px solid black'>Email Address</th>";
                echo "<th style= 'border: 1px solid black'>Created At</th>";
                echo "<th style= 'border: 1px solid black'>Actions</th>";
            echo "</tr>";
            foreach ($info as $value) {
                echo "<tr>";
                    echo "<td style= 'border: 1px solid black'>" . $value["id"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["first_name"] . "  " . $value["last_name"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["email_address"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["created_at"] . "</td>";
                    echo "<td style= 'border: 1px solid black'><form method='get' action='view.php'><button style= 'color: black; background-color: #DAF943; border-radius: 20%; margin-top: 19px;' type='submit' name='view' value=\"$value[id]\">View</button></form></td>";
                echo "</tr>";
            }
        echo "</table";
    } else echo "No record found!";
}


try {
    if ($notSet) $info = load(); //Fetch query and set cookie
    else $info = unserialize($_COOKIE["show"]); //Fetch cookie 
    display();
} catch(PDOException $e) {
    die ("ERROR: $sql " . $e->getMessage()) . "<br>";
}
?>
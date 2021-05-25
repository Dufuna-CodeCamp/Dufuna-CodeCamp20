<?php

require_once('connection.php');
$info;
$notSet = !(isset($_COOKIE["named_list"])); //cookie not set

# Function that sets cookie
function load() {
    global $pdo;
    $sql = "SELECT * FROM customers";
    $result = $pdo->query($sql);
    $details = $result->fetchAll();
    setcookie("named_list", serialize($details), time() + (86400 * 30), "/");
    return $details;
}

#Function that displays table

?>
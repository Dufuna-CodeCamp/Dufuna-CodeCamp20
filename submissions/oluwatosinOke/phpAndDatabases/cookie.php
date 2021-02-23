<?php
require_once("connection.php");
try {
    $sql = "SELECT * FROM customers";
    $result= $pdo->query($sql);
    // setting up the cookie to save the result gotten from the databse
    setcookie("customers", "view", time()+7200, "/");
    return $result;
} catch (PDOException $e) {
die ('Sorry...Could not Execute ' . $sql . $e->getMessage());
}

?>
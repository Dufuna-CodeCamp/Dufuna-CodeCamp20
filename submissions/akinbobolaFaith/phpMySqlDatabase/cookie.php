<?php
require_once("connection.php");

try {
    $sql = "SELECT * FROM customers";
    $result = $pdo->query($sql);
    $data = $result->fetchAll();
    setcookie("customers", json_encode($data), time()+3600);
    return $data;
} catch (PDOExeption $e) {
    die("ERROR: Could not execute $sql. " . $e->getMessage());
}

?>
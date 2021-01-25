<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=zeezy_stores", "root", "mysql");

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOExeption $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>
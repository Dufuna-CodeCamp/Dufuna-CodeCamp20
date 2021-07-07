<?php

// 1. Attempt MySQL server connection.
try{
    $pdo = new PDO ("mysql:host=localhost;dbname=kwathu","root","mysql");
    
// 2. Set the PDO error mode to exception

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e){

    die("ERROR: Could not connect. " . $e->getMessage());

}


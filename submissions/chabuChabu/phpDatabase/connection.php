<?php
/*Attempt MySQL server connection.Assuming you are running MySQL
server with defualt settings (user 'root' with a password)*/
try{
    $pdo = new PDO ("mysql:host=localhost;dbname=kwathu","root","mysql");
    
    //Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e){

    die("ERROR: Could not connect. " . $e->getMessage());
}
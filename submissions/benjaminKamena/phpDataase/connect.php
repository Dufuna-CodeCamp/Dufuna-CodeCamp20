<?php 
try{
    $pdo = new PDO("mysql:host=localhost;dbname=e_commerce_db", 'root', 'mysql');
    $pdo->setAttribute(Pdo::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("ERROR:Could not connect." . $e->getMessage());
}
?>
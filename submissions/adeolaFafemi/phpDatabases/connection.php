<?php
try{
    $pdo = new PDO("mysql:host=localhost;dbname=under9K_store", "root", "nickiminaj_20");
    $pdo->setAttribute(Pdo::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("ERROR:Could not connect." . $e->getMessage());
}


?>
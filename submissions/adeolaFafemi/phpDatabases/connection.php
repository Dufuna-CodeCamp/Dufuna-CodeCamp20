<?php

try{
    $pdo = new PDO("mysql:host=localhost;dbname=under9K_store", "root", "nickiminaj_20");
    
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo -> getAttribute(constant("PDO::ATTR_CONNECTION_STATUS"));
    return $pdo;
    }catch(PDOException $e){
        die("ERROR: could not connect. ". $e ->getMessage());
        }


?>
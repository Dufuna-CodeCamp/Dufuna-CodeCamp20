<?php 
  
try{
    $pdo = new PDO("mysql:host=localhost;dbname=greenprint_integrated_services", 'root', 'mysql');
    $pdo->setAttribute(Pdo::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("ERROR:Could not connect." . $e->getMessage());
}

?>
    
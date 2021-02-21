<?php
//connecting to the mysql database
  
try {
  $pdo = new PDO("mysql: host=localhost; dbname=e_store", "root", "tocyn");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Connected Succefully....";
  return $pdo;
} catch (PDOException $e) {
  echo "failed to connect " . $e->getMessage() . "<br>";
}
?>
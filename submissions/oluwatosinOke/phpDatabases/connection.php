<?php
//connecting to the mysql database
  
try {
  $pdo = new PDO("mysql: host=localhost; dbname=e_store", "root", "tocyn");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected Succefully....";
  return $pdo;
} catch (PDOException $e) {
  echo "failed to connect " . $e->getMessage() . "<br>";
}



/*connecting to mysql database
$servername = "localhost";
$username = "root";
$password = "tocyn";

try {
  $conn = new PDO("mysql:host=$servername", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}*/
?>
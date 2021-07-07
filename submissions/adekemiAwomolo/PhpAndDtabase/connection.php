<?php

try{
$pdo = new PDO("mysql:host=localhost;dbname=e_commerce","root","root");

$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//echo "connected successfully" . $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS"));
  return $pdo;

}
catch(PDOException $e){
die("ERROR: could not connect. ". $e->getMessage());


}
    

?>
<?php
 class Connect {
    public function conn() {
       try {
           $pdo = new PDO("mysql: host=localhost; dbname=mix_stores", 'root', 'mysql');
           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           echo 'connected succefully. Host info ' . $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")) . "<br>";
           return $pdo;
       } catch (PDOException $e) {
           die ('failed to connect ' . $e->getMessage()) . "<br>";
       }
    }
}

unset($pdo);
?>
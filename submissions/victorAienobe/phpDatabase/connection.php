<?php

     //connecting to the mysql database
     try {
        $pdo = new PDO("mysql: host=localhost; dbname=dufuna", 'root', 'mysql');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'connected succefully. Host info ' . $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")) . "<br>";
    } catch (PDOException $e) {
        die ('failed to connect ' . $e->getMessage()) . "<br>";
    }


?>
<?php
    $usernameDB = "dufuna";//user
    $passwordDB = "dufuna12345";//user password

    try {
        $pdo = new PDO("mysql:host=localhost", $usernameDB, $passwordDB);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected Successfully. Host info: " . $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")) . "<br>";
    
    } catch (PDOException $e) {
        die ("ERROR: Could not connect. " . $e->getMessage()) . "<br>";
    }
    
    #Use Database
    try {
        $sql = "USE emmy_shop";
        $pdo->exec($sql);
        echo "Using Database: emmy_shop <br><hr><br>";
    
    } catch (PDOException $e) {
        die ("ERROR: Could not use database $sql " . $e->getMessage()) . "<br>";
    }
?>
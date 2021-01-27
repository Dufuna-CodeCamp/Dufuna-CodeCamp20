<?php

     //connecting to mysql database

     try {
        $pdo = new PDO('mysql: host=localhost', 'root', 'mysql');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        echo 'connected succefully. Host info . '.$pdo->getAttribute(constant('PDO::ATTR_CONNECTION_STATUS')).'<br>';
    } catch (PDOException $err) {
        die('ERROR: Could not connect '.$err->getMessage()).'<br>';
    }


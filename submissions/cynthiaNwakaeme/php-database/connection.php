<?php

     //connecting to mysql database
    class Connection {
        public function connect () {
            try {
                $pdo = new PDO('mysql: host=localhost; dbname=taries_empire', 'root', 'mysql');
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                echo 'connected succefully. Host info . '.$pdo->getAttribute(constant('PDO::ATTR_CONNECTION_STATUS')).'<br>';
                return $pdo;
            } catch (PDOException $err) {
                die('ERROR: Could not connect '.$err->getMessage()).'<br>';
            }
        
        }
    }
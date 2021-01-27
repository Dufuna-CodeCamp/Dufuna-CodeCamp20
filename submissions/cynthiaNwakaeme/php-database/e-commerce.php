<?php

require_once("connection.php");

/* 1. CREATE DATABASE */
try{
    $drop_db = "DROP DATABASE IF EXISTS taries_empire";
    $sql_db = "CREATE DATABASE taries_empire";
        $pdo->exec($drop_db);
        $pdo->exec($sql_db);
        echo "Database created successfully"."<br>";

}catch (PDOException $err) {
    die("ERROR: Could not execute .$sql_db"  .$err->getMessage()) ."<br>";
}


/* 2. CREATE TABLE */ 

try {
    $use_db = "USE taries_empire";
    $drop_table ="DROP TABLE IF EXISTS customers";
    $sql_table = "CREATE TABLE customers(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        full_name VARCHAR(100) NOT NULL,
        email_address VARCHAR(70) NOT NULL,
        created_at DATETIME NOT NULL
    )";

    $pdo->exec($use_db);
    $pdo->exec($drop_table);
    $pdo->exec($sql_table);
    echo "Table created successfully."."<br>";
} catch (PDOException $err) {
    die("ERROR: Could not execute $sql.".$err->getMessage())."<br>";
}


/* 3. INSERT RECORDS TO TABLE */ 

try{
    $sql_insert = "INSERT INTO customers(full_name, email_address, created_at) VALUES
        ('Darlyntina Hills', 'darlynhills@talk2me.com', now()),
        ('Cynthia Gabby', 'cynthianwakaeme@gmail.com', now()),
        ('Jennifer Taylor', 'taylor@example.com', now()),
        ('Juliet Hillstone', 'juleshillstone@emal.com', now()),
        ('Vera Sturat', 'littlesturat@portal.records.edu', now()),
        ('Stella Rich', 'ella@freeze.com', now()),
        ('Jackson Adams', 'jacksonadams@portal.edu.com', now())";

    $pdo->exec($sql_insert);
    echo "Records inserted successfully"."<br>";
}catch (PDOException $err) {
        die("ERROR: Could not execute .$sql_insert .".$err->getMessage());
}


unset($pdo);
<?php

session_start();
//$user_identity = $_SESSION['sess_id'];

#SetUp Connection
$usernameDB = "dufuna";//database username
$passwordDB = "dufuna12345";//database password

try {
    $pdo = new PDO("mysql:host=localhost", $usernameDB, $passwordDB);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected Successfully. Host info: " . $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")) . "<br>";

} catch (PDOException $e) {
    die ("ERROR: Could not connect. " . $e->getMessage()) . "<br>";
}

#Create Database
try {
    $sql = "CREATE DATABASE IF NOT EXISTS dufuna";
    $pdo->exec($sql);
    echo "Database Created Successfully! <br>";
    $sql = "USE dufuna";
    $pdo->exec($sql);
    echo "Using Database: dufuna <br>";

} catch (PDOException $e) {
    die ("ERROR: Could not create database $sql " . $e->getMessage()) . "<br>";
}

#Create Table
try {
    $sql = "CREATE TABLE IF NOT EXISTS customers (
        id int not null auto_increment,
        full_name varchar(50) not null,
        email varchar(50) not null,
        created_at DATETIME,
        primary key(id)
        )";
    $pdo->exec($sql);
    echo "Table Created Successfully! <br>";

} catch (PDOException $e) {
    die ("ERROR: Could not create table $sql " . $e->getMessage()) . "<br>";
}

#Insert into Table
try {
    $sql = "INSERT INTO customers(full_name, email, created_at)
    VALUES('Emmanuel Idiaghe', 'emmanuelidiaghe@gmail.com', NOW()),
    ('Samuel Akintola', 'samuelakintola@gmail.com', NOW()),
    ('Abubakar Salami', 'abubakasalam@yahoo.com', NOW()),
    ('Israel Temala', 'israeltemala@gmail.com', NOW()),
    ('Valentino Ekhasomi', 'valentinoekhasomi@gmail.com', NOW()),
    ('Uche Ogochuckwu', 'ucheogoch@gmail.com', NOW()),
    ('Desmond Peterson', 'desmondpeterson@gmail.com', NOW()),
    ('John Ehigiator', 'johnehigiator@gmail.com', NOW()),
    ('Nancy Pelosi', 'nancypelosi@gov.ng', NOW()),
    ('Bernie Sanders', 'berniesanders@yahoo.co.uk', NOW())
    ";
    $pdo->exec($sql);

    echo "Records Inserted Successfully! <hr><br>";

} catch (PDOException $e) {
    die ("ERROR: Could not insert into table $sql " . $e->getMessage()) . "<br>";
}

try {
    $sql = "SELECT * from customers";
    $result = $pdo->query($sql);
    if ($result->rowCount() > 0) {
        echo "<table style= 'border: 1px solid black'>";
        echo "<tr>";
            echo "<th style= 'border: 1px solid black'>S/N</th>";
            echo "<th style= 'border: 1px solid black'>Full Name</th>";
            echo "<th style= 'border: 1px solid black'>Email Address</th>";
            echo "<th style= 'border: 1px solid black'>Created At</th>";
            echo "<th style= 'border: 1px solid black'>Actions</th>";
        echo "</tr>";

        while ($row = $result->fetch()) {
            echo "<tr>";
                echo "<td style= 'border: 1px solid black'>" . $row['id'] . "</td>";
                echo "<td style= 'border: 1px solid black'>" . $row['full_name'] . "</td>";
                echo "<td style= 'border: 1px solid black'>" . $row['email'] . "</td>";
                echo "<td style= 'border: 1px solid black'>" . $row['created_at'] . "</td>";
                echo "<td style= 'border: 1px solid black'>" . "<button style= 'color: black; background-color: #DAF943; border-radius: 20%; margin-left: 4px;'>View</button>" . "</td>";
                echo "<tr>";
        }
        echo "</table";
        unset($result);
    }
    else echo "No record found!";

} catch (PDOException $e) {
    echo "Error : ".$e->getMessage();
}

?>
<?php
include('connect.php');

        try {
            $sql = "SELECT * FROM customers";
            $results = $pdo->query($sql);

            setcookie('customers', $results, time() + 3600,"/", "", false);
            return $results;
        } catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    
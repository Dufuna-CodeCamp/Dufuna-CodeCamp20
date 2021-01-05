<?php
include('connect.php');

         class queryDatabase {

     function setData($name, $value, $expire)
    {
        setcookie($name, serialize($value), $expire);
    }
    
       function getAllCustomers()
    {
        try {
            $sql = "SELECT * FROM customers";
            $stmt  = $this->connect()->query($sql);
            $results = $stmt->fetchAll();

            $this->setData('customers', $results, time() + 3600);
            return $results;
        } catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }
}
?>
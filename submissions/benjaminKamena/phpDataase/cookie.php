<?php
include('connected.php');

class dataaseQuery {
    function setData($name, $value, $expire){
        setcookie($name, serialize($value), $expire);
    }
    function getCustomer(){
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
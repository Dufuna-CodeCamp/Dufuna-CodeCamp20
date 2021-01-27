<?php
require_once("connection.php");
class Customer extends Dbconnect {
    public function allCustomers() {
        try {
            $sql = "SELECT * FROM customers";
            $result = $this->connect()->query($sql);
            $data = $result->fetchAll();
            setcookie("customers", json_encode($data), time() + 20);
            return $data;
        } catch (PDOExeption $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }    
}

?>
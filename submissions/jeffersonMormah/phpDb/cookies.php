<?php
require_once("connected.php");

class DbQuery extends Connected
{

    public function storeData($name, $value, $expire)
    {
        setcookie($name, serialize($value), $expire);
    }

    public function removeData($name)
    {
        setcookie($name, "", time() - 60);
    }

    public function getAllCustomers()
    {
        try {
            $sql = "SELECT * FROM customerz";
            $stmt  = $this->connect()->query($sql);
            $results = $stmt->fetchAll();

            // store in cookie
            $this->storeData('customerz', $results, time() + 3600);
            return $results;
        } catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }

}; 
?> 
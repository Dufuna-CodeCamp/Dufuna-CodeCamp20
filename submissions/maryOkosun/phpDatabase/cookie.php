<?php

include("connection.php");


class queryEcommerce{
    function setData($name, $value, $expire{
        setcookie($name, serialize($value), $expire);
    }
    function customersDetails(){
        try{
            $sql = "SELECT * FROM customers";
            $stmt = $this->connect()->query($sql);
            $results = $stmt->fetchAll();
            $this->setData('customers',$results, time() + 3600);
            return $results;
         }
        catch(PDOException $e){
            die("ERROR:Could not connect $sql." . $e->getMessage());
        } 
    }    
}
?>
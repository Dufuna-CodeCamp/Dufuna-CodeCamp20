<?php
require_once("connected.php");

class DbQuery extends Connected
{

     function storeData($name, $value, $expire)
    {
        setcookie($name, serialize($value), $expire);
    }

    function removeData($name)
    {
        setcookie($name, "", time() - 60);
    }

    function getAllOrderings()
    {
        try {
            $sql = "SELECT ordering.quantity, ordering.unit_price, ordering.total_amount, orders.order_date, orders.id, customerz.street_address, customerz.city, customerz.state_name, customerz.country, products.product_name
             FROM ordering 
             LEFT JOIN orders ON orders.id = orderings.order_id
             LEFT JOIN customerz ON orders.customerz_id = customerz.id
             LEFT JOIN products ON product.id = orderings.product_id
             WHERE orders.customeerz_id = '$id'";
            $stmt  = $this->connect()->query($sql);
            $orders = $stmt->fetchAll();

            $this->storeData('ordering', $orders, time() + 3600);
            return $orders;
        } catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }

};
?> 
<?php
include('connect.php');

class queryDatabase {
    function setData($name, $value, $expire){
        setcookie($name, serialize($value), $expire);
    }
    function getAllCustomers(){
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
    function getOrders($id){
        try {

            $sql = 'SELECT products.name,customers.street_address, customers.city,customers.state, 
            customers.country,order_items.quantity, order_items.unit_price, 
            order_items.total_amount, orders.order_date, orders.id 
            FROM order_items 
            LEFT JOIN orders ON orders.id = order_items.order_id
            LEFT JOIN customers on orders.customer_id = customers.id
            LEFT JOIN products ON products.id = order_items.product_id 
            WHERE orders.customer_id = customers.id';

            $stmt  = $this->connect()->prepare($sql);
            $stmt->execute([$id]);
            $orders = $stmt->fetchAll();

            $this->storeData('orders', $orders, time() + 3600);
            return $orders;
        } catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }
}
?>
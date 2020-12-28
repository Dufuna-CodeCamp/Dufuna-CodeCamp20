<?php
include('dbh.class.php');

// class responsible for querying the Db
class QueryDb extends Dbh
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
            $sql = "SELECT * FROM customers";
            $stmt  = $this->connect()->query($sql);
            $results = $stmt->fetchAll();

            // store in cookie
            $this->storeData('customers', $results, time() + 3600);
            return $results;
        } catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }

    public function getOrders($id)
    {
        try {

            $sql = 'SELECT items.quantity, items.unit_price,
            items.total_amount, orders.made_at, orders.id, 
            addresses.street_address, addresses.city,addresses.state_name, 
            addresses.country, products.product_name 
            FROM items 
            LEFT JOIN orders ON orders.id = items.order_id
            LEFT JOIN addresses on orders.customer_id = addresses.customer_id
            LEFT JOIN products ON products.id = items.product_id 
            WHERE orders.customer_id = ?';

            $stmt  = $this->connect()->prepare($sql);
            $stmt->execute([$id]);
            $orders = $stmt->fetchAll();

            $this->storeData('orders', $orders, time() + 3600);
            return $orders;
        } catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }
};
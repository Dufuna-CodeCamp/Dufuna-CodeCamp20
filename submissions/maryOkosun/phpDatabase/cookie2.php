<?php

include('connection.php');

if( isset($_GET['id'])) {
    $id =  $_GET['id'];
}

try{
    $sql = "SELECT products.product_name,order_items.unit_prices,order_items.quantity,order_items.total_amount,
    order.created_at,orders.order_id,addresses.country,addresses.state,addresses.city,addresses.street_address 
    FROM order_items
    LEFT JOIN orders ON orders.order_id = order_items.order_id
    LEFT JOIN products ON products.product_id = order_items.product_id
    LEFT JOIN addresses ON orders.customer_id = addresses.customer_id
    WHERE orders.customer_id ='$id' ";
    $stmt = $this->connect()->query($sql);
    $results = $stmt->fetchAll();
    
    setcookie("results",  serialize($results), time() + 3600 ); 
    }
catch(PDOException $e){
    die("ERROR:Could not connect $sql." . $e->getMessage());
    } 
?>
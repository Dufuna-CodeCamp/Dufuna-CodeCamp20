<?php
include('connect.php');

if(isset($_GET['customer_id'])){
 $customer_id =  $_GET['customer_id'];
}
$orders = isset($_COOKIE['orders'])? unserialize($_COOKIE['orders']) : $queryDatabase->getAllOrders();

try{
	if (count($orders) > 0) {
        echo "<table>";
        echo "<tr>";
        echo "<td>ID</td>";
        echo "<td>Product Name</td>";
        echo "<td>Unit Price</td>";
        echo "<td>Quantity</td>";
        echo "<td>Total Price</td>";
        echo "<td>Order Date</td>";
        echo "<td>Customer Location</td>";
        echo "</tr>";
    foreach ($orders as $row){
		echo "<tr>";
        echo "<td>" . $row['order_items_id'] . "</td>";
        echo "<td>" . $row['product_name'] . "</td>";
        echo "<td>" . $row['unit_price'] . "</td>";
        echo "<td>" . $row['order_item_quantity'] . "</td>";
        echo "<td>" . $row['total_amount'] . "</td>";
        echo "<td>" . $row['order_date'] . "</td>";
        echo "<td>" . $row['customer_street_address'] . ", " . $row['customer_city'] . ", " . $row['customer_state'] . ", "  . $row['customer_country'] ."</td>";
        echo "</tr>";
		};
        echo "</table>";
        unset($orders);
		}else {
			echo 'No match';
			}
}catch (PDOException $e) {
	die("ERROR: Could not execute $sql. " . $e->getMessage());
	}
?>
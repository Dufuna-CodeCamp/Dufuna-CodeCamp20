<?php

include('connected.php');
$id =  $_GET['id'];
try {
	$sql= "SELECT  order_items.unit_price, order_items.quantity, order_items.total_amount, 
	orders.order_created_at, orders.id, products.product_name, addresses.street_address, addresses.city, 
	addresses.state, addresses.country
    FROM order_items 
    LEFT JOIN orders ON orders.id = order_items.order_id
    LEFT JOIN products ON products.id = order_items.product_id
    LEFT JOIN addresses ON orders.customer_orders = addresses.customer_id
    WHERE orders.customer_orders = '$id'";

    $stmt = $this->conn()->query($sql);
    $result = $stmt->fetchAll();
	setcookie("view", serialize($result), time()+7200, "/");
	return $result;
	
	$result = isset($_COOKIE['view']) ? unserialize($_COOKIE['view']) : $view->getAllCustomers($id);
	
	if (count($results) > 0) {
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
    foreach ($results as $row){
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
        unset($results);
		}else {
			echo 'No match';
			}
			}catch (PDOException $e) {
	die("ERROR: Could not execute $sql. " . $e->getMessage());
	};
?>
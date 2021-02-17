<?php

include('connected.php');
$id =  $_GET['id'];

function view($id){
	try{
		$sql = "SELECT order_items.quantity, order_items.unit_price, 
            order_items.total_amount, orders.order_date, orders.id,customers.street_address, customers.city,customers.state, 
            customers.country,products.name 
            FROM order_items 
            LEFT JOIN orders ON orders.id = order_items.order_id
            LEFT JOIN customers on orders.customer_id = customers.id
            LEFT JOIN products ON products.id = order_items.product_id 
            WHERE orders.customer_id = '$id' ";
            $stmt = $pdo->query($sql);
            $orders = $stmt->fetchAll();
            setcookie("orders",  serialize($orders), time() + 3600 );
        }catch (PDOException $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    };

    if(isset($_COOKIE['orders'])){
        $orders =  unserialize($_COOKIE['orders']);
} else{
	$new_data = $order -> view($id);
	};

try{
    if (count($new_data) > 0) {
		echo "<table>";
		echo "<tr>";
		echo "<td>ID</td>";
		echo "<td>Product Name</td>";
        echo "<td>Quantity</td>";
        echo "<td>Unit Price</td>";
        echo "<td>Total Price</td>";
        echo "<td>Order Date</td>";
        echo "<td>Customer Location</td>";
        echo "</tr>";
     foreach ($new_data as $row){
		echo "<tr>";
        echo "<td>" . $row['order_items_id'] . "</td>";
        echo "<td>" . $row['product_name'] . "</td>";
        echo "<td>" . $row['unit_price'] . "</td>";
        echo "<td>" . $row['order_item_quantity'] . "</td>";
        echo "<td>" . $row['total_amount'] . "</td>";
        echo "<td>" . $row['order_date'] . "</td>";
        echo "<td>" . $row['customer_street_address'] . ", " . $row['customer_city'] . ", " . $row['customer_state'] . ", "  . $row['customer_country'] ."</td>";
        echo "</tr>";
    }
    echo "</table>";
    unset($new_data);
} else {
    echo 'No match';
};
} catch (PDOException $e) {
    die("ERROR: Could not execute $sql. " . $e->getMessage());
};
?>
<?php

include('connection.php');
 if( isset($_GET['id']) && strlen($_GET['id']) > 0 ) {
 $id =  $_GET['id'];
}

try{
    $sql = "SELECT orders.id, products.name, order_items.unit_price, order_items.quantity, order_items.total_amount, order_items.created_at,
    customers_addresses.street, customers_addresses.city, customers_addresses.state, customers_addresses.country
            FROM order_items 
            LEFT JOIN orders ON orders.id = order_items.order_id
            LEFT JOIN customers on orders.customer_id = customers.id
            LEFT JOIN products ON products.id = order_items.product_id 
            WHERE orders.customer_id = '$id' ";
            $stmt = $pdo->query($sql);
            $orders = $stmt->fetchAll();
            setcookie("orders",  serialize($orders), time() + 3600 );


    if( isset($_COOKIE['orders']) ) {
       $orders =  unserialize($_COOKIE['orders']);
        }

    if (count($orders) > 0) {
        echo "<table>";
            echo "<tr>";
                echo "<td>S/N</td>";
                echo "<td>Product Name</td>";
                echo "<td>Unit Price</td>";
                echo "<td>Quantity</td>";
                echo "<td>Total Price</td>";
                echo "<td>Created Date</td>";
                echo "<td>Customer Location</td>";
        echo "</tr>";
    foreach ($orders as $row) {
        echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['unit_price'] . "</td>";
            echo "<td>" . $row['quantity'] . "</td>";
            echo "<td>" . $row['total_amount'] . "</td>";
            echo "<td>" . $row['created_at'] . "</td>";
            echo "<td>" . $row['street_address'] . ", " . $row['city'] . ", " . $row['state'] . ", "  . $row['country'] ."</td>";
        echo "</tr>";
    };
        echo "</table>";
        unset($orders);
} else {
    echo 'No records matching your query were found';
}

}catch (PDOException $e) {
    die("ERROR: Could not execute $sql. " . $e->getMessage());
}
?>
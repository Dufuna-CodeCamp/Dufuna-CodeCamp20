<?php

include('connect.php');
 if( isset($_GET['id']) && strlen($_GET['id']) > 0 ) {
 $id =  $_GET['id'];
}

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

            //set cookies with different method
            // setcookie("orders",  json_encode($orders), time() + 3600);
             setcookie("orders",  serialize($orders), time() + 3600 );
            // setcookie("orders",  explode($orders), time() + 3600); need two parameter


    if( isset($_COOKIE['orders']) ) {
     // $orders = json_decode (stripslashes($_COOKIE['orders']), true );
       $orders =  unserialize($_COOKIE['orders']);
        // $orders =  implode($_COOKIE['orders']);
    }
    if (count($orders) > 0) {
        echo "<table>";
            echo "<tr>";
                echo "<td>S/N</td>";
                echo "<td>Product Name</td>";
                echo "<td>Unit Price</td>";
                echo "<td>Quantity</td>";
                echo "<td>Total Price</td>";
                echo "<td>Order Date</td>";
                echo "<td>Customer Location</td>";
        echo "</tr>";
    foreach ($orders as $row) {
        echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['unit_price'] . "</td>";
            echo "<td>" . $row['quantity'] . "</td>";
            echo "<td>" . $row['total_amount'] . "</td>";
            echo "<td>" . $row['order_date'] . "</td>";
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
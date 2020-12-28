<?php

include('./classes/queryDb.class.php');

if (isset($_GET['id'])) {

     $id = $_GET['id'];

    // an instance of queryDb class to call the getAllUsers method;
    $queryDb = new QueryDb();

    $orders = isset($_COOKIE['orders']) ? unserialize($_COOKIE['orders']) : $queryDb->getOrders($id);
} else echo 'unknown customer';

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
            echo "<td>" . $row['product_name'] . "</td>";
            echo "<td>" . $row['unit_price'] . "</td>";
            echo "<td>" . $row['quantity'] . "</td>";
            echo "<td>" . $row['total_amount'] . "</td>";
            echo "<td>" . $row['made_at'] . "</td>";
            echo "<td>" . $row['street_address'] . ", " . $row['city'] . ", " . $row['state_name'] . ", "  . $row['country'] ."</td>";
        echo "</tr>";
    };
    echo "</table>";
    unset($orders);
} else {
    echo 'No records matching your query were found';
};
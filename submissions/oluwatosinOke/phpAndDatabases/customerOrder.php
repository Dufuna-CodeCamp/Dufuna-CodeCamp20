<?php
require_once("connection.php");
try {
    $sql=   "SELECT  other_items.unit_price, other_items.quantity, other_items.total_amount, 
                orders.ordercreated_at, orders.id, products.product_name, customers_address.street_address,
                customers_address.city, customers_address.state, customers_address.country
            FROM other_items
            LEFT JOIN orders ON orders.id = other_items.order_id
            LEFT JOIN products ON products.id = other_items.product_id
            LEFT JOIN customers_address ON orders.customer_orders = customers_address.customer_id";
    $result= $pdo->query($sql);
    if ($result->rowCount()>0){
        echo "<table style='border: solid 1px black'>";
            echo "<tr >";
                echo "<th style='border: solid 1px black'> S/N </th>";
                echo "<th style='border: solid 1px black'> Product Name </th>";
                echo "<th style='border: solid 1px black'> Order Unit Price </th>";
                echo "<th style='border: solid 1px black'> Order Quantity </th>";
                echo "<th style='border: solid 1px black'> Order Total Price </th>";
                echo "<th style='border: solid 1px black'> Created Date </th>";
                echo "<th style='border: solid 1px black'> Customer Location </th>";
            echo "</tr>";
            while ($row=$result->fetch()){
                echo "<tr>";
                    echo "<td style='border: solid 1px black'>" . $row['id'] . "</td>";
                    echo "<td style='border: solid 1px black'>" . $row['product_name'] . "</td>";
                    echo "<td style='border: solid 1px black'>" . $row['unit_price'] . "</td>";
                    echo "<td style='border: solid 1px black'>" . $row['quantity'] . "</td>";
                    echo "<td style='border: solid 1px black'>" . $row['total_amount'] . "</td>";
                    echo "<td style='border: solid 1px black'>" . $row['ordercreated_at'] . "</td>";
                    echo "<td style='border: solid 1px black'>" . $row['street_address'] .", " . $row['city'] . ", " . $row['state'] .", " . $row['country'] . "</td>";
                echo "</tr>";
            }
        echo "</table>";
        //free result set
        unset($result);
    }else{
        echo "no Records matching your Query were found";
    }
}catch (PDOException $e) {
    die ('could not execute ' . $sql . $e->getMessage());
}
// close connection
unset($pdo);
?>   
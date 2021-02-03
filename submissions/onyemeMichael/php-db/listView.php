<?php

    require_once('connection.php');
    $id = $_GET['id'];

    class Show extends  Connect {
        public function list($id) {
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

                // setting up the cookie to save the result gotten from the databse
                    setcookie("view", serialize($result), time()+7200, "/");
                    return $result;
                } catch (PDOException $e) {
                    die ('could not execute ' . $sql . $e->getMessage());
                }
        }
    }
    
    $show = new Show();
    $result = isset($_COOKIE['view']) ? unserialize($_COOKIE['view']) : $view->list($id);

    if(count($result) > 0) {
        echo "<table>";
            echo "<tr>";
                echo "<th> S/N </th>";
                echo "<th> Product Name </th>";
                echo "<th> Order Unit Price </th>";
                echo "<th> Order Quantity </th>";
                echo "<th> Order Total Price </th>";
                echo "<th> Created Date </th>";
                echo "<th> Customer Location </th>";
            echo "</tr>";
            foreach($result as $row) {
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['product_name'] . "</td>";
                    echo "<td>" . $row['unit_price'] . "</td>";
                    echo "<td>" . $row['quantity'] . "</td>";
                    echo "<td>" . $row['total_amount'] . "</td>";
                    echo "<td>" . $row['order_created_at'] . "</td>";
                    echo "<td>" . $row['street_address'] .", " . $row['city'] . ", " . $row['state'] .", " . $row['country'] . "</td>";
                echo "</tr>";
            }
        echo "</table>";
        unset($result);
    }   else {
        echo "could not execute query";
    }

?>
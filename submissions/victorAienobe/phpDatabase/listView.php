<?php

    include_once('connection.php');
    $id = $_GET['id'];

    class View extends  Connect {
        public function list($id) {
            try {
                //$sql = "SELECT * FROM orders";
               $sql= "SELECT orders.product_name, orders.order_unit_price,orders.order_quantity,
               orders.order_total_price, orders.created_date, orders.customer_location, customer_details.id
                FROM orders LEFT JOIN customer_details ON orders.customer_id = customer_details.id
                WHERE orders.customer_id = '$id'";
               
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
    
    $view = new View();
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
                    echo "<td>" . $row['order_unit_price'] . "</td>";
                    echo "<td>" . $row['order_quantity'] . "</td>";
                    echo "<td>" . $row['order_total_price'] . "</td>";
                    echo "<td>" . $row['created_date'] . "</td>";
                    echo "<td>" . $row['customer_location'] . "</td>";
                echo "</tr>";
            }
        echo "</table>";
        unset($result);
    }   else {
        echo "could not execute query";
    }

?>
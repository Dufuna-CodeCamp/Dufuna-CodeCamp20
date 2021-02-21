<?php
require_once('connection.php');

/* ACCESSING E-COMMERCE DATABASE AND QUERYING THE DATABASE*/
$_id = $_GET['id'];

echo "<h2> List of Orders made by at Taries Empire </h2>";

class ClientOrder extends Connection
{
    public function order($_id)
    {
        try {

            $sql = "SELECT 
                    customers.customer_id, products.name,
                    order_items.unit_price,order_items.quantity, order_items.total_amount, orders.order_created_at,
                    customer_contacts.street, customer_contacts.city, customer_contacts.state, customer_contacts.country
                FROM order_items 
                LEFT JOIN orders ON orders.order_id = order_items.order_id
                LEFT JOIN products ON order_items.item_id = products.product_id
                LEFT JOIN customers ON orders.clients = customers.customer_id
                LEFT JOIN customer_contacts ON customer_contacts.customer_id = customers.customer_id
                WHERE customers.customer_id = '$_id'";

                $stmt = $this->connect()->query($sql);
                $result = $stmt->fetchAll();

            setcookie('orders', serialize($result), time() + (86400 * 30), "/", "", false); //60sec *60mins *24hours/day => 86400 = 1 day

            return $result;
        } catch (PDOException $err) {
            die("ERROR: Could not execute $sql. " . $err->getMessage());
        }
    }
}
// To display results on the browser as a table, we convert the result to array/object.

$_order = new ClientOrder();
$result = isset($_COOKIE['orders']) ? unserialize($_COOKIE['orders']) : $_order->order($_id);

    if(count($result) > 0){
        echo"<table>";
            echo"<tr>";
                echo "<th> S/N </th>";
                echo "<th> Product Name </th>";
                echo "<th> Unit Price </th>";
                echo "<th> Quantity </th>";
                echo "<th> Total Price </th>";
                echo "<th> Order Date </th>";
                echo "<th> Customer Location </th>";
            echo"</tr>";
        // Loop through to access records (Objects in an array i.e datatype <=> JSON formatt)
        foreach ($result as $row) {
            echo "<tr>";
                echo "<td>" . $row['customer_id'] . "</td>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['unit_price'] . "</td>";
                echo "<td>" . $row['quantity'] . "</td>";
                echo "<td>" . $row['total_amount'] . "</td>";
                echo "<td>" . $row['order_created_at'] . "</td>";
                echo "<td>" . $row['street'] . $row['city'] . $row['state'] . $row['country'] . "</td>";
            echo "</tr>";
        }
        echo"<table>";

        // Close/Free result set
        unset($result);
    }else{
        echo 'No records matching your query were found.';
    }


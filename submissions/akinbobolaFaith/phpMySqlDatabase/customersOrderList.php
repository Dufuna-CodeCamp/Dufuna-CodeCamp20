<?php
require_once("connection.php");
$id = $_GET['id'];

class Orders extends Dbconnect{
    public function listView($id) {
        try {
            $sql = "SELECT orders.id, products.name, order_items.unit_price, order_items.quantity, order_items.total_amount, order_items.created_at,
            customers_addresses.street, customers_addresses.city, customers_addresses.state, customers_addresses.country FROM products
            LEFT JOIN order_items ON products.id = order_items.products_id 
            LEFT JOIN orders ON order_items.order_id = orders.id
            LEFT JOIN customers ON orders.customers_id = customers.id
            LEFT JOIN customers_addresses ON customers.id = customers_addresses.customers_id
            WHERE customers_addresses.customers_id = '$id'";

            $result = $this->connect()->query($sql);
            $data = $result->fetchAll();

            setcookie("orders", json_encode($data), time() + 3600);
            return $data;
        } catch (PDOExeption $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }
}

$orders = new Orders();
if (isset($_COOKIE["orders"])) {
    $data = json_decode($_COOKIE["orders"], true);
} else {
    $data = $orders->listView($id);
}

try {
    if(count($data) > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Product Name</th>";
                echo "<th>Order Unit Price</th>";
                echo "<th>Order Quantity</th>";
                echo "<th>Order Total Price</th>";
                echo "<th>Created Date</th>";
                echo "<th>Customer Location</th>";
            echo "</tr>";
    
            foreach($data as $row){
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['name']  ." ". $row['lastname'] . "</td>";
                    echo "<td>" . $row['unit_price'] . "</td>";
                    echo "<td>" . $row['quantity'] . "</td>";
                    echo "<td>" . $row['total_amount'] . "</td>";
                    echo "<td>" . $row['created_at'] . "</td>";
                    echo "<td>" . $row['street']  .", ". $row['city'] . ", ". $row['state'] . ", ". $row['country'] . "</td>";
                echo "</tr>";
            }
        echo "</table>";
    
        unset($data);

    } else {
        echo "No records matching your query were found";
    }

} catch (PDOExeption $e) {
    die("ERROR: Could not execute $sql. " . $e->getMessage());
}
?>

<?php
include('connection.php');

if (isset($_GET['id'])){
    $id = $_GET['id'];
}
$sql = "SELECT products.name, order_items.unit_price, order_items.quantity, order_items.total_amount,
orders.created_at, customers_addresses.street_address, customers_addresses.city, orders.customer_id,
customers_addresses.state, customers_addresses.country 
FROM order_items 
LEFT JOIN orders ON order_items.order_id = orders.id
LEFT JOIN customers ON orders.customer_id = customers.id
LEFT JOIN customers_addresses ON customers_addresses.customer_id = customers.id
LEFT JOIN products ON order_items.product_id = products.id
WHERE orders.customer_id = '$id' ";
$allData = $pdo->query($sql)->fetchAll();
setcookie('orders', serialize($allData), time() + 3600);
if(isset($_COOKIE['orders'])){
    $allData = unserialize($_COOKIE['orders']);
};

try{
    if(count($allData) > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Product Name</th>";
                echo "<th>Unit Price </th>";
                echo "<th>Quantity </th>";
                echo "<th>Total Price </th>";
                echo "<th>Order Date </th>";
                echo "<th>Customer Location</th>";
            echo "</tr>";
        foreach ($allData as $row){
            echo "<tr>";
                echo "<td>" . $row['customer_id'] . "</td>";
                echo "<td>" . $row['name'] .  "</td>";
                echo "<td>" . $row['unit_price'] . "</td>";
                echo "<td>" . $row['quantity'] . "</td>";
                echo "<td>" . $row['total_amount'] . "</td>";
                echo "<td>" . $row['order_date'] . "</td>";
                echo "<td>" . $row['street_address'] . " " . $row['city'] . " " . $row['state'] ." " . $row['country'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        unset($allData);
    }else{
        echo "No records matching the row was found";
    }
}catch(PDOException $e){
    die("ERROR: Could not execute the query $sql." .$e ->getMessage());
}
unset($pdo);

?>
<?php
require_once('connection.php');
    try{
    global $pdo;
    $sql = "SELECT single_orders.unit_price,
    single_orders.quantity, 
    single_orders.total_amount,
    orders.id,
    orders.created_at,
    products_details.product_name,
    customers_information.street_address,
    customers_information.city,
    customers_information.state,
    customers_information.country
    FROM single_orders
    LEFT JOIN orders ON orders.id = single_orders.order_id
    LEFT JOIN products_details ON products_details.id = single_orders.product_id
    LEFT JOIN customers_information ON orders.customers_orders = customers_information.customers_id";
    $result = $pdo->query($sql);
setcookie("customers_orders",time() +3600, "/");
if(isset($_COOKIE["customers_orders"])){
if($result ->rowCount() > 0){
echo "<table>";
    echo "<tr>";
        echo "<th>ID</th>";
        echo "<th>Product_Name</th>";
        echo "<th>Unit_Price</th>";
        echo "<th>Quantity</th>";
        echo "<th>Total_Price</th>";
        echo "<th>Created_Date</th>";
        echo "<th>Address</th>";
        echo "</tr>";
    while($row = $result->fetch()){
    echo "<tr>";
        echo "<td>". $row['id']. "</td>";
        echo "<td>". $row['product_name']. "</td>";
        echo "<td>". $row['unit_price']. "</td>";
        echo "<td>". $row['quantity']."</td>";
        echo "<td>". $row['total_amount']. "</td>";
        echo "<td>". $row['created_at']. " "."</td>" ." " ;
        echo "<td>"."  ". $row['street_address']." ". $row['city']. " ".$row['state'].$row['country']. "</td>";
        echo "</tr>";
    }
    echo "</table>";

unset($result);

} else{
echo "record not found";
}
} 
} 
 catch(PDOException $e){
     die("ERROR: could not execute $sql.". $e->getMessage());
 }
unset($pdo);
?>
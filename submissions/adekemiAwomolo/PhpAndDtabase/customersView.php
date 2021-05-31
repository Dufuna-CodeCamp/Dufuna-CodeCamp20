<?php
require_once('connection.php');

$info;
$notSet = !(isset($_COOKIE["orders"]));
function load() {
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
    LEFT JOIN customers_information ON orders.customers_id = customers_information.customers_id";
    $result = $pdo->query($sql);
    setcookie("orders", serialize($result), time() + 0, "/");
    return $result;
    }
    
function display() {
    global $info;
    if(count($info) > 0){
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
        foreach ($info as $value){
            echo "<tr>";
            echo "<td>". $value['id']. "</td>";
            echo "<td>". $value['product_name']. "</td>";
            echo "<td>". $value['unit_price']. "</td>";
            echo "<td>". $value['quantity']."</td>";
            echo "<td>". $value['total_amount']. "</td>";
            echo "<td>". $value['created_at'] . "</td>" ;
            echo "<td>" . $value['street_address']. $value['city']. $value['state'].$value['country']. "</td>";
            echo "</tr>";
        }
        echo "</table>";
        unset($result);} 
    else{  
        echo "record not found";
    }
} 

try {
if ($notSet) $info = load(); //Fetch query and set cookie
else $info = unserialize($_COOKIE["orders"]); //Fetch cookie 
display();
}
catch(PDOException $e) {
die ("ERROR: $sql " . $e->getMessage()) . "<br>";
}

unset($pdo);
?>
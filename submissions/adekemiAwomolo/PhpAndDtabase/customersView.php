<?php
require_once('connection.php');

    try{
    global $pdo;
    $sql = "SELECT  * FROM orders";
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
            echo "<td>". $row['order_unit_price']. "</td>";
            echo "<td>". $row['quantity']."</td>";
            echo "<td>". $row['order_total_price']. "</td>";
            echo "<td>". $row['created_date']. "</td>";
            echo "<td>". $row['customers_location_address']. $row['customers_location_city'].$row['customers_location_state'].$row['customers_location_country']. "</td>";
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











?>
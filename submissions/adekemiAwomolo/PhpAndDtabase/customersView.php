<?php
require_once('connection.php');

    try{
    global $pdo;
    $sql = "SELECT  orders.unit_price, orders.quantity, orders.total_price,ordered_time.created_at,ordered_time.id, 
    product_details.name,customers_address.street,customers_address.city,customers_address.state,customers_address.country
                    FROM orders
                     LEFT JOIN ordered_time ON ordered_time.id = orders.id
                    LEFT JOIN product_details ON product_details.id = orders.id
                    LEFT JOIN customers_address ON customers_address.id = orders.id
                ";
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
            echo "<td>". $row['name']. "</td>";
            echo "<td>". $row['unit_price']. "</td>";
            echo "<td>". $row['quantity']."</td>";
            echo "<td>". $row['total_price']. "</td>";
            echo "<td>". $row['created_at']. "</td>";
            echo "<td>". $row['street']." ". $row['city']. " ".$row['state'].$row['country']. "</td>";
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
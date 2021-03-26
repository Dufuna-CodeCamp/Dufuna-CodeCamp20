<?php

include("connection.php");
$id = $_GET['id'];

class queryList{
    function setData($name, $value, $expire){
        setcookie($name, serialize($value), $expire);
    }
    function list($id){
        try{
            $sql = "SELECT products.product_name,order_items.unit_prices,order_items.quantity,order_items.total_amount,
            order.created_at,orders.order_id,addresses.country,addresses.state,addresses.city,addresses.street_address 
            FROM order_items
            LEFT JOIN orders ON orders.order_id = order_items.order_id
            LEFT JOIN products ON products.product_id = order_items.product_id
            LEFT JOIN addresses ON orders.customer_id = addresses.customer_id
            WHERE orders.customer_id ='$id' ";
            $stmt = $this->connect()->query($sql);
            $result = $stmt->fetchAll();
            $this->setData('query',$result, time() + 3600);
            return $results;
         }
        catch(PDOException $e){
            die("ERROR:Could not connect $sql." . $e->getMessage());
        } 
    }    
}

$query = new queryList();
$result = isset($_COOKIE['query']) ? unserialize($_COOKIE['query']) : $query->list($id);

try{
    if($result->rowCount()>0){
        echo "<table>";
            echo"<tr>";
                echo "<th>S/N</th>";
                echo "<th>Product Name</th>";
                echo "<th>Order Unit Price</th>";
                echo "<th>Order Quantity</th>";
                echo "<th>Order Total Price</th>";
                echo "<th>Created Date</th>";
                echo "<th>Customer Location</th>";
            echo"</tr>";
        while($row = $result->fetch()){
            echo"<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['product_name'] . "</td>";
                echo "<td>" . $row['unit_prices'] . "</td>";
                echo "<td>" . $row['quantity'] . "</td>";
                echo "<td>" . $row['total_amount'] . "</td>";
                echo "<td>" . $row['created_at'] . "</td>";
                echo "<td>" . $row['street_address']."," . $row['city']."," . $row['state']."," . $row['country'] . "</td>";
            echo"</tr>";
        }
        echo "</table>";
        unset($result);
    }
    else{
        echo"No records matching your query were found";
    }
 }
 catch(PDOException $e){
     die("ERROR:Could not connect $sql." . $e->getMessage());
  }
  
  unset($pdo);
?>
<?php

include("cookie2.php");

if( isset($_COOKIE['results']) ) {
      $results =  unserialize($_COOKIE['results']);
   }

try{
    if($results->rowCount()>0){
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
        while($row = $results->fetch()){
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
        unset($results);
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
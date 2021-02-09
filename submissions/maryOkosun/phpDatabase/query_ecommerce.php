<?php
include("cookie.php");
$results = isset($_COOKIE['customers'])? unserialize($_COOKIE['customers']) : $queryEcommerce->customersDetails();

try{
    if($results->rowCount()>0){
        echo "<table>";
            echo"<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created At</th>";
                echo "<th>Actions</th>";
            echo"</tr>";
        while($row = $results->fetch()){
            echo"<tr>";
                echo "<td>" . $row['customer_id'] . "</td>";
                echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
                echo "<td>" . $row['email_address'] . "</td>";
                echo "<td>" . $row['created_at'] . "</td>";
                echo "<td>" . '<button><a href ="#">VIEW</a></button>' . "</td>";
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
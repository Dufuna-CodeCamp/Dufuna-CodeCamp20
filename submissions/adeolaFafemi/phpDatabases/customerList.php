<?php
include('connection.php');


if(isset($_COOKIE['customers'])){
   $allData = unserialize($_COOKIE['customers']);
 }else{
    $sql = "SELECT * FROM customers";
    $allData = $pdo->query($sql)->fetchAll();
    setcookie('customers', serialize($allData), time() + 3600);
 }
//  setcookie('customers',  '', time() -60);
// var_dump (serialize($allData));
// var_dump ($allData);

try{
    if(count($allData) > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address </th>";
                echo "<th>Created At </th>";
                echo "<th>Actions </th>";
            echo "</tr>";
        foreach ($allData as $row){
            echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
                echo "<td>" . $row['email_address'] . "</td>";
                echo "<td>" . $row['created_at'] . "</td>";
               echo "<td>" . '<button>View</button>' ."</td>";
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
<?php
include('cookie.php');

$results = isset($_COOKIE['customers'])? unserialize($_COOKIE['customers']) : $queryDatabase->getAllCustomers();

try{
    
    if(count($results) > 0){
        echo "<Table>";
            echo "<tr>";
                echo "<th>ID</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email</th>";
                echo "<th>Created At </th>";
                echo "<th>Actions </th>";
            echo "</tr>";
        foreach ($results as $row){
            echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
                echo "<td>" . $row['email_address'] . "</td>";
                echo "<td>" . $row['created_at'] . "</td>";
                echo "<td>" . '<button><a href ="customersOrderList.php?id='. $row['id'] . '"> Veiw </a></button>' ."</td>";
             echo "</tr>";
        }
        echo "</table>";
        unset($results);
    }else{
        echo "No records matching your query were found";
    }
}catch(PDOException $e){
    die("ERROR: Could not excute $sql." .$e->getMessage());
}
unset($pdo);

?>

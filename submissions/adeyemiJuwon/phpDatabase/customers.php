<?php
  include('cookies.php');
  
  if(!isset($_COOKIE['customers'])) {
  echo "Cookie named '" .'customers' . "' is not set!";
} else {
  echo "Cookie '" . 'customers' . "' is set!<br>";
  echo "Value is: " . $_COOKIE['customers'];
}
try{
    
    if($results ->rowCount() > 0){
        echo "<Table>";
            echo "<tr>";
                echo "<th>ID</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email</th>";
                echo "<th>Create At </th>";
                echo "<th>Actions </th>";
            echo "</tr>";
            while($row = $results -> fetch()){
            echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
                echo "<td>" . $row['email_address'] . "</td>";
                echo "<td>" . $row['create_at'] . "</td>";
                echo "<td>" . '<button> <a href ="#"> Veiw </a> </button>' ."</td>";
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

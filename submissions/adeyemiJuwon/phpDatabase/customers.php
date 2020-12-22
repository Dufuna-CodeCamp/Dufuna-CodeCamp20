<?php
try{
$pdo = new PDO("mysql:host=localhost;dbname=store", 'root', 'mysql');
     $pdo->setAttribute(Pdo::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
 }catch(PDOException $e){
     die("ERROR:Could not connect." . $e->getMessage());
 }
  setcookie("Id",  $row['id'], time()+3600, "/", "", false);
  setcookie("FullName", $row['first_name'] , time()+3600, "/", "", false);
  setcookie("email",  $row['email_address'], time()+3600, "/", "", false);
  setcookie("createAt", $row['create_at'] , time()+3600, "/", "", false);
    
try{
    $sql = "SELECT * FROM customers";
    $results = $pdo->query($sql);
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

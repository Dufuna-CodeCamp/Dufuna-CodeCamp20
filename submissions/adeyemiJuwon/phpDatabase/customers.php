<?php
include('cookies.php');

$results = isset($_COOKIE['customers'])? unserialize($_COOKIE['customers']) : $queryDatabase->getAllCustomers();

try{
    
    if(count($results) > 0){
        echo "<Table>";
            echo "<tr>";
                echo "<th>ID</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email</th>";
                echo "<th>Create At </th>";
                echo "<th>Actions </th>";
            echo "</tr>";
        foreach ($results as $row){
            echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
                echo "<td>" . $row['email_address'] . "</td>";
                echo "<td>" . $row['create_at'] . "</td>";
               echo "<td>" . '<button><a href ="customers2.php?id='. $row['id'] . '"> Veiw </a></button>' ."</td>";
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

// another method to set the cookies without the cookies file

// include('connect.php');

// try{
//     $sql = "SELECT * FROM customers";
//     $results = $pdo->query($sql);
//     setcookie('customers',  json_encode($results), time() + 3600);
//     if($results ->rowCount() > 0){
//         echo "<Table>";
//             echo "<tr>";
//                 echo "<th>ID</th>";
//                 echo "<th>Full Name</th>";
//                 echo "<th>Email</th>";
//                 echo "<th>Create At </th>";
//                 echo "<th>Actions </th>";
//             echo "</tr>";
//             while($row = $results -> fetch()){
//             echo "<tr>";
//                 echo "<td>" . $row['id'] . "</td>";
//                 echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
//                 echo "<td>" . $row['email_address'] . "</td>";
//                 echo "<td>" . $row['create_at'] . "</td>";
//                 echo "<td>" . '<button> <a href ="insert.php"> Veiw </a> </button>' ."</td>";
//             echo "</tr>";
//             }
//         echo "</table>";
//             unset($results);
//     }else{
//         echo "No records matching your query were found";
//     }
// }catch(PDOException $e){
//     die("ERROR: Could not excute $sql." .$e->getMessage());

// }

// if(isset($_COOKIE['customers'])) {
//     echo "customers '" . $cookie_name . "' is set!<br>";
  
// } else {
//   echo "customers '" . 'customers' . "' is not set!";
// }
// unset($pdo);

?>

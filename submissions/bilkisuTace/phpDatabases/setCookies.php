<?php
include('db_con.php');
    function setData(){
        global $conn;
        $sql = "SELECT customer_id, first_name, last_name, email, created_at FROM customers";
        $results = mysqli_query($conn, $sql);
          if (mysqli_num_rows($results) > 0) {
              $data = [];
              while($row = mysqli_fetch_assoc($results)){
                  $data[] = $row;
              }
              setcookie("customers", serialize($data), time() + 3600);
              return($data);
          }
    
    }      
?>
<?php
include('db_con.php');
    function setData(){
        if(!isset($_COOKIE['customers'])) {
            global $conn;
            $sql = "SELECT customer_id, first_name, last_name, email, created_at FROM customers";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                $data = [];
                while($row = mysqli_fetch_assoc($result)){
                    $data[] = $row;
                }
                setcookie("customers", serialize($data), time() + 3600);
            }
        }
    }      
?>
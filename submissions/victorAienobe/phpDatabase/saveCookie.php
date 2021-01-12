<?php
   
    include_once('connection.php');
    
    //Querying the database to select all information available in the table
    try {
        $sql= "SELECT * FROM customer_details";
        $result = $pdo->query($sql);
        
    // setting up the cookie to save the result gotten from the databse
    setcookie("customer", json_encode($result), time()+7200, "/");
    include_once('accessCookie.php');

        if($result-> rowCount() > 0)  {
            echo "<table>";
                echo "<tr>";
                    echo "<th> S/N </th>";
                    echo "<th> Full Name </th>";
                    echo "<th> Email Address </th>";
                    echo "<th> Created At</th>";
                    echo "<th> Actions </th>";
                echo "</tr>";
                foreach($result as $row) {
                    echo "<tr>";
                        echo "<td>" . $row['id'] . "</td>";
                        echo "<td>" . $row['full_name'] . "</td>";
                        echo "<td>" . $row['email_address'] . "</td>";
                        echo "<td>" . $row['created_at'] . "</td>";
                        echo "<td>" . '<button>View</button>' . "</td>";
                    echo "</tr>";
                }
            echo "</table>";
            unset($result);
        }   else {
            echo "could not execute query";
        }
    } catch (PDOException $e) {
        die ('could not execute ' . $sql . $e->getMessage());
    }
?>

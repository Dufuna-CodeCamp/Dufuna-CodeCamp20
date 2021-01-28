<?php

require_once("connection.php");

//Querying the database to select all information available in the table
class QueryDb extends Connect {
    public function customer() {
        try {
            $sql= "SELECT * FROM customers";
            $stmt = $this->conn()->query($sql);
            $result = $stmt->fetchAll();
            
        // setting up the cookie to save the result in the database
        setcookie("customer", serialize($result), time()+7200, "/");
        return $result;
        } catch (PDOException $e) {
            die ('could not execute ' . $sql . $e->getMessage());
        }
    }
}
// To call the customer function
 $queryDb = new QueryDb();
$result = isset($_COOKIE['customer']) ? unserialize($_COOKIE['customer']) : $user->customer();

    if(count($result) > 0)  {
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
        echo 'No records matching your query were found';
    }
?>
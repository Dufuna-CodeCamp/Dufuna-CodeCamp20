<?php
require_once('connection.php');

echo "<h2> List of Customers at Taries Empire </h2>";

        try{
            
            /* ACCESSING E-COMMERCE DATABASE AND QUERYING THE DATABASE*/
            $use_db = "USE taries_empire";
            $sql = "SELECT * FROM customers";
            $pdo->exec($use_db);
            $stmt = $pdo->query($sql);
            
        
            /* GENERATING COOKIES
            1. result is initalized to get all records from database
            2. This result is serialize to change the array/object to simple string/text file which is required to create cookies.
             */
             $result = $stmt->fetchAll();
            setcookie("customer", serialize($result), time() + (86400 * 30), "/", "", false); //60sec *60mins *24hours/day => 86400 = 1 day
            if (isset($_COOKIE['customer'])){
                $output = unserialize($_COOKIE["customer"]);
            }
                        
            if(count($output) > 0){
                echo"<table>";
                    echo"<tr>";
                        echo"<th> S/N <th>";
                        echo"<th> Full Name <th>";
                        echo"<th> Email Address <th>";
                        echo"<th> Created At <th>";
                        echo"<th> Actions <th>";
                    echo"</tr>";
                // Loop through to access records (Objects in an array i.e datatype <=> JSON formatt)
                foreach($output as $row){
                    echo"<tr>";
                        echo "<td>" . $row['id'] ."</td>";
                        echo "<td>" . $row['full_name'] ."</td>";
                        echo "<td>" . $row['email_address'] ."</td>";
                        echo "<td>" . $row['created_at'] ."</td>";
                        echo "<td>" . '<a><button>View</button></a>' . "</td>";
                    echo"</tr>";
                }
                echo"<table>";
            
                // Close/Free result set
                unset($output);
            }else{
                echo 'No records matching your query were found.';
            }
            
        }catch (PDOException $err) {
                die('ERROR: Could not execute' .$sql . $err->getMessage());
}
// To display results on the browser as a table, we convert the result to array/object.




unset($pdo);

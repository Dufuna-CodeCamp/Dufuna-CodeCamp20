<?php

require_once("connection.php");

$cookieName = 'customerList';

// 1. check if cookie exists
if (! empty($_COOKIE[$cookieName])) {
    // 2. get cookie data
    $result = unserialize($_COOKIE[$cookieName]);
}
else {
    // 3. there is no cookie, load data from database
    $sql = 'select id,concat(first_name," ",last_name )as full_name,email,created_at from customers';
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll();
    //4. save in cookie
    setcookie($cookieName, serialize($result),time() + 3600,"/","",0);
}

// 5. display result using $result only
if (!empty($result)) {
    echo"<h1>List of Customers</h1>";
    echo"<table>";
       echo"<tr>";
            echo"<th>S/N</th>";
            echo"<th>Full Name</th>";
            echo"<th>Email Address</th>";
            echo"<th>Created At</th>";
            echo"<th>Action</th>";
       echo"</tr>";
       
       foreach($result as $row){
        echo"<tr>";
           echo"<td>{$row['id']}</td>";
           echo"<td>{$row['full_name']}</td>";
           echo"<td>{$row['email']}</td>";
           echo"<td>{$row['created_at']}</td>";
           echo "<td>" . '<button><a href="./viewOrder.php?id=' . $row['id'] . '">View</a></button>' . "</td>";
        echo"</tr>"; 
       }
    echo"</table>";
//6. free result
    unset($result);
} else{
    echo "No records from your query were returned";
}
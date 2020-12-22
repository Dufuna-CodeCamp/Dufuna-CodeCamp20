<?php

include('./classes/queryDb.class.php');

    // an instance of queryDb class to call the getAllUsers method;
    $queryDb = new QueryDb();

    $results = isset($_COOKIE['users'])? unserialize($_COOKIE['users']) : $queryDb->getAllUsers();

    if(count($results) > 0) {
        echo "<table>";
            echo "<tr>";
                echo "<td>S/N</td>";
                echo "<td>Full Name</td>";
                echo "<td>Email Address</td>";
                echo "<td>Created At</td>";
                echo "<td>Actions</td>";
            echo "</tr>";
        foreach ($results as $row) {
            echo "<tr>";
                echo "<td>". $row['id'] . "</td>";
                echo "<td>". $row['fullname'] . "</td>";
                echo "<td>". $row['email'] . "</td>";
                echo "<td>". $row['created_at'] . "</td>";
                echo "<td>". "<a href='#'>view</a>" . "</td>";
            echo "</tr>";
            };
        echo "</table>";
        unset($results);
    } else{
        echo 'No records matching your query were found';
    };
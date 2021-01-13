<?php

require_once('cookies.php');

    $queryDb = new DbQuery();

    $results = isset($_COOKIE['customerz'])? unserialize($_COOKIE['customerz']) : $queryDb->getAllCustomers();

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
                echo "<td>". $row['firstname'] . $row['lastname'] . "</td>";
                echo "<td>". $row['email'] . "</td>";
                echo "<td>". $row['created_at'] . "</td>";
                echo '<td>'. 
                        "<a href='#' >view </a>" . 
                    '</td>';
            echo "</tr>";
        };
        echo "</table>";
        unset($results);
    } else{
        echo 'No records matching your query were found';
    };
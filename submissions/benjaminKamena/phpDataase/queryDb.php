<?php
include('cookie.php');

$results = isset($_COOKIE['customers'])? unserialize($_COOKIE['customers']) : $queryDatabase->getAllCustomers();

try{
	if(count($results) > 0){
		echo "<table>";
		   echo "<tr>";
		     echo"<th>SN</th>";
		     echo"<th>fullName</th>";
		     echo"<th>EmailAddress</th>";
		     echo"<th>CreatedAt</th>";
		     echo "<th>Actions</th>";
		   echo"</tr>";
    foreach($results as $row){
		echo "<tr>";
           echo "<td> .$row[SN].</td>";
	       echo "<td> .$row[fullName].</td>";
	       echo "<td> .$row[EmailAddress].</td>";
	       echo "<td> .$row[CreatedAt].</td>";
		  echo '<td>'. "<a href='#' >view </a>" . '</td>';
	   echo "</tr>";
	}
	echo "</table>";
	unset($results);
} else{
	echo 'No match query';
	}
} catch(PDOException $e){
    die("ERROR: Could not excute $sql." .$e->getMessage());
};
unset($pdo);
?>
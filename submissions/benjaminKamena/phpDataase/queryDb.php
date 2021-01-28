<?php
include('cookie.php');

$results = isset($_COOKIE['customers'])? unserialize($_COOKIE['customers']) : $queryDatabase->getAllCustomers();

try{
	if(count($results) > 0){
		echo "<table>";
		echo "<tr>";
		echo"<th>ID</th>";
		echo"<th>Full Name</th";
		echo"<th>Email</th>";
		echo"<th>Created At</th>";
		echo"<th>Actions</th>";
		echo"</tr>";
	foreach($results as $row){
		echo "<tr>";
		echo "<td>" .$row['customer_id']."</td>";
		echo "<td>" .$row['customer_first_name']. " " .$row['customer_last_name']. "</td>";
		echo "<td>" .$row['customer_email_address']. "</td>";
		echo "<td>" .$row['created_at']. "</td>";
		echo "<td>" . '<button><a href ="#"> Veiw </a></button>'."</td>";
		echo "</tr>";
	}
	echo "</table>";
	unset($results);
   }else{
	echo 'No match query';
}
}catch(PDOException $e){
	die("ERROR: Could not excute $sql." .$e->getMessage());
}
unset($pdo);
?>
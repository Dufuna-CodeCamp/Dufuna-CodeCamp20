<html>
<?php
$con = mysqli_connect("localhost", "root", "mysql", "e_commerce_db");
if (mysqli_connect_errno()){
	echo "Failed to connect to MySql:" .mysqli_connect_errno();
} else{
	//echo "Connected Successfully.";
	$result = mysqli_query($con,"SELECT * FROM customers");
	echo "<table border = '1'>
	<tr>
	<th>SN</th>
	<th>fullName</th>
	<th>EmailAddress</th>
	<th>CreatedAt</th>
	<th>Actions</th>
	</tr>";
	
	while($row = mysqli_fetch_array($result)){
	    echo "<tr>";
		echo "<td> .$row[SN].</td>";
		echo "<td> .$row[fullName].</td>";
		echo "<td> .$row[EmailAddress].</td>";
		echo "<td> .$row[CreatedAt].</td>";
		echo "<td> .$row[Actions].</td>";
		echo "</tr>";
	}
	echo "</table>";
}
?>

</html>
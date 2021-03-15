<?php
include('db_con.php');
include('setCookies.php');

$sql = "SELECT customer_id, first_name, last_name, email, created_at FROM customers";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  echo '
    <table cellpadding="1" cellspacing="1" border="1">
      <tr>
      <th>S/N</th>
      <th>Full Name</th> 
      <th>Email Address</th>
      <th>Created At</th>
      <th>Actions</th>
    </tr>       
  ';
  
$results = [];
while($row = mysqli_fetch_assoc($result)) {
  $results[] = $row;
  echo "
    <tr>
      <td>" . $row["customer_id"]. "</td>
      <td>" . $row["first_name"]. " " . $row["last_name"]."</td>
      <td>" . $row["email"]. "</td>
      <td>" . $row["created_at"]. "</td>
      <td></td>
    </tr>
    ";
  }
  setData('customers', $results, time() + 3600);

  echo '
  </table>
  ';
} else {
  echo "0 results";
}

mysqli_close($conn);
?>
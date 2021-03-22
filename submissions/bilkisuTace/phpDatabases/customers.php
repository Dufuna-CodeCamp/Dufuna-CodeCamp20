<?php
include('setCookies.php');
setData();
$results = json_decode($_COOKIE['customers'], true);

if (isset($results) && count($results) > 0) {
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
  foreach($results as $result) {
    echo "
      <tr>
        <td>" . $result["customer_id"]. "</td>
        <td>" . $result["first_name"]. " " . $result["last_name"]."</td>
        <td>" . $result["email"]. "</td>
        <td>" . $result["created_at"]. "</td>
        <td></td>
      </tr>
    ";
  }
  echo '
  </table>
  ';
} else {
  echo "0 results";
}

mysqli_close($conn);
?>
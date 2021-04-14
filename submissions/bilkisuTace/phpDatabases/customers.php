<?php
include('setCookies.php');
if(!isset($_COOKIE['customers'])){
  $results = setData();
}else{
  $results = unserialize($_COOKIE['customers'], ["allowed_classes" => false]);
}


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
        <td style='border: solid 1px black'>" . '<button>view</button>' . "</td>
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
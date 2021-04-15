<?php
include('db_con.php');
$customer_id =0;
if(isset($_GET['id'])){
  $customer_id = $_GET['id'];
}else{
  echo 'Unknown Customer';
  exit;
}
if(!isset($_COOKIE['order_items'])){
 $sql = "
 SELECT order_id, name,  order_items.unit_price, quantity, total_amount, order_items.created_at,
 CONCAT(city, ', ', state, ', ', country) as address
 FROM order_items 
 INNER JOIN products ON (order_items.product_id = products.product_id)
 INNER JOIN orders ON (order_items.order_id = orders.orders_id)
 INNER JOIN customers ON (orders.orders_id = customers.customer_id)
 INNER JOIN addresses ON (customers.customer_id = addresses.address_id)
 WHERE customers.customer_id = $customer_id
 
 ";
    $results = mysqli_query($conn, $sql);
      if (mysqli_num_rows($results) > 0) {
          $data = [];
          while($row = mysqli_fetch_assoc($results)){
            $data[] = $row;
          }
          $results = setcookie("order_items", serialize($data), time() + 3600);
      }else{
        echo "0 results";
      }
}else{
  $results = unserialize($_COOKIE['order_items'], ["allowed_classes" => false]);
}

if (isset($results) && count($results) > 0) {
  echo '
    <table cellpadding="1" cellspacing="1" border="1">
      <tr>
      <th>S/N</th>
      <th>Product Name</th>
      <th>Order Unit Price</th>
      <th>Order Quantity</th>
      <th>Order Total Price</th>
      <th>Created Date</th>
      <th>Customer Location</th>
    </tr>
  ';
  foreach($results as $result) {
    echo "
      <tr>
        <td>" . $result["order_id"]. "</td>
        <td>" . $result["name"]. "</td>
        <td>" . $result["unit_price"]. "</td>
        <td>" . $result["quantity"]. "</td>
        <td>" . $result["total_amount"]. "</td>
        <td>" . $result["created_at"]. "</td>
        <td>" . $result["address"]. "</td>
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
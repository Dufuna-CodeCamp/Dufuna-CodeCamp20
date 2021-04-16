<?php
require_once("connection.php");

$customer_id  = $_GET['id'];

$savedCookie = 'customerList';

// 1. check if cookie exists
if (! empty($_COOKIE[$cookieName])) {
// 2. get cookie data
    $result = unserialize($_COOKIE[$cookieName]);
}
else {
 // 3. there is no cookie or matching id, load data from database
$sql = "SELECT customers.id,products.product_name,order_items.unit_price,order_items.quantity,order_items.total_amount,
orders.order_date,concat(addresses.street_address,' ',addresses.city,' ',addresses.state,' ',addresses.country )as customer_location
from customers
left join orders on customers.id = orders.customer_id
left join addresses on customers.id = addresses.customer_id
left join order_items on orders.id = order_items.order_id
left join products on order_items.product_id = products.id
where customers.id = '$customer_id'";

$stmt = $pdo->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll();
//4. save in cookie
setcookie($savedCookie, serialize($result),time() + 3600,"/","",0);
}
// 5. display result using $result only
if (!empty($result)) {
    echo"<h1>List of Customers</h1>";
    echo"<table>";
       echo"<tr>";
            echo"<th>ID</th>";
            echo"<th>Product Name</th>";
            echo"<th>Unit Price</th>";
            echo"<th>Quantity</th>";
            echo"<th>Total Amount</th>";
            echo"<th>Order Date</th>";
            echo"<th>Customer Location</th>";
       echo"</tr>";
       
       foreach($result as $row){
        echo"<tr>";
             echo"<td>{$row['id']}</td>";
             echo"<td>{$row['product_name']}</td>";
             echo"<td>{$row['unit_price']}</td>";
             echo"<td>{$row['quantity']}</td>";
             echo"<td>{$row['total_amount']}</td>";
             echo"<td>{$row['order_date']}</td>";
             echo"<td>{$row['customer_location']}</td>";
        echo"</tr>"; 
       }
    echo"</table>";
//6. free result
    unset($result);
} else{
    echo "No records from your query were returned";
}


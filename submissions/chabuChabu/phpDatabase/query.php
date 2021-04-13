<?php
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
?>
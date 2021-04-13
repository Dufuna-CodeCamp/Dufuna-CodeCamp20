<?php
// 1.Connect to database
require_once("connection.php");

$customer_id  = $_GET['id'];

$savedCookie = 'customerOrder';
// 2. Check if cookie is empty
if (empty($_COOKIE[$savedCookie])) {

    include("query.php");
// 3. Check if cookie has a record
}else if(!empty($_COOKIE[$savedCookie])) {

    $result = unserialize($_COOKIE[$savedCookie]);
    foreach ($result as $lkey => $lval){
// 4. Check within the array levels for id 
        foreach($lval as $mkey => $mval) {
          if ($mkey == "id") { 
            $lid .= $mval . "#";
          }
        }
    }
// 5. Make sure whatever comes after the value of the id is ignored
    $id = substr($lid, 0, strpos($lid, "#")); 

    if ($id == $customer_id) {
// 6. if cookie has not expired,display same record stored with the cookie
        $result = unserialize($_COOKIE[$savedCookie]);
    }else{
// 7. if cookie id has changed,select record using new customer id
        include("query.php");
    }
    
}else{
    echo"No records were returned!!!";
}
// 8. display result using $result only
if (!empty($result)) {
    echo"<h1>Customers Orders</h1>";
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
  
//9. free result
    unset($result);
} else{
    echo "No records from your query were returned";
        
}  
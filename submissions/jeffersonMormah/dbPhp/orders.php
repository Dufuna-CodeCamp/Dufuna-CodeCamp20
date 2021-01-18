<?php
require_once("cookies.php");
echo "<h3>Order List</h3>";

if (isset($_GET['id'])){
    $id = $_GET['id']

$queryDb = new DbQuery();

$orders = isset($_COOKIE['ordering'])? unserialize($_COOKIE['ordering']) : $queryDb->getAllOrderings();

} else {
    echo "customer not found";
}
if(count($orders) > 0) {
    echo "<table>";
        echo "<tr>";
            echo "<td>S/N</td>";
            echo "<td>Product Name</td>";
            echo "<td>Unit Price</td>";
            echo "<td>Quantity</td>";
            echo "<td>Total Price</td>";
            echo "<td>Order Date</td>";
            echo "<td>Customer Address</td>";
        echo "</tr>";
    foreach ($orders as $row) {
        echo "<tr>";
            echo "<td>". $row['id'] . "</td>";
            echo "<td>". $row['product_name']  . "</td>";
            echo "<td>". $row['unit_price'] . "</td>";
            echo "<td>". $row['quantity'] . "</td>";
            echo "<td>". $row['total_amount'] . "</td>";
            echo "<td>". $row['order_date'] . "</td>";
            echo "<td>" . $row['street_address'] . ", " . $row['city'] . ", " . $row['state_name'] . ", "  . $row['country'] ."</td>";
        echo "</tr>";
    };
    echo "</table>";
    unset($orders);
} else{
    echo 'No records matching your query were found';
};
?>
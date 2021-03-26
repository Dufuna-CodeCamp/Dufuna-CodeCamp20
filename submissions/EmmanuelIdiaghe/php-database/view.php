<?php
include_once 'connect.php';

#Variable Declaration
$notCustomer = !(isset($_COOKIE["details"])); //cookie not set
$customer_id = ($_GET['view']);
$info;


# Function that sets cookie
function loadCustomer() {
    global $pdo;
    global $customer_id;
    
    $sql = "SELECT  orders.customer_id,
                    products.name_of_product,
                    products.unit_price,
                    order_items.quantity,
                    order_items.total_amount,
                    orders.order_date,
                    addresses.street_name,
                    addresses.city_name,
                    addresses.state_name,
                    addresses.country
    FROM orders
    LEFT JOIN order_items ON order_items.order_id = orders.id
    LEFT JOIN products ON products.id = order_items.product_id
    LEFT JOIN addresses ON addresses.customer_id = orders.customer_id
    WHERE orders.customer_id = $customer_id";
    
    $result = $pdo->query($sql);
    $details = $result->fetchAll();
    setcookie("details", serialize($details), time() + (86400 * 30), "/", "", "", "");
    return $details;
}

function display() {
    global $info;
    if (count($info) > 0) {
        echo "<table style= 'border: 1px solid black'>";
            echo "<tr>";
                echo "<th style= 'border: 1px solid black'>S/N</th>";
                echo "<th style= 'border: 1px solid black'>Product Name</th>";
                echo "<th style= 'border: 1px solid black'>Order Unit Price</th>";
                echo "<th style= 'border: 1px solid black'>Order Quantity</th>";
                echo "<th style= 'border: 1px solid black'>Order Total Price</th>";
                echo "<th style= 'border: 1px solid black'>Created Date</th>";
                echo "<th style= 'border: 1px solid black'>Customer Location</th>";
            echo "</tr>";
        
            foreach ($info as $key => $value) {
                echo "<tr>";
                    echo "<td style= 'border: 1px solid black'>" . ($key+1) . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["name_of_product"] . "  " . $value["last_name"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["unit_price"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["quantity"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["total_amount"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["order_date"] . "</td>";
                    echo "<td style= 'border: 1px solid black'>" . $value["street_name"] . ", " . $value["city_name"] .", " .  $value["state_name"] . ", " .  $value["country"] . "</td>";
                echo "</tr>";
            }
        echo "</table";
    } else echo "No record found!";
}

try {
    if ($notCustomer) $info = loadCustomer(); //Fetch query and set cookie
    else $info = unserialize($_COOKIE["details"]); //Fetch cookie 
    display();
} catch(PDOException $e) {
    die ("ERROR: $sql " . $e->getMessage()) . "<br>";
}
?>
<?php
#Variable Declaration
$notSet = !(isset($_COOKIE["show"])); //cookie not set


# Function that sets cookie
function load() {
    //SetUp Connection
    global $pdo;
    $usernameDB = "dufuna";//user
    $passwordDB = "dufuna12345";//user password

    try {
        $pdo = new PDO("mysql:host=localhost", $usernameDB, $passwordDB);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected Successfully. Host info: " . $pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS")) . "<br>";
    
    } catch (PDOException $e) {
        die ("ERROR: Could not connect. " . $e->getMessage()) . "<br>";
    }
    
    #Use Database
    try {
        $sql = "USE emmy_shop";
        $pdo->exec($sql);
        echo "Using Database: emmy_shop <br><hr><br>";
    
    } catch (PDOException $e) {
        die ("ERROR: Could not use database $sql " . $e->getMessage()) . "<br>";
    }
    
    $sql = "SELECT * FROM customers";
    $result = $pdo->query($sql);
    $details = $result->fetchAll();
    setcookie("show", serialize($details), time() + (86400 * 30), "/");
    $_COOKIE["show"] = serialize($details);
}


try {
    if ($notSet) {
        load(); //set cookie
        echo "No customer information found, please <b>REFRESH PAGE</b>";
    }
    else {
        $display = unserialize($_COOKIE["show"]);
        if (count($display) > 0) {
            echo "<table style= 'border: 1px solid black'>";
                echo "<tr>";
                    echo "<th style= 'border: 1px solid black'>S/N</th>";
                    echo "<th style= 'border: 1px solid black'>Full Name</th>";
                    echo "<th style= 'border: 1px solid black'>Email Address</th>";
                    echo "<th style= 'border: 1px solid black'>Created At</th>";
                    echo "<th style= 'border: 1px solid black'>Actions</th>";
                echo "</tr>";
            
                foreach ($display as $value) {
                    echo "<tr>";
                        echo "<td style= 'border: 1px solid black'>" . $value["id"] . "</td>";
                        echo "<td style= 'border: 1px solid black'>" . $value["first_name"] . "  " . $value["last_name"] . "</td>";
                        echo "<td style= 'border: 1px solid black'>" . $value["email_address"] . "</td>";
                        echo "<td style= 'border: 1px solid black'>" . $value["created_at"] . "</td>";
                        echo "<td style= 'border: 1px solid black'><button style= 'color: black; background-color: #DAF943; border-radius: 20%; margin-left: 4px;'>View</button></td>";
                    echo "</tr>";
                }
            echo "</table";
        } else echo "No record found!";
    }   
} catch(PDOException $e) {
    die ("ERROR: $sql " . $e->getMessage()) . "<br>";
}
?>